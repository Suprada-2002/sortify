function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");
  console.log(transform1);
  console.log(transform2);
  el1.style.height = transform2;
  el2.style.height = transform1;
}

async function placepivot(start, end) {
  var temp = document.querySelectorAll(".barheights");
  var pivot = temp[end].style.height;
  pivot = pivot.replace("px", "");
  pivot = parseInt(pivot);

  var low = start - 1;
  for (var i = start; i < end; i++) {
    var ht = temp[i].style.height;
    ht = ht.replace("px", "");
    ht = parseInt(ht);
    if (ht < pivot) {
      if (low != start - 1) temp[low].style.background = "yellow";

      low++;
      temp[low].style.background = "red";
      await speedset();
      swap(temp[low], temp[i]);
    }

    temp[i].style.background = "yellow";
    if (i + 1 != end) temp[i + 1].style.background = "red";
  }

  if (low != start - 1) temp[low].style.background = "yellow";
  low++;
  temp[low].style.background = "red";
  await speedset();
  swap(temp[low], temp[end]);
  temp[low].style.background = "rgb(220, 0, 255)";
  temp[end].style.background = "red";

  await speedset();
  temp[end].style.background = "yellow";

  return low;
}

async function dividebypivot(start, end) {
  var temp = document.querySelectorAll(".barheights");
  if (start < end) {
    temp[start].style.background = "red";
    temp[end].style.background = "blue";
    var pi = await placepivot(start, end);
    await dividebypivot(start, pi - 1);
    await dividebypivot(pi + 1, end);
  }
}

async function quickSort() {
  var temp = document.querySelectorAll(".barheights");

  const btn1 = document.getElementById("newarr");
  const btn2 = document.getElementById("arr_size");
  const btn3 = document.getElementById("speed");
  const btn4 = document.getElementById("bblsort");
  const btn5 = document.getElementById("mrgsort");
  const btn6 = document.getElementById("qcksort");
  const btn7 = document.getElementById("selctsort");
  const btn8 = document.getElementById("insertsort");
  btn1.disabled = true;
  btn2.disabled = true;
  btn4.disabled = true;
  btn5.disabled = true;
  btn6.disabled = true;
  btn7.disabled = true;
  btn8.disabled = true;

  var start = 0,
    end = temp.length - 1;
  await dividebypivot(start, end);

  while (start <= end) {
    temp[start++].style.background = "greenyellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2)
    );
  }

  btn1.disabled = false;
  btn2.disabled = false;
  btn3.disabled = false;
  btn4.disabled = false;
  btn5.disabled = false;
  btn6.disabled = false;
  btn7.disabled = false;
  btn8.disabled = false;
}
