//              EXERCICIO DE INTERPRETAÇÃO DE CODIGO 

// Exercicio 1 .

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// R: Será impresso no console todos os objetos, os indices de cada um dos objetos dentro da array; 
// e ainda cada um dos objetos com uma array de seus items 


// Exercicio 2 . 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// R: Será impressa uma array com os nomes do objetos "Amanda Rangel, Lais Petra, Leticia Chijo"


// Exercicio 3. 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// R: Sera impressa uma Array com os nomes e apelidos diferentes de "Chijo"


//          EXERCICIO DE ESCRITA DE CODIGO 

// Exercicio 1 .

//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]


// // A) 
//     const novoArrayA = pets.map((item, index, array) => {
//      return item.nome  
//     })

//     console.log(novoArrayA)


// // B) 
//     const novoArrayB = pets.filter((item, index, array) => {
//      return item.raca === "Salsicha"
//     } )

//     console.log(novoArrayB)


// // C)
//     const novoArrayDesconto = pets.filter((item, index, array) => {
//         if (item.raca === "Poodle"){
//             console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}` )
//         }
//     })


// Exercicio 3 .

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
    