//      ** EXERCICIO DE INTERPRETAÇÃO DE CODIGO **


// EXERCICIO 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2   //bool3 = true 

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// //R: False

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// //R: False

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// //R: True

// console.log("d. ", typeof resultado)
// //R: boolean



// EXERCICIO 2 
// Seu colega se aproxima de você falando que o código dele não funciona como devia.  
// Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// R: Os dois numeros digitados pelo usuário exatamente como foram digitados um ao lado do outro e não somados.
// Isso ocorrerá pelas variáveis iniciais serem strings e não numbers 

 // EXERCICIO 3

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
//R: Haverá a necessidade de que as variaveis sejam transformadas em numbers.
    //const soma = Number(primeiroNumero) + Number(segundoNumero)



//       ** EXERCICIO PARA ESCRITA DE CODIGO ** 

// Exercicio 1. Faça um programa que:
        
// //         a) Pergunte a idade do usuário
//                 const idadeUsuario = prompt("Digite a sua idade")
        
// //         b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//                 const idadeAmigo = prompt("Digite a idade do(a) seu(sua) melhor amigo(a)")

// //         c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
//                 console.log("Sua idade é maior que a do(a) seu(sua) melhor amigo(a)?", (idadeUsuario > idadeAmigo))

// //         d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
//                 console.log (idadeUsuario - idadeAmigo)


// // EXERCICIO 2. Faça um programa que: 
// //      a) Peça ao usuário que insira um número **par**
//            let numeroPar = prompt("Digite um numero par!")

// //      b) Imprima na console **o resto da divisão** desse número por 2.
//             let resultado = numeroPar % 2
//             console.log(resultado) 

// //      c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//              Todos os restos de divisões resultam em 0 

// //      d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//              Todos os restos de divisões resultam em 1



// //EXERCICIO 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

//             let idadeUsuario = prompt("Digite a sua idade")

// //         a) A idade do usuário em meses
//                 let idadeEmMeses = idadeUsuario * 12 
//                 console.log("Sua idade em meses é de", idadeEmMeses , "meses")

// //         b) A idade do usuário em dias
//                 let idadeEmDias = idadeUsuario * 365
//                 console.log("Sua idade em dias é de", idadeEmDias, "dias")

// //         c) A idade do usuário em horas
//                 let idadeEmHoras = idadeEmDias * 24
//                 console.log("Sua idade em horas é de", idadeEmHoras, "horas")



// /* EXERCICIO 4. Faça um programa que pergunte ao usuário dois números. 
// Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false: */

//         let primeiroNumero = prompt("Me diga um numero de 20 a 30")
//         let segundoNumero = prompt("Me diga agora um numero de 1 a 10")
//         Number(primeiroNumero)
//         Number(segundoNumero)

// // O primeiro numero é maior que segundo? 
//     let resultado1 = primeiroNumero > segundoNumero
//     console.log("O primeiro numero é maior que segundo?", resultado1)

// // O primeiro numero é igual ao segundo? 
//     let resultado2 = primeiroNumero === segundoNumero
//     console.log("O primeiro numero é igual ao segundo?", resultado2)

// // O primeiro numero é divisível pelo segundo?
//     let primeiraDivisao = primeiroNumero % segundoNumero
//     let resultado3 = primeiraDivisao === 0 
//     console.log("O primeiro numero é divisível pelo segundo?", resultado3)

// // O segundo numero é divisível pelo primeiro? 
//     let segundaDivisao = segundoNumero % primeiroNumero
//     let resultado4 = segundaDivisao === 0
//     console.log("O segundo numero é divisível pelo primeiro?", resultado4)


// obs: O true ou false vai depender dos números inseridos e do resultado das operações.