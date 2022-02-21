//                      EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

// EXERCICIO 1 . 

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// R: console.log(filme.elenco[0]) = Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) = Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) = canal: "Globo", horario: "14h"


// EXERCICIO 2 . 

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//  A) R:   
//     console.log(cachorro) = {
//         "Juca",
//         "3",
//         "SRD"
//     }        
//     console.log(gato) = {
//         "Juba",
//         "3", 
//         "SRD"
//     }
//     console.log(tartaruga) ={
//         "Jubo",
//         "3",
//         "SRD"
//     }

// B . R: A sintaxe iguala as itens dentro dos 3 objetos, apenas mudando o valor do nome de cada um" 


// EXERCICIO 3 .
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//  A . 
//     console.log(minhaFuncao(pessoa, "backender")) = {
//         "false"
//     }
//     console.log(minhaFuncao(pessoa, "altura")) = {
//         "undefined" 
//     }


// B . No primeiro é impresso "false" pois acontecesse um acesso ao objeto pessoa e o pedido da impressao do que está "backender".
//     No segundo, é impresso "undefined" pois "altura" não é um item definido dentro do objeto "pessoa"



//              EXERCICIOS DE ESCRITA DE CODIGO

// EXERCICIO 1 . 

// A . 
//     function imprimaNoConsole () {
//         console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}. `)   

//     }

//     const pessoa = {
//         nome: prompt("Qual seu nome?") ,
//         apelidos: prompt("Cite três apelidos dos quais podem te chamar")
//     }

        
//     imprimaNoConsole()
  

// // B. 
//     function imprimaNoConsole2 (){
//         console.log(`Eu sou ${novosApelidos.nome} , mas pode me chamar de ${novosApelidos.apelidos}.`)
//     }

//     const novosApelidos = {
//         ...pessoa, 
//         apelidos: prompt ("Me diga outros três apelidos dos quais podem te chamar")
//     }

//     imprimaNoConsole2()


// EXERCICIO 2 .

// A . 
//    const usuario = {
//        nome: "Bruno", 
//        idade: 23,
//        profissao: "instrutor"
//    }     

//    const novoUsuario = {
//         nome: 'Ricardo', 
//         idade: 28,
//         profissao: "desenvolvedor" 
//    }


// // B. 

//    function minhaFuncao(usuario) {
//        const resultado = [
//            [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length],
//        ]
              
//        return resultado 
//     }

//     console.log(minhaFuncao(usuario))


// EXERCICIO 3 . 

// A.
    let carrinho = []

// B. 
    const fruta1 = {
        nome: "Abacate", 
        disponibilidade: true 
    }

    const fruta2 = {
        nome: "Mamao", 
        disponibilidade: true
    }

    const fruta3 = {
        nome: "Laranja",
        disponibilidade: true
    }


// C. 
    function colocarFruta (fruta) {
        const colocarFrutaArray = carrinho.push(fruta)
        
    }

    colocarFruta(fruta1)
    colocarFruta(fruta2)
    colocarFruta(fruta3)

// D. 

    console.log(carrinho)