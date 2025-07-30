const prompt = require("prompt-sync")();

let numero1 = Number(prompt("digite um número: "));

if (numero1 % 3 === 0){
console.log("esse número é multiplo de 3 ");
}

else {
    console.log("esse número não é multiplo de 3 ");
}
