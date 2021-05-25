// Exemplos de tipagem fraca (em javascript)
console.log(7 / 0) // Resultado dessa operação: Infinity
console.log("10" / 2) // Corretamente
console.log("10,2" / 2) //Resposta: NaN( Nao é um numero)
console.log('3' + 2) // Se deduz '3' uma string e nao um numero
console.log('3' - 2) // Qualquer outro operador nao faz setindo ser string
console.log("Show!" / 2) //Resposta: NaN( Nao é um numero)
console.log(0.1 + 0.7) // Nao crava os 0.8 mas á soluções
console.log((10.345).toFixed(2))
