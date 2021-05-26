const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // Altera ou adiciona a um array
console.log(valores)
console.log(valores.length)

valores[10] = 12
console.log(valores)

valores.push({id: 3}, false, null, 'teste') // Adiciona varios valores a um array
console.log(valores)

console.log(valores.pop()) // Retira do array o ultimo valor
delete valores[0] // Deleta o array de acordo com o indice
console.log(valores)

console.log(typeof valores)