const btn = document.querySelector('#btnCheck');
const n1 = document.querySelector('#n1');
const n2 = document.querySelector('#n2');
let ans = document.querySelector('#answer');

function checkNumber(a, b) {
  const sum = (Number(a) + Number(b));
  let msg = 'Os números ${a} e ${b} ';
  if (a == b) msg = `são iguais. Sua soma é ${sum}, `;
  else msg = `não são iguais. Sua soma é ${sum}, `;

  if (sum > 10) msg += 'que é maior que 10 e ';
  else msg += 'que é menor que 10 e ';

  if (sum < 20) msg += 'menor que 20.';
  else msg += 'maior que 20.';
  if (a && b) ans.innerHTML = msg;
  console.log(a);
  console.log(b);
}

btn.addEventListener('click', () => checkNumber(n1.value, n2.value));
