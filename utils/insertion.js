async function insertionSort() {
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

  var start = 0;
  temp[start].style.background = "blue";

  for (var i = 1; i < temp.length; i++) {
    var parent = temp[i].style.height;
    parent = parent.replace("px", "");
    parent = parseInt(parent);
    temp[i].style.background = "rgb(16, 239, 232)";

    var j = i;
    for (j = i - 1; j >= 0; j--) {
      temp[j].style.background = "red";
      var currval = temp[j].style.height;
      currval = currval.replace("px", "");
      currval = parseInt(currval);
      temp[j].style.background = "red";
      if (currval > parent) {
        await speedset();
        temp[j + 1].style.height = temp[j].style.height;
        temp[j + 1].style.background = "rgb(220, 0, 255)";
        temp[j].style.background = "blue";
      } else break;
    }
    await speedset();
    temp[j + 1].style.height = parent + "px";
    temp[j + 1].style.background = "rgb(220, 0, 255)";
    if (j != -1) temp[j++].style.background = "blue";

    while (j <= i) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 0.5)
      );
      if (j != -1) temp[j++].style.background = "blue";
      else {
        j++;
        if (j <= i) temp[j].style.background = "blue";
      }
    }
  }

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
