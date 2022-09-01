function tabuada() {
  let number = document.getElementById('txtn')
  let tabuada = document.getElementById('seltab')

  if (number.value.length == 0) {
    window.alert('[ERRO 508] Digite Um Numero Por Favor!')
  } else {
    let n = Number(number.value)
    let c = 1
    tabuada.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} * ${c} = ${n * c}`
      item.value = `tab${c}`
      tabuada.appendChild(item)
      c++
    }
  }
}
