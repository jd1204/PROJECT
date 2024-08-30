let navitem = document.querySelector('.nav-item');
let icon = document.querySelector('.fa-bars')
let logowhite = document.querySelector('.logo-white')

function navtoggle(){
    navitem.classList.toggle('navitem-active')
    icon.classList.toggle('fa-xmark')
 
}