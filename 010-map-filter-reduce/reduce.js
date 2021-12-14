// Reduce
// Some todos os números de um array
// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum  = myArray.reduce((acc, curr) => acc + curr);

console.log(sum);



//2 
const precos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const calcula = myArray.reduce((acc, curr) => acc - curr, 100); // o valor inicial é do acc

console.log(calcula);
