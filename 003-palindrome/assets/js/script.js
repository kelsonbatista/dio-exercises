const inputString = document.querySelector('#mytext');
const btn = document.querySelector('#btnCheck');
const ans = document.querySelector('#answer');

function checkPalindrome(string) {
  if (string.replace(/\s/g, '').split('').reverse().join('') === string.replace(/\s/g, '')) ans.innerHTML = 'This word/phrase is a palindrome';
  else ans.innerHTML = 'This word/phrase is NOT a palindrome';
}

btn.addEventListener('click', () => {
  checkPalindrome(inputString.value);
})