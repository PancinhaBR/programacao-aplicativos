const prompt = require("prompt-sync")();

let numero1 = Number(prompt("digite um número: "));

if (numero1 %2 === 0){
    console.log("esse número é par ");
}
else {
    console.log("esse número é ímpar ");
}
