let nome = "teste";

console.log(nome);

let teste = 10;

console.log("teste" + 10);

//Tipos de dados

//String
let nome = "teste";
console.log(nome);

//Number
let idade = 20;
console.log(idade);

//Boolean
let verdade = true;
let falso = false;
console.log(verdade);

//Array
let frutas = ["banana", "maçã", "uva"];
console.log(frutas);

//Object
let pessoa = {
  nome: "teste",
  idade: 20,
  cidade: "São Paulo",
};
console.log(pessoa);

//Função
function soma(a, b) {
  return a + b;
}
console.log(soma(10, 20));

//Operadores Aritméticos
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Operadores de Comparação
let a = 10;
let b = 5;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

//Operadores Lógicos
let a = 10;
let b = 5;

console.log(a > b && a < b);
console.log(a > b || a < b);
console.log(!(a > b));

//Condicionais
let a = 10;
let b = 5;

if (a > b) {
  console.log("a é maior que b");
}

if (a < b) {
  console.log("a é menor que b");
}

if (a == b) {
  console.log("a é igual a b");
} else {
  console.log("a é diferente de b");
}

//Estruturas de Repetição
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//Funções
function soma(a, b) {
  return a + b;
}

console.log(soma(10, 20));

function saudacao(nome) {
  return "Olá " + nome;
}

console.log(saudacao("teste"));
