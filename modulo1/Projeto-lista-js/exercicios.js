// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(retanguloArea) {
  // implemente sua lógica aqui
  const altura = prompt("Qual a altura do retangulo em cm?")
  const largura = prompt("Qual a largura do retangulo em cm?")

  retanguloArea = altura * largura
  console.log(retanguloArea)
}


// EXERCÍCIO 02
function imprimeIdade(idadeUsuario) {
  // implemente sua lógica aqui
  const anoAtual = prompt("Em que anos estamos?")
  const anoNascimento = prompt("Qual o ano do seu nascimento?")

  idadeUsuario = anoAtual - anoNascimento
  console.log(idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  Number.peso = prompt("Qual seu peso em kg?")
  Number.altura = prompt("Qual sua altura em metros")  

  return (peso /(altura * altura))
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Me diga seu nome")
  idade = prompt("Me diga sua idade")
  email = prompt("Me diga seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(array) {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita?")
  const cor2 = prompt("Qual sua segunda cor favorita?") 
  const cor3 = prompt("Qual sua terceira cor preferida?")

  array = [cor1, cor2, cor3]
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = prompt('Digite algo aqui').toUpperCase()

  return string
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = prompt("Qual o custo do espetaculo?")
  valorIngresso = prompt("Qual o valor do ingresso?") 

  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Digite uma palavra").length
  string2 = prompt("Digite outra palavra").length

  return (string1 === string2 )
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}