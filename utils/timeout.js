async function speedset() {
  var speed = document.getElementById("speed").value;
  var speeddelay = 404 - speed;

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, speeddelay)
  );
}
