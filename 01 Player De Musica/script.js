const player = document.querySelector('#player')
const nameMusic = document.querySelectorAll('.nameMusic')
const bandName = document.querySelectorAll('.bandName')
const prevButton = document.querySelectorAll('.prevButton')
const playPauseButton = document.querySelectorAll('.playPauseButton')
const nextButton = document.querySelectorAll('.nextButton')
const progressBar = document.querySelectorAll('.progress-bar')
const progress = document.querySelectorAll('.progress')
const currentTime = document.querySelectorAll('.currentTime')
const duration = document.querySelectorAll('.duration')
import songs from './songs.js'

const textButtonPlay = "<i class='bx bx-caret-right'></i>"
const textButtonPause = "<i class='bx bx-pause'></i>"

let index = 0

prevButton.forEach(prevButton => {
  prevButton.onclick = () => prevNextMusic('prev')
})

nextButton.forEach(nextButton => {
  nextButton.onclick = () => prevNextMusic()
})

playPauseButton.forEach(playPauseButton => {
  playPauseButton.onclick = () => playPause()
})

function playPause() {
  if (player.paused) {
    player.play()
    playPauseButton.forEach(playPauseButton => {
      playPauseButton.innerHTML = textButtonPause
    })
  } else {
    player.pause()
    playPauseButton.forEach(playPauseButton => {
      playPauseButton.innerHTML = textButtonPlay
    })
  }
}

player.ontimeupdate = () => updateTime()

function updateTime() {
  const currentMinutes = Math.floor(player.currentTime / 60)
  const currentSeconds = Math.floor(player.currentTime % 60)
  currentTime.forEach(currentTime => {
    currentTime.textContent = currentMinutes + ':' + formatZero(currentSeconds)
  })

  const durationFormatted = isNaN(player.duration) ? 0 : player.duration
  const durationMinutes = Math.floor(durationFormatted / 60)
  const durationSeconds = Math.floor(durationFormatted % 60)
  duration.forEach(duration => {
    duration.textContent = durationMinutes + ':' + formatZero(durationSeconds)
  })

  const progressWidth = durationFormatted
    ? (player.currentTime / durationFormatted) * 100
    : 0
  progress.forEach(progress => {
    progress.style.width = progressWidth + '%'
  })
}

const formatZero = n => (n < 10 ? '0' + n : n)

progressBar.forEach(progressBar => {
  progressBar.onclick = e => {
    const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration
    player.currentTime = newTime
  }
})

function prevNextMusic(type = 'next') {
  if ((type == 'next' && index + 1 === songs.length) || type === 'init') {
    index = 0
  } else if (type == 'prev' && index === 0) {
    index = songs.length
  } else {
    index = type === 'prev' && index ? index - 1 : index + 1
  }

  player.src = songs[index].src
  nameMusic.forEach(nameMusic => {
    nameMusic.innerHTML = songs[index].name
  })
  bandName.forEach(bandName => {
    bandName.innerHTML = songs[index].band
  })
  if (type !== 'init') playPause()

  updateTime()
}
function texte() {
  console.log('goi')
}

prevNextMusic('init')
