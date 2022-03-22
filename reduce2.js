

const lista = [
{
    name: 'Leite',
    preco: 4.25
},
{
    name: 'Carne',
    preco: 43.50
},
{
    name: 'Bolacha',
    preco: 3.00
}] 

const SaldoDisp = 100;

function Operacao(SaldoDisp, lista){
    return lista.reduce(function (Anterior, Posterior, index){
        console.log('Rodada', index + 1);
        console.log("R$ " + Anterior);
        console.log(Posterior);
        return Anterior - Posterior.preco;
    }, SaldoDisp);
}

console.log("Saldo restante: R$" + Operacao(SaldoDisp,lista))

