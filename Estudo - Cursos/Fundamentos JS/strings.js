const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt: Retorna o casa(todo indice 0) indicada
console.log(escola.charAt(5)) // charAt: Retorna vazio

console.log(escola.charCodeAt(3)) // Valor da Tabela Code HTML
console.log(escola.indexOf('d')) // Index do valor buscado

console.log(escola.substring(1)) // Retorna valores apartir do indice '1'
console.log(escola.substring(0, 3)) // Retorna valores iniciado '0' ate '3'

console.log('Escola '.concat(escola).concat("!")) // Duas formas de concatenar
console.log('Escola ' + escola + "!") // Concatenar com o sinal +
console.log(escola.replace(3, 'e')) // Tracar caracteres pelo valor do indice
//Expressão regular(Novo metados Rejecs)
console.log(escola.replace(/\d/, 'e')) // Todos os digitos(numeros) pelo 'e'
console.log(escola.replace(/\w/g, 'e')) // Tudo pela letra 'e'. g de global

console.log('Ana,Maria,Pedro'.split(',')) // Sepera as string apartir das virgulas e cria uma array

