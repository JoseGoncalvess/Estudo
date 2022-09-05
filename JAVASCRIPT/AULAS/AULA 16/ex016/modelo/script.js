let number = document.getElementById('txtn')
let lista = document.getElementById('lista')
let resut = document.getElementById('ress')
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

function adicionar() {
  if (isNumero(number.value) && !inLista(number.value, Valor)) {
    Valor.push(Number(number.value))
    resut.innerHTML = ''

    var item = document.createElement('option')
    item.text = `Valor ${number.value} adiconado!`
    lista.appendChild(item)
    number.value = ''
    number.focus()
  } else {
    alert('Valor invalido ou ja encontrado na lista!')
    number.value = ''
    number.focus()
  }
}

function final() {
  if (Valor == '') {
    alert('[ERRO404] Impossível Finalizar, nNehum dado adicionado!')
  } else {
    let total = Valor.length
    let maior = Valor[0]
    let menor = Valor[0]
    let soma = 0
    let media = 0
    //teste d evalor de maior e menor
    for (let pos in Valor) {
      soma += Valor[pos]
      if (Valor[pos] > maior) maior = Valor[pos]
      if (Valor[pos] < menor) menor = Valor[pos]
    }

    media = soma / total
    resut.innerHTML += `<p> O total de elementos adicionados é ${total}!</p>`
    resut.innerHTML += `<p> O maior valor adicionados é ${maior}!</p>`
    resut.innerHTML += `<p> O menor valor adicionados é ${menor}!</p>`
    resut.innerHTML += `<p> A soma d etodos os valores é ${menor}!</p>`
    resut.innerHTML += `<p> a media de valores adicionados é ${media}!</p>`
  }
}
