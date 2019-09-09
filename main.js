var Modal = document.getElementById("Modal");
var turnOn = document.getElementById("turnOnButton");
var turnOff = document.getElementById("turnOffButton");
var body = document.getElementById("body");

turnOn.addEventListener("click", function ()
{
    Modal.classList.add("active");
    body.style.backgroundColor = "#00000052"
})

turnOff.addEventListener("click", function ()
{
    Modal.classList.remove("active");
    body.style.backgroundColor = "white"
})
