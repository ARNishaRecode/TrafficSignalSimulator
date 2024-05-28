const signalRedEL = document.getElementById("signalRed");
const signalYellowEL = document.querySelector("#signalYellow");
const signalGreenEL = document.querySelector("#signalGreen");
const counterRedEL = document.querySelector("#counterRed");
const counterYellowEL = document.querySelector("#counterYellow");
const counterGreenEL = document.querySelector("#counterGreen");
const textStopEL = document.querySelector("#textStop");
const textWaitEL = document.querySelector("#textWait");
const textGoEL = document.querySelector("#textGo");
const buttonSignalEL = document.querySelector(".button-85");
const butSTOP = document.querySelector(".button-stop");
var counter = 3;
var myInter = 0;

counterRedStart = function () {
  butSTOP.style.display = "block";
  buttonSignalEL.style.display = "none";
  signalRedEL.setAttribute("id", "signalRedNew");
  counterRedEL.textContent = counter;
  textStopEL.textContent = "STOP";
  myInter = setInterval(function () {
    counterFunction(signalRedEL, counterRedEL, textStopEL);
  }, 1000);
};

counterYellowStart = function () {
  signalYellowEL.setAttribute("id", "signalYellowNew");
  counterYellowEL.textContent = counter;
  textWaitEL.textContent = "WAIT";
  myInter = setInterval(function () {
    counterFunction(signalYellowEL, counterYellowEL, textWaitEL);
  }, 1000);
};
counterGreenStart = function () {
  signalGreenEL.setAttribute("id", "signalGreenNew");
  counterGreenEL.textContent = counter;
  textGoEL.textContent = "GO";
  myInter = setInterval(function () {
    counterFunction(signalGreenEL, counterGreenEL, textGoEL);
  }, 1000);
};
counterFunction = function (CircleEL, counterTextEL, textEL) {
  if (counter !== 0) {
    console.log(counter);
    counter = counter - 1;
    counterTextEL.textContent = counter;
    if (counter === 0) textEL.textContent = "";
  } else {
    counter = 3;

    clearInterval(myInter);
    switch (CircleEL.getAttribute("id")) {
      case "signalRedNew":
        CircleEL.setAttribute("id", "signalRed");
        counterTextEL.textContent = "";
        counterYellowStart();
        break;
      case "signalYellowNew":
        CircleEL.setAttribute("id", "signalYellow");
        counterTextEL.textContent = "";
        counter = 10;
        counterGreenStart();
        break;
      case "signalGreenNew":
        CircleEL.setAttribute("id", "signalGreen");
        counterTextEL.textContent = "";
        counterRedStart();
        break;
    }
  }
};

stopLogic = function () {
  clearInterval(myInter);
  counter = 3;
  signalRedEL.setAttribute("id", "signalRed");
  signalYellowEL.setAttribute("id", "signalYellow");
  signalGreenEL.setAttribute("id", "signalGreen");
  textStopEL.textContent = "";
  textWaitEL.textContent = "";
  textGoEL.textContent = "";
  counterRedEL.textContent = "";
  counterGreenEL.textContent = "";
  counterYellowEL.textContent = "";
  buttonSignalEL.style.display = "block";
  butSTOP.style.display = "none";
};
buttonSignalEL.addEventListener("click", counterRedStart);
butSTOP.addEventListener("click", stopLogic);
