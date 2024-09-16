
// nav toggle

let menuitem =document.querySelector('.navmenu') 
let icon = document.querySelector('.fa-bars')


function navtoggle(){
    menuitem.classList.toggle('nav-active')
    icon.classList.toggle('fa-xmark')
    
}




// languge toggle

$(document).ready(function(){
    $('.spain-flag').hide()
$(".us-flag").click(function(){
$(".spain-flag").slideToggle("fast");
});
});