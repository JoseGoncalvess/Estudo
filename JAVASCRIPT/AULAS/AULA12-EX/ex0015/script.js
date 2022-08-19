function verificar() {
  var data = new Date()
  var ano = new Date().getFullYear()
  let fano = document.getElementById('txtano')
  var ress = document.getElementById('res')
  if (Number(fano.value) == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os Dados e Tente Novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')

    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', './img/bb-h.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', './img/criança-h.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', './img/adulto-h.png')
      } else {
        //idosos
        img.setAttribute('src', './img/idoso-h.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', './img/bb-m.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', './img/criança-m.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', './img/adulto-m.png')
      } else {
        //idosos
        img.setAttribute('src', './img/idoso-m.png')
      }
    } else {
      window.alert('[ERRO] Por Favor marque Qual seu genero?')
    }
    ress.style.textAlign = 'center'
    ress.innerHTML = `Detectamos ${genero} com ${idade} de idade.`
    ress.appendChild(img)
  }
}
