const prompt = require("prompt-sync")();

let Valor = Number(prompt("Informe o Valor da conta: "));

let pessoas = Number(prompt("Quantidade de pessoas que vai pagar: "));

let preco = Valor / pessoas;

console.log("cada um vai pagar: R$ ",preco);
