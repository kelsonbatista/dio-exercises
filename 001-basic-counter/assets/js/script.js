const number = document.querySelector('#number');
const btnSum = document.querySelector('#sum');
const btnSub = document.querySelector('#sub');
// let n = number.innerHTML;
let n1 = 0;

function sum() {
  n1 += 1;
  number.innerHTML = n1;
  if (n1 > 9) btnSum.disabled = true;
  btnSub.disabled = false;
}
// sum
btnSum.addEventListener('click', sum);

function sub() {
  n1 -= 1;
  number.innerHTML = n1;
  if (n1 <= 0) btnSub.disabled = true;
  btnSum.disabled = false;
}

btnSub.addEventListener('click', sub);