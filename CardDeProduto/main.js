const imagem = document.querySelector('.to-show')
const gif = document.querySelector('.to-close')

function toShow() {
  gif.style.display = 'flex'
  imagem.style.display = 'none'
}

function toClose() {
  gif.style.display = 'none'
  imagem.style.display = 'flex'
}
