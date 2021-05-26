let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
// ! forçando para ser um operador false e true 
console.log(!isAtivo) // ! operador de negação
console.log(!!isAtivo) // !! Anulando o primeira operador de negação

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Logicas false ou true...')
console.log(!!('' || null || 0 || ' ')) // todos falsos exceto ' ', basta um ser vdd

// tento o primeiro verdadeiro ele imprimi
const nome = ''
console.log(nome || 'Desconhecido!')
const nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido!')
