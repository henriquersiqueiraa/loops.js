console.log("Trabalhando com LOOPS");
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos possíveis:\n");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let destinoExiste = false;
for (let contador = 0; contador < listaDeDestinos.length; contador++) {
    if (listaDeDestinos[contador] === destino) {
        destinoExiste = true;
        break;
    }
}

if (destinoExiste) {
    console.log("Destino existe");
} else {
    console.log("Destino não existe");
}