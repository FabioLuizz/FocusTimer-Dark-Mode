import {decrement, increment, play, stop, forestButton, fireButton, marketButton, rainButton, lightThemeButton, darkThemeButton, forestVolume, rainVolume, marketVolume, fireVolume} from "./elements.js"

export default function Events({timer, sounds}) {
  play.addEventListener('click', function () {
    timer.countDown()
  })

  stop.addEventListener('click', function () {
    timer.reset()
  })

  increment.addEventListener('click', function() {
    timer.increment()
  })

  decrement.addEventListener('click', function() {
    timer.decrement()
  })

  forestVolume.addEventListener('change', function() {
    sounds.forest.volume = this.value
  })

  fireVolume.addEventListener('change', function() {
    sounds.fire.volume = this.value
  })

  marketVolume.addEventListener('change', function() {
    sounds.market.volume = this.value
  })

  rainVolume.addEventListener('change', function() {
    sounds.rain.volume = this.value
  })

  forestButton.addEventListener('click', function() {
    sounds.toggleSounds(sounds.forest)
    sounds.fire.pause()
    sounds.market.pause()
    sounds.rain.pause()
    forestButton.classList.toggle('selected')
    fireButton.classList.remove('selected')
    marketButton.classList.remove('selected') 
    rainButton.classList.remove('selected')
    forestVolume.classList.add(selected)
  })

  fireButton.addEventListener('click', function() {
    sounds.toggleSounds(sounds.fire)
    sounds.forest.pause()
    sounds.market.pause()
    sounds.rain.pause()
    fireButton.classList.toggle('selected')
    forestButton.classList.remove('selected')
    marketButton.classList.remove('selected')
    rainButton.classList.remove('selected')
  })

  marketButton.addEventListener('click', function() {
    sounds.toggleSounds(sounds.market)
    sounds.fire.pause()
    sounds.forest.pause()
    sounds.rain.pause()
    marketButton.classList.toggle('selected')
    forestButton.classList.remove('selected')
    fireButton.classList.remove('selected')
    rainButton.classList.remove('selected')
  })

  rainButton.addEventListener('click', function() {
    sounds.toggleSounds(sounds.rain)
    sounds.fire.pause()
    sounds.forest.pause()
    sounds.market.pause()
    rainButton.classList.toggle('selected')
    forestButton.classList.remove('selected')
    fireButton.classList.remove('selected')
    marketButton.classList.remove('selected')
  })

  lightThemeButton.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    lightThemeButton.classList.add('hide')
    darkThemeButton.classList.remove('hide')
  })

  darkThemeButton.addEventListener('click', function() {
    document.body.classList.remove('dark-theme')
    darkThemeButton.classList.add('hide')
    lightThemeButton.classList.remove('hide')
  })

}
