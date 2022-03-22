const botao = document.getElementById('mode-selector');
const corpo = document.querySelector('body');
const rodape = document.querySelector('footer');
const titulo = document.getElementById('page-title');

botao.addEventListener('click', function change() { // função de quando clicar no botão
    botao.classList.toggle('dark-mode');
    corpo.classList.toggle('dark-mode');
    rodape.classList.toggle('dark-mode');
    titulo.classList.toggle('dark-mode');
    if (titulo.innerHTML == 'Light Mode ON' && botao.innerHTML == 'Dark Mode'){
        titulo.innerHTML = 'Dark Mode ON';
        botao.innerHTML = "Light Mode";
    } else {
        titulo.innerHTML = 'Light Mode ON';
        botao.innerHTML = "Dark Mode";
    }
})