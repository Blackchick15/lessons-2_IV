const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
pageYOffset;

let headerHeight = header.clientHeight;

function navbarFixet(){
if(pageYOffset > headerHeight ){
    nav.classList.add('fixed-nav');
}else{
    nav.classList.remove('fixed-nav');
}
}

window.addEventListener('scroll', navbarFixet);




console.log(header.clientHeight);

// console.log(header.clientWidth);


