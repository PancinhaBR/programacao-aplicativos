const prompt = require("prompt-sync")();

let idade = Number(prompt("informe a sua idade: "));

if (idade <= 12){
    console.log("você é Criança ");
}
else if (idade >= 13 && idade <= 17){
    console.log("você é adolescente ");
}
else if (idade >= 18 && idade <= 64){
    console.log("você é adulto ");
}
else{
    console.log("você é idoso ");
}
