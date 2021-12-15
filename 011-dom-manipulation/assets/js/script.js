const text = document.querySelector('.titulo');
const btnMode = document.querySelector('.btnMode');


const changeMode = () => {
  document.body.classList.toggle('dark-mode');
  btnMode.classList.toggle('dark-mode');
}

btnMode.addEventListener('click', changeMode);