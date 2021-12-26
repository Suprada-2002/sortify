async function merge(start, mid, end) {
  console.log("start=", start, ",mid=", mid, ",end=", end);
  var temp = document.querySelectorAll(".barheights");
  var i = start,
    j = mid + 1;

  var sort = new Array();
  var k = 0;
  while (i <= mid && j <= end) {
    var ht1 = temp[i].style.height;
    var ht2 = temp[j].style.height;
    ht1 = ht1.replace("px", "");
    ht2 = ht2.replace("px", "");
    ht1 = parseInt(ht1);
    ht2 = parseInt(ht2);

    if (ht1 <= ht2) {
      sort[k++] = temp[i++].style.height;
      temp[i - 1].style.background = "rgb(220, 0, 255)";
      if (i <= mid) temp[i].style.background = "red";
    } else {
      sort[k++] = temp[j++].style.height;
      temp[j - 1].style.background = "rgb(220, 0, 255)";
      if (j <= end) temp[j].style.background = "red";
    }
  }

  while (i <= mid) {
    sort[k++] = temp[i++].style.height;
    temp[i - 1].style.background = "rgb(220, 0, 255)";
    if (i <= mid) temp[i].style.background = "red";
  }

  while (j <= end) {
    sort[k++] = temp[j++].style.height;
    temp[j - 1].style.background = "rgb(220, 0, 255)";
    if (j <= end) temp[j].style.background = "red";
  }
  var i = start,
    k = 0,
    j = mid + 1;
  var step = mid + 1 - start;

  while (i <= mid || j <= end) {
    if (i <= mid) {
      temp[i].style.background = "red";
      temp[i++].style.height = sort[k];
    }
    if (j <= end) {
      temp[j].style.background = "red";
      temp[j++].style.height = sort[k + step];
    }
    k++;
    await speedset();
    temp[i - 1].style.background = "rgb(220, 0, 255)";
    temp[j - 1].style.background = "rgb(220, 0, 255)";
  }
}

async function partition(start, end) {
  console.log("Reaching", start, end);
  var arr = document.querySelectorAll(".barheights");

  if (start < end) {
    var mid = Math.floor((start + end) / 2);

    arr[start].style.background = "red";
    arr[mid].style.background = "blue";
    arr[end].style.background = "red";
    await speedset();
    arr[start].style.background = "yellow";
    arr[mid].style.background = "yellow";
    arr[end].style.background = "yellow";

    await partition(start, mid);
    await partition(mid + 1, end);

    arr[start].style.background = "red";
    arr[end].style.baackground = "red";
    await merge(start, mid, end);
  }
}

async function mergeSort() {
  console.log("Reaching");
  var temp = document.querySelectorAll(".barheights");
  const speed = document.getElementById("speed").nodeValue;
  const speeddelay = 404 - speed;

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
  var end = temp.length - 1;
  await partition(start, end);
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
