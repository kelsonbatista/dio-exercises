// fazer um novo array com valores unicos (sem repetição de numeros)

const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function unicValues(arr) {
  const mySet = new Set(arr); //isso transforma em um set , nao array

  return [...mySet]; 
// se colocar apenas return mySet, ele vai retornar um Set
// mas para retornar um array, só colocar os valores como argumento
// assim ele vai entender como argumentos de um novo array
}

console.log(unicValues(myArray));

