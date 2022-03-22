

class ContaBancaria {      // CRIA UMA CLASSE CHAMADA CONTA BANCARIA
    constructor(agencia, numero, tipo){ // COLOCA O "CONSTRUCTOR" PARA CRIARMOS OBJETOS
    this.agencia = agencia; // DEFINE QUE O OBJETO "AGENCIA" RECEBE COMO ARGUMENTO AGENCIA
    this.numero = numero; // DEFINE QUE O OBJETO "NUMERO" RECEBE COMO ARGUMENTO NUMERO
    this.tipo = tipo; // DEFINE QUE O OBJETO "TIPO" RECEBE COMO ARGUMENTO TIPO
    this._saldo = 0; // DEFINE O "SALDO" COMO "0"
    }

    get saldo(){
        return this._saldo;   
    }
    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){   // Função de sacar o valor que estiver disponivel
        if (valor > this._saldo){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{  // "ContaCorrente" É UMA EXTENSÃO DA "ContaBancaria"
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
         this._cartaoCredito(valor);
    }
}


class ContaPopanca extends ContaBancaria{ // "ContaPopanca" É UMA EXTENSÃO DA "ContaBancaria"
    constructor(agencia, numero, tipo){
        super(agencia, numero);
        this.tipo = 'poupanca'

    }
}

class ContaUniversitaria extends ContaBancaria{ // "ContaUniversitaria" É UMA EXTENSÃO DA "ContaBancaria"
    constructor(agencia, numero, tipo){
        super(agencia, numero);
        this.tipo = 'Universitaria'

    }

    sacar(valor){
        if (valor > 500){
            return "Operação Negada"
        }
        this._saldo = this._saldo - valor;
    }
}
