// Quantidade chaves para mostrar em a variavel Var fica
// visivel para qualquer chave ou fora dela
// Var é global á nao ser dentro de uma function
// !!! Fungir sempre do VAR, escopo global
{{{{ 
    var sera = 'Será???'
    console.log(sera)
}}}}
console.log(sera)

function teste(){
    var local = 123
    console.log(local) // Visivel
}

teste()
console.log(local) //Nao visivel
