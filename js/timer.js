import Sounds from "./sounds.js";

export default function Timer({ secondsDisplay, minutesDisplay, minutes }) {

  function updateDisplay(minutes, seconds) {
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  let timeTimerout;

  function countDown() {
    timeTimerout = setTimeout(() => {
      
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let finished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0)

      if(finished){
        updateDisplay(minutes)
        Sounds().finalSound()
        return
      }

      if (seconds <= 0) {
        seconds = 60

        --minutes

        updateDisplay(minutes, seconds)
      }

      updateDisplay(minutes, String(seconds - 1))

      countDown()
    }, 1000);
  }

  function reset() {
    clearTimeout(timeTimerout)
  }

  function increment() {

    minutes = minutes < 60 ? Number(minutes) + 5 : minutes = 5;

    updateDisplay(minutes, 0)
  }

  function decrement() {
    minutes = minutes > 5 ? Number(minutes) - 5 : minutes = 60

    updateDisplay(minutes, 0)
  }

  return {
    countDown,
    reset,
    increment,
    decrement
  }
}
