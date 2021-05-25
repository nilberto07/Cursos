const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!
`
console.log(concatenacao, template)

// Expressoes...
console.log(`1 + 1 = ${1 + 1}`) // Interpreta dentro das chaves
const up = texto => texto.toUpperCase() // Passando texto como parametro da função toUpperCase
console.log(`Ei... ${up('cuidado')}!`)
