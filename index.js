
let tamanhoTela = window.innerWidth;

//trocar logo
function trocarLogo(){
    const logo = document.querySelector('#logo');
    if (tamanhoTela < 768){
        logo.src = './assets/Logo-Mobile.svg';
    } else{
        logo.src = './assets/refactor logo.svg';
    }
    
}

window.addEventListener('resize', trocarLogo);
window.addEventListener('load', trocarLogo);


//estilo do menu

// function posicaoItemsNav(){
//     const navItems = document.querySelector('.nav');
//     if (tamanhoTela < 768){
//         navItems.style.position = 'relative';
//         navItems.style.left = '10px';
//     }else{
// }
// }

function atualizarEstadoMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-hamburger');
    const sidebar = document.querySelector('.sidebar');
    
    sidebar.classList.toggle('ativa', menu.checked);
    document.body.classList.toggle('no-scroll', menu.checked);
    document.documentElement.classList.toggle('no-scroll', menu.checked);
    menuIcon.style.display = 'none'
}

function menuHamburguer() {
    const menu = document.querySelector('.menu');
    menu.addEventListener('change', atualizarEstadoMenu);

    atualizarEstadoMenu();
}

document.addEventListener('DOMContentLoaded', menuHamburguer);



