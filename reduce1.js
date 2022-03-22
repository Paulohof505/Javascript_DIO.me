

const meuArray = [5,6,7,8,3,9,1];

function soma(arr){
    return arr.reduce((ValorAnterior, ValorPosterior) => ValorAnterior + ValorPosterior);
}
// PEGA UMA DETERMINADA ARRAY E SOMA TODOS OS VALORES DENTRO DELA. EX: ValorAnterior: 5 + 6 :ValorPosterior E ASSIM ATÉ SOMAR TODOS.

console.log(soma(meuArray))