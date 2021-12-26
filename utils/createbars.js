function addbars() {
  document.getElementById("addbar").innerHTML = "";
  const size = document.getElementById("arr_size").value;
  const multiplier = size / 10;
  console.log(multiplier);

  for (var i = 0; i < size; i++) {
    var element = document.getElementById("addbar");
    var div = document.createElement("div");
    element.appendChild(div);
    div.classList.add("barheights");
  }

  var temp = document.querySelectorAll(".barheights");
  for (var i = 0; i < temp.length; i++) {
    temp[i].style.border = "0.5px solid black";
    temp[i].style.backgroundColor = "white";
    temp[i].style.flex = 1;
    temp[i].style.float = "left";
    temp[i].style.display = "block";
    temp[i].style.height =
      Math.floor((Math.random() * (100 - 1) + 1) * 3.7795275591) + "px";
  }
}
