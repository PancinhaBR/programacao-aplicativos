const prompt = require("prompt-sync")();
let media = 0;
let i;
for (i = 0; i <= 2;i ++){
let salario = Number(prompt("informe os salarios: "));
let codigo = Number(prompt("informe os codigos: "));
media += salario;
}
media = media/i;
console.log("a média dos salários é",media);