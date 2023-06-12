const numero = document.querySelector('.numero')
const historico = document.querySelector('.historico')
const sinal = document.querySelector('.sinal')

let numeroUm = ''
let numeroDois = ''

function botao(num) {
  numero.innerHTML += num
  numeroDois += num
}

function limpar() {
  numero.innerHTML = ''
  numeroDois = ''
}

function limparTudo() {
  numero.innerHTML = ''
  historico.innerHTML = ''
  sinal.innerHTML = ''
  numeroDois = ''
  numeroUm = ''
}

function inverter() {
  if (numeroDois === '') {
    return
  }
  let n2 = parseFloat(numeroDois) * -1
  numero.innerHTML = n2
  numeroDois = numero.textContent
}

function porcento() {
  let n1 = parseFloat(numeroUm)
  let n2 = parseFloat(numeroDois)
  let p = (n2 / 100) * n1
  numero.innerHTML = p
  numeroDois = numero.textContent
}

function decimal() {
  if (numeroDois === '') {
    numeroDois = '0.'
    numero.innerHTML = '0.'
  } else if (!numero.innerHTML.includes('.')) {
    numeroDois += '.'
    numero.innerHTML += '.'
  }
}

function calcular(operacao) {
  if (numero.textContent.length === 0) {
    numero.innerHTML = '0'
    numeroDois = '0'
  }

  if ((numeroDois != '') & (numeroUm != '')) {
    let n1 = parseFloat(numeroUm)
    let n2 = parseFloat(numeroDois)
    let res = 0
    if (sinal.textContent === '/') {
      res = n1 / n2
    } else if (sinal.textContent === '*') {
      res = n1 * n2
    } else if (sinal.textContent === '-') {
      res = n1 - n2
    } else if (sinal.textContent === '+') {
      res = n1 + n2
    } else {
      numeroUm = numero.textContent
      historico.innerHTML = numero.textContent
      numero.innerHTML = ''
      numeroDois = ''
      sinal.innerHTML = operacao
      return
    }
    historico.innerHTML = res
    numeroUm = historico.textContent
    numero.innerHTML = ''
    numeroDois = ''
    sinal.innerHTML = operacao
    return
  }

  if (numeroUm.length === 0 && numeroDois.length === 0) {
    return
  }

  numeroUm = numero.textContent
  historico.innerHTML = numero.textContent
  numero.innerHTML = ''
  numeroDois = ''
  sinal.innerHTML = operacao
}

function igual() {
  if ((numeroDois != '') & (numeroUm != '')) {
    let n1 = parseFloat(numeroUm)
    let n2 = parseFloat(numeroDois)
    let res = 0
    if (sinal.textContent === '/') {
      res = n1 / n2
      historico.innerHTML = n1 + '/' + n2
    } else if (sinal.textContent === '*') {
      res = n1 * n2
      historico.innerHTML = n1 + '*' + n2
    } else if (sinal.textContent === '-') {
      res = n1 - n2
      historico.innerHTML = n1 + '-' + n2
    } else if (sinal.textContent === '+') {
      res = n1 + n2
      historico.innerHTML = n1 + '+' + n2
    }

    numeroUm = ''
    numero.innerHTML = res
    numeroDois = res
    sinal.innerHTML = '='
  }
}
