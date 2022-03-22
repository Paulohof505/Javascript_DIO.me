const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const Button = document.getElementById('change-cat')
const catImg = document.getElementById('cat')

const getCats = async () => {
    try{
    const data = await fetch(BASE_URL); // Espera carregar a data
    const json = await data.json();

    return json.webpurl;
    } catch (err) {
    console.log(err.message)
    }
}


const loading = async() =>{
    catImg.src = await getCats(); // Espera pegar a imagem
}

Button.addEventListener('click', loading);

loading();











