const temperatura = document.querySelector('#temperatura')
const tempMax = document.querySelector('#maxmin b')
const tempMin = document.querySelector('#maxmin span')
const vento = document.querySelector('#vento')
const umidade = document.querySelector('#umidade')
const chuva = document.querySelector('#chuva')
const now = document.querySelector('#now')

const sunChart = document.getElementById('sun-chart')
const chart = document.getElementById('chart')

const apiKey = ''
const d = new Date()

let display = 'none'

async function getApi() {
  const city = 'Juiz de Fora'
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

  const res = await fetch(apiWeatherUrl)
  const data = await res.json()
  temperatura.innerHTML = data.main.temp
  tempMax.innerHTML = data.main.temp_max + '°'
  tempMin.innerHTML = data.main.temp_min + '°'
  vento.innerHTML = data.wind.speed + '<span>km/h</span>'
  umidade.innerHTML = data.main.humidity + '<span>%</span>'
  chuva.innerHTML = data.clouds.all + '<span>%</span>'
  console.log(data.sys.sunrise)
  console.log(data)
}

function horaData() {
  now.innerHTML = d.getHours() + ':' + d.getMinutes()
  if (d.getHours() < 6 && d.getHours() > 19) {
    sunChart.style.setProperty('--display', 'none')
    chart.style.setProperty('--display', 'none')
    return
  }

  let rotacao = d.getHours() - 6
  let rotate = 175 - rotacao * 8.33

  let sombra = -135 + rotacao * 14.9
  sunChart.style.setProperty('--sunRotate', rotate)
  chart.style.setProperty('--sombra', sombra + 'deg')
}

getApi()
horaData()
