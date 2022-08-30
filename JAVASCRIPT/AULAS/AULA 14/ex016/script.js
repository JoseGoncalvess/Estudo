function contar() {
  let txtinicio = document.querySelector('input#txtinicio')
  let txtfim = document.querySelector('input#txtfim')
  let txtpasso = document.querySelector('input#txtpasso')
  let result = document.querySelector('div#result')

  if (
    txtinicio.value.length == 0 ||
    txtfim.value.length == 0 ||
    txtpasso.value.length == 0
  ) {
    result.innerHTML = 'Impossível Contar!'
    window.alert('[ERRO GRAVE] NEHUM DADO INSERIDO!')
  } else {
    result.innerHTML = 'Contando: <br>'
    inicio = Number(txtinicio.value)
    fim = Number(txtfim.value)
    passo = Number(txtpasso.value)

    if (passo <= 0) {
      window.alert('[ERRO GRAVE]CONSIDERANDO PASSO 1')
      passo = 1
    }

    //Contagem progressiva
    if (inicio < fim) {
      for (i = inicio; i <= fim; i += passo) {
        //+= CONACATENA ASIM ESCREVENDO TODOS
        result.innerHTML += ` ${i}  &#x1F449`
      }
    } else {
      //contagem regressiva
      for (i = inicio; i > fim; i -= passo) {
        //+= CONACATENA ASIM ESCREVENDO TODOS
        result.innerHTML += ` ${i}  &#x1F449`
      }
    }
    //===============&#x = ultiliza para add emoji=====>
    result.innerHTML += ` &#x1F3C1`
  }
}
