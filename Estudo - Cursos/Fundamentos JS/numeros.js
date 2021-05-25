const peso1 = 1.0 //Numero inteiro
const peso1Ex = 1.1 //Numero quebrado
const peso2 = Number('2.0')
const peso2Ex = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso1Ex))
console.log(Number.isInteger(peso2Ex))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed: convert para quantidade de casas decimais 
console.log(media.toString()) // toString: convert para string
console.log(media.toString(2)) // toString: convert para string binario
console.log(typeof media) // typeof: saber o tipo de qualquer coisa
console.log(typeof Number)


