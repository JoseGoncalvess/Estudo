function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = new Date().getHours()
  var saud = window.document.getElementById('saud')

  msg.innerHTML = `Agora são ${hora} horas!`
  if (hora >= 0 && hora < 12) {
    saud.innerHTML = 'Bom Dia!'
    img.src = './img/manha.jpg'
    document.body.style.background = '#ffe955'
  } else if (hora >= 12 && hora < 18) {
    saud.innerHTML = 'Boa Tarde!'
    img.src = './img/tarde.jpg'
    document.body.style.background = '#d79769'
  } else {
    saud.innerHTML = 'Bom Noite!'
    img.src = './img/noite.jpg'
    document.body.style.background = '#061e20'
  }
}
