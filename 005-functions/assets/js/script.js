// retornar um array com o nome dos alunos aprovados

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function retornaAprovados(students) {
  return students.filter((aluno) => aluno.nota >= 6).map((n) => n.nome);
}

console.log(retornaAprovados(alunos));
