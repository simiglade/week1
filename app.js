const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const body = document.querySelector('body');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position =window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#008080";
    }
    else{
        header.style.backgroundColor="transparent";
    }
    if(scroll_position > 1050){
        body.style.backgroundColor = "blue";
    }
    else{
        body.style.backgroundColor="white";
    }
});