let valor //nao inicializado, nao aponta para nenhum local de memoria
console.log(valor)
// console.log(valor2) // Erro!

valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Nao atribuir undefined, deixar para a linguaem definir
delete produto.preco //forma correta para retirar um valor
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // se, preço
console.log(!!produto.preco)
console.log(produto)
