
const imgCat = document.querySelector('.image');
const btnCat = document.querySelector('.btnRandom');
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const showCats = async () => {

  try {
   // aguarda ate receber o json aqui
   // vai transformar em json para javascript

  // const result = await fetch(BASE_URL)
  // .then(response => response.json());

  // outra opcao
  const result = await fetch(BASE_URL);
  const response = await result.json();
  return response.webpurl; // acessa a chave webpurl do objeto retornado 
  } catch(error) {
    return error;
  }
}

const newImage = async () => {
  imgCat.src = await showCats();
  // console.log(`largura: ${imgCat.width}`);
  // console.log(`altura: ${imgCat.height}`);
}

btnCat.addEventListener('click', newImage);
newImage();

// console.log(showCats());