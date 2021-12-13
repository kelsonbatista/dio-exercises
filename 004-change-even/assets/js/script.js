const myArray = [2, 3, 7, 10, 12, 5, 9];
// const myArray = [];

function changeEven() {
  if (!myArray || !myArray.length) return -1;
  for(let i in myArray) {
    if (myArray[i] % 2 === 0) myArray[i] = 0;
  }
  return myArray;
}

console.log(changeEven(myArray));