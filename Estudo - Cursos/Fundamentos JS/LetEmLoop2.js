const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
    console.log(i)
}

funcs[2]()
funcs[8]()
// Let respeita a regra de escopo
// Guardando em memoria todas as posições da função i
// Diferente do Var ele so guarda a ultima imformação


