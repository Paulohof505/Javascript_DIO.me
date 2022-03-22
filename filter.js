

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function filtraPares(arr){
    return arr.filter(callbackPares); // Filtra/pega os valores de uma determinada "Array" e faz uma chamada em uma função
}

function filtraImpares(arr){
    return arr.filter(callbackImpar); // Filtra/pega os valores de uma determinada "Array" e faz uma chamada em uma função
}

function callbackPares(item){
    return item % 2 === 0; // Retorna os itens que divido por 2 sobra 0 (PAR)
}

function callbackImpar(item){  
    return item % 2 === 1; // Retorna os itens que divido por 2 sobra 1 (IMPAR)
}

console.log("Pares: " + filtraPares(array))
console.log("Impares: " +filtraImpares(array))