//               EXERCICIO DE INTERPRETAÇÃO DE CODIGO 

// Exercicio 1. 
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// A. 
// console.log(minhaFuncao(2)) = 10 
// console.log(minhaFuncao(10)) = 50

// B. Você estaria apenas invocando a função, para continuar o código, mas nada apareceria no console 


// EXERCICIO 2. 
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// A.  Como ela retorna um true ou false, funciona para uma pesquisa em um banco de dados. 

// B. True
//    True 
//    True



//              EXERCICIO DE ESCRITA DE CODIGO

// EXERCICIO 1.

// A.
    // const variavel = "Eu sou Ricardo, tenho 28 anos, moro em São Paulo e sou estudante"

    // function minhasInfos(){
    //     console.log(variavel)
    // }

    // minhasInfos()
 

// B.
// const minhasInfos = function (nome,idade,cidade,profissão){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
// }
 
// minhasInfos('Ricardo','28', 'São Paulo', 'estudante')


// EXERCICIO 2. 

// A. 
// const somar = function (n1,n2){
//     const soma = n1 + n2
//     return soma
// }
//     const mostrarNaTela = somar(1,5)
//     console.log(mostrarNaTela)

// B. 
    // const subtrarir = (n1,n2) => {
    //      return (n1 >= n2)
    // }

    // const mostrarNaTela = subtrarir (6,2)
    // console.log(mostrarNaTela)

// C. 
const parOuNao = (n1,n2) => {
    return (n1 % n2)
}

const mostrarNaTela = parOuNao (6,2)
console.log(mostrarNaTela)