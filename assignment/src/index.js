const range = document.querySelector(".range");
const choice = document.querySelector(".choice")
const playBtn = document.querySelector(".playBtn")
const progress = document.querySelector(".progress")
const result = document.getElementById("result")

let rangeNumber
let choiceNumber
let machineNumber

const HIDDEN_CLASSNAME = "hidden"

function handleSetNumber(event) {
  event.preventDefault();
  rangeNumber = range.value
}

function handleChoiceNumber(event) {
  event.preventDefault();
  choiceNumber = choice.value
}

function handlePlayBtn(event) {
  event.preventDefault();
  machineNumber = Math.floor(Math.random() * (Number(rangeNumber) + 1))
  progress.innerHTML = `You chose: ${choiceNumber}, the machine chose: ${machineNumber}`
  if (Number(choiceNumber) === Number(machineNumber)) {
    result.innerHTML = "You won!"
  } else {
    result.innerHTML = "You lost!"
  }
}

range.addEventListener("input", handleSetNumber);
choice.addEventListener("input", handleChoiceNumber);
playBtn.addEventListener("click", handlePlayBtn)