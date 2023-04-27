export default function Controls({ buttonLightMode, buttonDarkMode, buttonPlay, buttonPause, buttonSet, buttonStop }) {
  function changeTheme() {
    buttonLightMode.classList.toggle('hide')
    buttonDarkMode.classList.toggle('hide')
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt(`Quantos minutos você deseja?`)
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
  }
  return {
    changeTheme,
    reset,
    play,
    pause,
    getMinutes
  }
}