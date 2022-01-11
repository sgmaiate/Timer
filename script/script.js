const segundos = document.querySelector("#second");
const minutos = document.querySelector("#minute");
const horas = document.querySelector("#hour");
const lista = document.querySelector(".list");
const marca = document.createElement("p");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const saveButton = document.querySelector(".save");
const SwitchButton = document.querySelector(".switch-ball");
const body = document.querySelector("body");
const switchBox = document.querySelector(".dark-switch");
const title = document.querySelectorAll(".switch-title");
var myTimer;

function countdown() {
  if (Number(segundos.innerHTML) < 59) {
    segundos.innerHTML = Number(segundos.innerHTML) + 1;
  } else if (Number(segundos.innerHTML) === 59) {
    segundos.innerHTML = 0;
    minutos.innerHTML = Number(minutos.innerHTML) + 1;
  }
  if (Number(minutos.innerHTML) === 60) {
    minutos.innerHTML = 0;
    horas.innerHTML = Number(horas.innerHTML) + 1;
  }
  addZero();
}
function stopTimer() {
  clearInterval(myTimer);
}

function reset() {
  segundos.innerHTML = "00";
  minutos.innerHTML = "00";
  horas.innerHTML = "00";
}
function timer() {
  myTimer = setInterval(countdown, 1000);
}

function addZero() {
  if (Number(segundos.innerHTML) < 10) {
    segundos.innerHTML = `0${segundos.innerHTML}`;
  }
  if (minutos.innerHTML.length < 2) {
    minutos.innerHTML = `0${minutos.innerHTML}`;
  }
  if (horas.innerHTML.length < 2) {
    horas.innerHTML = `0${horas.innerHTML}`;
  }
}
function save() {
  while (true) {
    marca.innerHTML = `Você salvou em ${horas.innerHTML}:${minutos.innerHTML}:${segundos.innerHTML} <br>`;
    let marcados = [];
    marcados.unshift(marca.innerText);
    lista.append(marcados[0]);
    marcados.shift();
    break;
  }
}
function darkTheme() {
  SwitchButton.classList.toggle("switch-active");
  body.classList.toggle("dark");
  switchBox.classList.toggle("switch-box-active");
  title[0].classList.toggle("none");
  title[1].classList.toggle("none");
}

SwitchButton.addEventListener("click", darkTheme);
startButton.addEventListener("click", timer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", reset);
saveButton.addEventListener("click", save);
