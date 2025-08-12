const prompt = require("prompt-sync")();

let nome1 = (prompt("informe o nome 1: "))
let nome2 = (prompt("informe o nome 2: "))
let nome3 = (prompt("informe o nome 3: "))

saudacao(nome1)
saudacao(nome2)
saudacao(nome3)

function saudacao(nome){
    console.log(`Ola ${nome}! Seja Bem Vindo `);
}