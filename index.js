const readline = require('readline-sync');



var nome = "Cleiton";
var idade = 20;
var sexo = "m";
var peso = 70.5;
var ativo = true;

var val1, val2, soma, subtracao, multiplicacao, divisao, modulo;
var idadeTernario;
var idadeIF;
var dia;
var a = 0;
var b = 0;
var c = 0;
var m = 0;
var n = 0;

// Constante
const PI = 3.14159265;

// Comentário de uma linha

/* Comentário
  de varias linhas */

// ESCREVER NA TELA
console.log("### ESCREVER NA TELA ###\n");
console.log("Olá Mundo");
console.log("\n");

// VARIÁVEIS
console.log("### VARIÁVEIS E TIPOS BÁSICOS ###\n");
console.log("Nome: ", nome, "\n");
console.log("Idade: ", idade, "\n");
console.log("Sexo: ", sexo, "\n");
console.log("Peso: ", peso, "\n");
console.log("Ativo: ", ativo);
console.log("\n");

// CONSTANTE
console.log("### CONSTANTE ###\n");
console.log("PI: ", PI);
console.log("\n");

// OPERACOES
console.log("#### OPERACOES #### \n");
val1 = parseInt(readline.question("Informe o valor 1: "));
val2 = parseInt(readline.question("Informe o valor 2: "));

adicao = val1 + val2; // Pode usar: (+, -, *, /, %)
subtracao = val1 - val2;
multiplicacao = val1 * val2;
divisao = val1 / val2;
modulo = val1 % val2;
console.log("Soma: ", adicao, "\n");
console.log("Subtracao: ", subtracao, "\n");
console.log("Multiplicacao: ", multiplicacao, "\n");
console.log("Divisao: ", divisao, "\n");
console.log("Modulo: ", modulo);
console.log("\n");

// TERNARIO
console.log("### TERNARIO \n");
idadeTernario = parseInt(readline.question("Digite um número: "));
idadeTernario >= 18 ? console.log("Maior de idade\n") : console.log("Menor de idade\n");
console.log("\n");


// IF ELSE IF ELSE
console.log("### IF ELSE IF ELSE \n");
idadeIF = parseInt(readline.question("Informe a idade: "));
if (idadeIF < 12) {
  console.log("CRIANCA\n");
} else if ((idadeIF >= 12) && (idadeIF < 18)) {
  console.log("ADOLESCENTE\n");
} else {
  console.log("ADULTO\n");
}
console.log("\n");

// CASE
console.log("### SWITCH CASE \n");
dia = parseInt(readline.question("Informe um numero 1 - 7 para semana: "));

switch (dia) {

  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda");
    break;

  case 3:
    console.log("Terça");
    break;

  case 4:
    console.log("Quarta");
    break;

  case 5:
    console.log("Quinta");
    break;

  case 6:
    console.log("Sexta");
    break;

  case 7:
    console.log("Sabado");
    break;

  default:
    console.log("Valor nao existente");
    break;
}
console.log("\n");
console.log("\n");

// REPEAT
console.log("### REPEAT ###");
console.log("Não tem REPEAT \n");
console.log("\n");

// DO WHILE
console.log("### DO WHILE ###");
do {
  console.log(a);
  a = a + 1;
} while (a < 10);
console.log("\n");

// WHILE
console.log("### WHILE ###");
while (b < 10) {
  console.log(b);
  b = b + 1;
}
console.log("\n");

// FOR
console.log("### FOR ###");
for (c = 0; c < 10; c++) {
  console.log(c);
}

// ARRAY
console.log("### ARRAY ###");
let numbers = [10, 20, 30, 40];

for (let i = 0; i < 4; i++) {
    console.log(numbers[i]);
}
console.log();

// MATRIZ
console.log("### MATRIZ ###");
let matriz = new Array(3);

// Inicialização da matriz
for (let i = 0; i < 3; i++) {
    matriz[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = i * 3 + j + 1;
    }
}

// Acesso aos elementos da matriz
console.log("Elementos da matriz:");
for (let i = 0; i < 3; i++) {
    let linha = "";
    for (let j = 0; j < 3; j++) {
        linha += matriz[i][j] + " ";
    }
    console.log(linha);
}
console.log();

// FUNÇÃO
console.log("###FUNCAO###");
m = parseInt(readline.question("Digite o valor 1: "));
console.log("\n");
n = parseInt(readline.question("Digite o valor 2: "));

function funcaoSoma(m,n) {
  return m+n;
}

console.log("Soma ", funcaoSoma(m,n));
console.log("\n");

// PROCEDURE
console.log("### PROCEDURE ###");
console.log("Não tem PROCEDURE");
console.log("\n");


// PONTEIRO
console.log("### PONTEIRO ###");
console.log("Não tem PONTEIRO");
console.log("Não é necessário liberar memória manualmente, como em C ou C++. A variável será automaticamente coletada pelo coletor de lixo quando não estiver mais em uso. \n");
console.log("\n");

// TRY
console.log("### TRY ###");
let numero1 = parseInt(readline.question("Digite o valor 1 para o dividendo: "));
console.log("\n");
let numero2 = parseInt(readline.question("Digite o valor 2 para o divisor: "));
console.log("\n");

try {
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error('Entrada inválida!');
  }
  if (numero2 === 0) {
    throw new Error('Divisão por zero não é permitida!');
  }
  const res = numero1 / numero2;
  console.log(`Resultado da divisão: ${res}`);
} catch (error) {
  console.error('Ocorreu uma exceção:', error.message);
}
console.log("\n");

// ENUM
console.log("### ENUM ###");
const Cor = {
    Vermelho: 'vermelho',
    Verde: 'verde',
    Azul: 'azul',
    Amarelo: 'amarelo',
    Laranja: 'laranja'
};

const minhaCor = Cor.Azul;

switch (minhaCor) {
    case Cor.Vermelho:
        console.log('Minha cor favorita é vermelho.');
        break;
    case Cor.Verde:
        console.log('Minha cor favorita é verde.');
        break;
    case Cor.Azul:
        console.log('Minha cor favorita é azul.');
        break;
    case Cor.Amarelo:
        console.log('Minha cor favorita é amarelo.');
        break;
    case Cor.Laranja:
        console.log('Minha cor favorita é laranja.');
        break;
    default:
        console.log('Eu não tenho uma cor favorita.');
}
console.log("\n");
