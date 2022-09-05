let number = document.getElementById('txtn')
let tabuada = document.getElementById('seltab')
let rasut = document.getElementById('ress')
let Valor = []
//verifica s eo number é um nuber entre 1 e 100
function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
//avaliar se o numero ja foi adiconando a lista
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function add() {
  if (isNumero(number.value) && !inLista(number.value, Valor)) {
    alert('ok')
  } else {
    alert('Valor invalido ou ja encontrado na lista!')
  }
}
