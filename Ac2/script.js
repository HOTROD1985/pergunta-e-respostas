//questao 1 
let numerosPares = [1, 2, 3, 4, 5, 6, 7, 8];

numeros.forEach(function (pegaNumeroPares){
         if(pegaNumeroPares % 2 === 0){
            numerosPares.push(pegaNumeroPares) 
    }
        
})
console.log(pegaNumeroPares)
// questao 2
let nomes = ["João", "Maria", "Carlos", "Ana"];

nomes.forEach(function(PegaNomes) {
console.log (`Sr(a) ${PegaNomes}` )

})

//questão 3
let numeros = [4, 11, 8, 15, 23, 7, 2];
contador = 0
numeros.forEach(function(pegaNumeros){
if(pegaNumeros > 10){
   contador++
}
})
console.log(contador)

//questão 4
let frase = "Memphis Depay é Brabo";
let palavras = frase.split('')

frase.forEach(function(pegaPalavras){
         contador++
  })
console.log(contador)

//questão5 
let nome = ["ana", "carlos", "maria"];
let nomesMaiusculos
nome.forEach(function(PegaNomes){
nomesMaiusculos.push(nome.toUpperCase());
});



