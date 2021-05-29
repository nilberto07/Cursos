/*
Funções: É um bloco de codigo, onde recebe seus parametro de entreda;
 tem um nome; onde vc poderá utilizar em qualquer
parte do seu codigo/projeto
*/
// Funções sem retorno
function imprimirSoma(
    // Parametros
    a, b
    ){
    //Bloco de codigo
    console.log(a + b)//Imprimi o resultado da função
}

//Chamando a função e passando os dois parametro
imprimirSoma(2,3)
imprimirSoma(2) //resultado NaN
imprimirSoma() //resultado NaN
imprimirSoma(2, 2, 4, 5, 6, 7, 8) //Recebe apenas os dois primeiro, resto ignora

// Função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2, 3)) // Sobre escreve o valor b = 1 para 3
console.log(soma(2)) // Nao da erro pois b inicia 1
console.log(soma()) // NaN


