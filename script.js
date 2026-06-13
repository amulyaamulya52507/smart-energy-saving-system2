function toggleLight() {
  let light = document.getElementById("light");
  light.innerHTML = light.innerHTML === "ON" ? "OFF" : "ON";
}

function toggleFan() {
  let fan = document.getElementById("fan");
  fan.innerHTML = fan.innerHTML === "ON" ? "OFF" : "ON";
}