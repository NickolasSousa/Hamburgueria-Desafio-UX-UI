const sidebarContainer = document.querySelector('.sidebar')
const navbar = document.querySelector('.navbar')
let tamanhoTela = window.innerWidth;

let menuHamburguer;

//trocar logo
function trocarLogo(){
    const logo = document.querySelector('#logo');
    if (tamanhoTela <= 768){
        logo.src = './assets/Logo-Mobile.svg';
    } else{
        logo.src = './assets/refactor logo.svg';
    }
    
}

window.addEventListener('resize', () => {
    tamanhoTela = window.innerWidth;
    trocarLogo();
    
    if (tamanhoTela <= 768 && !menuHamburguer) {
        criarMenuHamburguer();
        const menuCheckbox = menuHamburguer.querySelector('.menu');
        menuCheckbox.addEventListener('change', atualizarEstadoMenu);
    }
});




window.addEventListener('resize', trocarLogo);
window.addEventListener('load', trocarLogo);


function criarMenuHamburguer() {
    menuHamburguer = document.createElement('div')
    menuHamburguer.classList.add('menu-hamburguer')
    menuHamburguer.innerHTML = `
    <input type="checkbox" class="menu" hidden id="menu">
    <label for="menu"><img src="./assets/Menu.svg" alt=""></label>
    `

    navbar.append(menuHamburguer)
}


if(tamanhoTela<=768) {
    criarMenuHamburguer()

}

const menuCheckbox = menuHamburguer.querySelector('.menu')

function atualizarEstadoMenu() {

    sidebarContainer.classList.toggle('ativa', menuCheckbox.checked)
    document.body.classList.toggle('no-scroll', menuCheckbox.checked)
    document.documentElement.classList.toggle('no-scroll', menuCheckbox.checked);
    // menuHamburguer.style.display = 'none'

}


menuCheckbox.addEventListener('change', atualizarEstadoMenu,)
