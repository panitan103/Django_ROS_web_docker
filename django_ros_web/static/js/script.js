let mainNav=document.getElementById('js-menu');
let navBar=document.getElementById('js-nav');
let navBarToggle = document.getElementById('js-nav-toggle');

navBarToggle.addEventListener("click",NavFunc_Over,false);

function NavFunc_Over(){
    mainNav.classList.toggle('active-ul')
    navBar.classList.toggle('active-nav')
};

