import { container, buttonLightMode, buttonDarkMode, buttonPlay, buttonPause, buttonStop, buttonSet, buttonSoundOn, buttonSoundOff } from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonLightMode.addEventListener('click', function () {
    controls.changeTheme()
    sound.pressButton()
    container.classList.add('light')
  })

  buttonDarkMode.addEventListener('click', function () {
    controls.changeTheme()
    sound.pressButton()
    container.classList.remove('light')
  })

  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.pause()
    sound.pressButton()
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })

  buttonSoundOff.addEventListener('click', function () {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sound.bgAudio.play()
  })
}