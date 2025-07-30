const prompt = require("prompt-sync")();

let nota1 = Number(prompt("informe a primeira nota do aluno: "));

let nota2 = Number(prompt("informe a segunda nota do aluno: "));

let nota3 = Number(prompt("informe a terceira nota do aluno: "));

let media = (nota1 + nota2 + nota3) /3;
console.log("a média é: ",media);

if (media >= 7){
    console.log("aprovado");
}
else{
    console.log("reprovado");
}
