const text = document.querySelector('.title');
const btnMode = document.querySelector('.btnMode');


const changeMode = () => {
  document.body.classList.toggle('dark-mode');
  btnMode.classList.toggle('dark-mode');
  if (btnMode.classList.contains('dark-mode')) {
    text.innerHTML = 'Dark Mode ON';
  } else {
    text.innerHTML = 'Light Mode ON';
  }
}

btnMode.addEventListener('click', changeMode);