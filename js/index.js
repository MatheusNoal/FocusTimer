import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import { container, buttonLightMode, buttonDarkMode, minutesDisplay, secondsDisplay, buttonPlay, buttonPause, buttonStop, buttonSet } from './elements.js'

const controls = Controls({ buttonLightMode, buttonDarkMode, buttonPlay, buttonPause, buttonSet, buttonStop })

const timer = Timer({ minutesDisplay, secondsDisplay, resetControls: controls.reset })

const sound = Sound()

Events({ controls, timer, sound })