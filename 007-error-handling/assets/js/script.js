// Atividade: validação de erros por tipo
// O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

// Crie uma função que recebe um array e um número
// Realize as seguintes validações
// Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
// Se o array não for do tipo 'object', lance um erro do tipo TypeError
// Se o número não for do tipo 'number', lance um erro do tipo TypeError
// Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
// Utilize a declaração try...catch
// Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

const myArray = [1, 2, 4, 6, 10]; // 6 elementos

function checkMyArray(arr, num) {
  
  try {
    checkElements(arr, num);
    checkArray(arr);
    checkNumber(num);
    checkArraySize(arr, num);
    return arr;
  } catch(error) {
    if(error instanceof ReferenceError) {
      console.log('Esse é um ReferenceError');
      console.log(error.message);
    } else if(error instanceof TypeError) {
      console.log('Esse é um TypeError');
      console.log(error.message);
    } else if(error instanceof RangeError) {
      console.log('Esse é um RangeError');
      console.log(error.message);
    } else {
      console.log(`Ocorreu um erro não esperado ${error}`);
    }
  }
}

function checkNumber(num) {
  if(typeof num !== 'number') throw TypeError('O número precisa ser do tipo número');
}

function checkArray(arr) {
  if(typeof arr !== 'object') throw TypeError('O array precisa ser um objeto');
}

function checkArraySize(arr, num) {
  if(arr.length !== num) throw new RangeError('O tamanho do array é inválido');
}

function checkElements(arr, num) {
  if((!arr || arr.length === 0) && (!num || num.length === 0)) throw new ReferenceError('Envie parâmetros válido');
}

console.log(checkMyArray(myArray, 6));