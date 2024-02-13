document.addEventListener('DOMContentLoaded', function () {
const mainElement = document.querySelector('main')


    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < 1) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    const mainElement = document.querySelector('main')
    header.classList.add('header--is-hidden');
    mainElement.classList.remove('dark-hover');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    const mainElement = document.querySelector('main')
    header.classList.remove('header--is-hidden');
    mainElement.classList.add('dark-hover');
}