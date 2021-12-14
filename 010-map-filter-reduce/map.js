// multiplicacao sem this

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = myArray.map((e) => e * 2);

console.log(newArray);



// multiplicacao com this

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const m2 = { value: 2 };
const m3 = { value: 3 };
const m4 = { value: 4 };
const m5 = { value: 5 };

function newArray2(arr, thisArg) {
  return arr.map(function(e) {
    return e * this.value;
  }, thisArg);
}

console.log(newArray2(myArray2, m3));