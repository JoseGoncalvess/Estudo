let valores = [0, 1, 5, 9, 8, 5]
valores.sort()
/*
for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
