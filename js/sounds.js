export default function Sounds(){
  let forest = new Audio("./sounds/forest.wav")
  let fire = new Audio("./sounds/fire.wav")
  let market = new Audio("./sounds/market.wav")
  let rain = new Audio("./sounds/rain.wav")
  let end = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  forest.loop = true
  fire.loop = true
  market.loop = true
  rain.loop = true

  function toggleSounds(sounds) {
    let paused = sounds.paused

    if (paused) {
      sounds.play()
    } else {
      sounds.pause()
    }
  }

  function finalSound() {
    end.play()
  }

  return{
    forest,
    fire,
    market,
    rain, 
    end,
    toggleSounds,
    finalSound
  }
}