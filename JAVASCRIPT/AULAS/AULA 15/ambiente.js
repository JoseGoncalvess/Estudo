let num = [5, 8, 4, 9, 10]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
num.push(3)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(0)

if (pos == -1) {
  console.log(` o valor não foi encontrado, tente outro valor!`)
} else {
  console.log(`o valor está na posicion ${pos}`)
}
