/* Menu Efect */

const navbar = document.querySelector('.nav');
const menuIcon = document.querySelector('.nav__menu--icon');
const menuContent = document.querySelector('.nav__menu');
let letters = document.querySelector('.header__text--title').innerHTML


menuIcon.addEventListener('click', () => {
    menuContent.classList.toggle('nav__menu--open');
    navbar.classList.toggle('nav--open');
})


window.addEventListener('scroll', () => {
    if(window.scrollY > 1) {
        navbar.classList.add('nav--fixed');
    } else {
        navbar.classList.remove('nav--fixed');
    }
});


document.querySelector('.header__text--title').innerHTML = '';
letters = letters.split('');


writeTitle();
// deleteTitle();




function writeTitle() {
    letters.forEach((element, index) => {
        setTimeout(() => {
            document.querySelector('.header__text--title').innerHTML += element
        }, 120 * index);
    });
}

function deleteTitle() {
    letters.forEach((element, index) => {
        setTimeout(() => {
            let e = letters.pop();
            console.log(e)
            document.querySelector('.header__text--title').innerHTML = letters - e
        }, 150 * index);
    });
}






