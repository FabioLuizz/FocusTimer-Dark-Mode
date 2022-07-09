let play = document.querySelector('.play')
let stop = document.querySelector('.stop')
let increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

let forestButton = document.querySelector('.forest')
let fireButton = document.querySelector('.fire')
let marketButton = document.querySelector('.market')
let rainButton = document.querySelector('.rain')

let forestVolume = document.querySelector('.forestVolume')
let fireVolume = document.querySelector('.fireVolume')
let marketVolume = document.querySelector('.marketVolume')
let rainVolume = document.querySelector('.rainVolume')

let darkThemeButton = document.querySelector('.dark-mode-button')
let lightThemeButton = document.querySelector('.light-mode-button')

let playDarkMode = document.querySelector('.play-dark-mode')
let StopDarkMode = document.querySelector('.stop-dark-mode')
let incrementDarkMode = document.querySelector('.increment-dark-mode')
let decrementDarkMode = document.querySelector('.decrement-dark-mode')

export {
  play,
  stop,
  increment,
  decrement,
  minutesDisplay,
  secondsDisplay,
  playDarkMode,
  StopDarkMode,
  incrementDarkMode,
  decrementDarkMode,
  minutes,
  forestButton,
  fireButton,
  marketButton,
  rainButton,
  darkThemeButton,
  lightThemeButton,
  forestVolume,
  fireVolume,
  marketVolume,
  rainVolume
}