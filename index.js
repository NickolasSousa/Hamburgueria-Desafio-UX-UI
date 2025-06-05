
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