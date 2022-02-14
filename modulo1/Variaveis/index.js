console.log("EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO")

/* Exercio 1) 

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

R: console.log(b) =  10
console.log(a,b) = 10, 5*/ 



//Exercicio 2  

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)

// //R: console.log(a, b, c) = 10, 10, 10


/*Exercicio 3 

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let valorRecebido = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalhadas/valorRecebido} por hora`)*/


console.log ("EXERCICIO DE ESCRITA DE CÓDIGO")


//Exercicio 1 

//a) 
let nome 

//b) 
let idade

//c)
console.log (typeof nome, typeof idade)

//d) Foi impresso Undefined, já que não foi atribuído nenhum valor 

//e)
nome = prompt("Qual é o teu nome?")
idade = prompt("Quantos anos você tem?") 
console.log (nome, idade) 

//f)  Notei a mudança do tipo das variáveis para String, pois foi atribuido um valor a elas 
console.log (typeof nome, typeof idade)

//g)
console.log ("Olá", nome,"você tem", idade, "anos" )


/*Exercicio 2
Vc é maior de idade?
Vc já tomou 2L de agua hoje?
Vc praticou atividade física hoje?

A)*/

let pergunta1 = prompt("Vc é maior de idade?")
let pergunta2 = prompt("Vc já tomou 2L de agua hoje?")
let pergunta3 = prompt("Vc praticou atividade física hoje?")

//B)

console.log ("Vc é maior de idade?", pergunta1) 
console.log ("Vc já tomou 2L de agua hoje?", pergunta2)
console.log ("Vc praticou atividade física hoje?", pergunta3)

//EXERCICIO 3 

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let x 
x = a
a = b
b = x

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10