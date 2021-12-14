const pessoa = {
  nome: 'Jose',
  idade: 47,
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa, 20));
console.log(calculaIdade.apply(pessoa, [25]));
