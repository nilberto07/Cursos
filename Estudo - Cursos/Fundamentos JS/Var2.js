// !!! Fungir sempre do VAR, escopo global
var numero = 1
{
    var numero = 2 // Sobre escreve valor 1
    console.log('dentro =', numero)
}
console.log('fora =', numero)



