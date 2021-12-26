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

async function selectionSort() {
  temp = document.querySelectorAll(".barheights");

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

  var start = 0;
  while (start < temp.length - 1) {
    temp[start].style.background = "blue";
    var minheight = temp[start].style.height;
    minheight = minheight.replace("px", "");
    minheight = parseInt(minheight);
    var minindex = start;

    for (var i = start + 1; i < temp.length; i++) {
      var currht = temp[i].style.height;
      currht = currht.replace("px", "");
      currht = parseInt(currht);
      temp[i].style.background = "red";

      if (currht < minheight) {
        await speedset();
        if (minindex != start) temp[minindex].style.background = "yellow";
        minindex = i;
        minheight = currht;
        temp[i].style.background = "rgb(220, 0, 255)";
      } else {
        await speedset();
        temp[i].style.background = "yellow";
      }
    }

    await speedset();
    swap(temp[start], temp[minindex]);
    if (minindex != start) temp[minindex].style.background = "yellow";
    start++;
  }
  temp[start].style.background = "blue";
  for (i = 0; i < temp.length; i++) {
    temp[i].style.background = "greenyellow";
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
