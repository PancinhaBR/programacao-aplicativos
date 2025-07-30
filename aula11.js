const prompt = require("prompt-sync")();

let n1 = Number(prompt("Informe o primeiro número: "));

let n2 = Number(prompt("Informe o segundo número: "));

let n3 = Number(prompt("Informe o terceiro número: "));

let n4 = Number(prompt("Informe o quarto número: "));

let n5 = Number(prompt("Informe o quinto número: "));

let maior = n1;

let menor = n1;

if (n2 > maior) maior = n2;

if (n3 > maior) maior = n3;

if (n4 > maior) maior = n4;

if (n5 > maior) maior = n5;

if (n2 < menor) menor = n2;

if (n3 < menor) menor = n3;

if (n4 < menor) menor = n4;

if (n5 < menor) menor = n5;

console.log("Maior número informado:", maior);

console.log("Menor número informado:", menor);
