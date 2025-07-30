const prompt = require("prompt-sync")();

let KM = Number(prompt("informe o a distancia da viagem em KM: "));

let gasolina = Number(prompt("informe o preço da gasolina: "));

let consumo = Number(prompt("informe o consumo medio do carro por KM/L: "));

let litros = KM / consumo;

let preco = litros * gasolina;

console.log("Litros de gasolina gasto:", litros, "L ", "\nCusto da Viagem: R$", preco);
if (preco > 100) {
    console.log("A viagem será cara.");
} else {
    console.log("A viagem será econômica.");
}
