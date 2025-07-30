const prompt = require("prompt-sync")();

let sexo = Number(prompt("informe seu sexo\n1 para homem e 2 para mulher: "));

let idade = Number(prompt("informe sua idade: "));

if (sexo === 2){
    console.log("não é obrigado a servir");
}
if (sexo === 1 && idade <= 17){
    console.log("não pode servir ");
}
if (sexo === 1 && idade >= 18){
     console.log("é obrigado a servir ");
}
