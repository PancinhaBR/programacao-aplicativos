const prompt = require("prompt-sync")();

let A = Number(prompt("informe o número A: "))
let B = Number(prompt("infome o número B: "))
let escolha = Number(prompt("somar 1 - subtração 2 - multiplicação 3 - divisão 4 "))

if (escolha == 1){
    console.log(somar(A,B))
}
if (escolha == 2){
    console.log(subtração(A,B))
}
if (escolha == 3){
    console.log(multiplicação(A,B))
}
if (escolha == 4){
    console.log(divisão(A,B))
}






























function somar(A,B){
    return A + B
}
function subtração(A,B){
    return A - B
}
function multiplicação(A,B){
    return A * B
}
function divisão(A,B){   

     if (B == 0){   
        return "erro!"
     } else{
        return A / B
     }
 }