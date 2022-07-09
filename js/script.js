import Events from "./events.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const sounds = Sounds()

const timer = Timer({secondsDisplay, minutesDisplay})

Events({timer, sounds})