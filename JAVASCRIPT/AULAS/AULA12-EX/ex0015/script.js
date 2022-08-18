function verificar() {
  var data = new Date()
  var ano = new Date().getFullYear()
  let fano = document.getElementById('txtano')
  var ress = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os Dados e Tente Novamente!')
  } else {
    var fsex = document.getElementById('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if (fsex[0].checked) {
      genero = 'Homem'
    } else if (fsex[1].checked) {
      genero = 'Mulher'
    }
    ress.innerHTML = `Detectamos o genero ${genero} com ${idade} de idade.`
  }
}
