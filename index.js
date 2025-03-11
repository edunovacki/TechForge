//let soma = 2;
//console.log(soma + 2);
//retorna 4

//let soma = "2";
//console.log(soma + 2);
//retorna 22

//npm install prompt-sync (serve para instalar a biblioteca)

const leitura = require("prompt-sync")();
//let nome = leitura("Informe o nome por favor: ");
//console.log("Seja Bem Vindo, "+nome);

//let corFavorita = leitura("Informe sua cor favorita: ");
//console.log("A cor digitada foi "+corFavorita);

//let filmeFavorito = leitura("Informe o seu filme favorito: ");
//console.log("O filme digitado foi: "+filmeFavorito);

//let cidade = leitura ("Informe a cidade em que você mora: ");
//console.log("A cidade digitada foi: "+cidade);

//let animalEstimacao = leitura("Informe o nome do seu animal de estimação(se tiver um): ");
//console.log("O nome digitado foi: "+animalEstimação);

let nome = leitura("informe o seu nome: ");
let corFavorita = leitura("Informe sua cor favorita: ");
let filmeFavorito = leitura("Informe o seu filme favorito: ");
let cidade = leitura("Informe a cidade em que você mora: ");
let animalEstimação = leitura("Informe o nome do seu animal de estimação(se tiver um): ");
console.log("Bem Vindo ao meu sistema "+nome+", que tem a cor favorita "+corFavorita);
console.log("Que tem o filme favorito chamado "+filmeFavorito);
console.log("Que mora na cidade "+cidade);
console.log("Que tem o animal de estimação chamado "+animalEstimação);