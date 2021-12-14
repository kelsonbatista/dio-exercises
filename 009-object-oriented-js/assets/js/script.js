// Atividade: Conta Bancária
// Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

// Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
// Dentro de ContaBancaria, construa o getter e o setter de saldo;
// Dentro de ContaBancaria, crie os métodos sacar e depositar;
// Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
// Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
// Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
// Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
// Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
// Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
    // aqui termina a primeira parte do exercicio
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
  // aqui termina a segunda parte

  sacar(valor) {
    if(valor > this._saldo) {
      return 'Operação negada';
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

//classe filha conta corrente

class ContaCorrente extends ContaBancaria {
  //recebe tudo menos tipo
  // vai mandar tudo dentro do super, vai mandar tudo que recebeu para a classe pai que vai setar as propriedades na conta corrente
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor){
    this._cartaoCredito = valor;
  }
}


class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'poupanca';
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = 'universitaria';
  }

  sacar(valor) {
    if(valor > 500) {
      return 'Operação negada';
    }
    this._saldo = this._saldo - valor;
  }
}

// comentario exercicio
// tudo o que quiser chamar na classe (parametros) da classe sao colocados dentro do construtor
// o 'this ' sempre vai fazer referencia a contabancaria
// a conta bancaria vai ser a classe mais abstrata que vamos ter, pois teremos outros tipos de conta
// sempre qundo fazermos getter e setter colocamos um underline na frente para utilizar os nomes no get  e set
// o super precisa do pai dele para funcionar
// por ultimo foi retirado o saldo do construtor, pois como sempre inicia em zero, foi trocado pelo numero 0 na variavel
