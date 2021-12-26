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

async function bubble() {
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

  console.log(typeof temp);
  const speed = document.getElementById("speed").value;

  console.log(temp.length);
  for (var i = 0; i < temp.length - 1; i++) {
    for (var j = 0; j < temp.length - i - 1; j++) {
      temp[j].style.background = "red";
      temp[j + 1].style.background = "red";
      var height1 = temp[j].style.height;
      var height2 = temp[j + 1].style.height;
      height1.replace("px", "");
      height2.replace("px", "");
      height1 = parseInt(height1);
      height2 = parseInt(height2);
      if (height1 > height2) {
        console.log(height1);
        console.log(height2);
        await speedset();
        swap(temp[j], temp[j + 1]);
      }
      temp[j].style.background = "blue";
      temp[j + 1].style.background = "blue";
    }
    temp[temp.length - i - 1].style.background = "green";
    console.log(
      temp[temp.length - i - 1].style.height + " " + (temp.length - i - 1)
    );
  }

  //yellow - blue

  temp[0].style.background = "green";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2)
  );

  for (var i = 0; i < temp.length; i++) {
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
