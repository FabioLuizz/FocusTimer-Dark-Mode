import Sounds from "./sounds.js";

export default function Timer({ secondsDisplay, minutesDisplay }) {

  function updateDisplay(minutes, seconds) {
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  let timeTimerout;
  let newMinutes;

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
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    minutes = minutes < 60 ? Number(minutes) + 5 : minutes = 5;

    updateDisplay(minutes, seconds)
    updateMinutesDisplay(minutes)
  }

  function decrement() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    
    minutes = minutes > 5 ? Number(minutes) - 5 : minutes = 60

    updateDisplay(minutes, seconds)
    updateMinutesDisplay(minutes)
  }

  function updateMinutesDisplay(minutes) {
    newMinutes = minutes
  }

  return {
    countDown,
    reset,
    increment,
    decrement,
    updateMinutesDisplay,
    newMinutes,
  }
}
