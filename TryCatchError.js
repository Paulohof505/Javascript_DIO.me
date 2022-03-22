function validaArray(arr, num){
    try{ // tentar
    if (!arr && !num) throw new ReferenceError("Coloque os parametros")
    if (typeof arr !== 'object') throw new TypeError("Array oprecisa ser do tipo objeto") // SE O RESULTADO NÃO FOR UM OBJETO
    if (typeof num !== 'number') throw new TypeError("Num precisa ser um número") // SE TIVER ALGUM VALOR DIFERENTE DE UM NÚMERO
    if (arr.length !== num) throw new RangeError("O tamanho da array está invalido") // A QUANTIDADE TEM QUE SER A MESMA
    return arr;

    } catch(e){ // erro
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")        
            console.log(e. message)    
        } else if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError")
            console.log(e. message) 
        } else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError")
            console.log(e. message) 
        } else if(e instanceof RangeError) {
            console.log("Este erro é um RangeError")
            console.log(e. message) 
        } else {
            console.log("Ocorreu um erro não esperado!")
        }
    }   
}   
console.log(validaArray([1,2,3,4], 4))