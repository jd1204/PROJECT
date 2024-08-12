let icon = document.querySelector('.fa-bars');
let menu = document.querySelector('.menu-item');

function navtoggle(){
icon.classList.toggle('fa-xmark')
menu.classList.toggle('navbar-active')
}


// faq-section 
document.querySelectorAll('.faq-section-contain').forEach(faq => {
    const faqans = faq.querySelector('.faq-section-contain-answer');
    const faqicon = faq.querySelector('.fa-plus');
    
    faq.addEventListener('click', () => {
        // Close all other FAQ answers and reset their icons
        document.querySelectorAll('.faq-section-contain').forEach(f => {
            if (faq !== f) {
                const otherAnswer = f.querySelector('.faq-section-contain-answer');
                const otherIcon = f.querySelector('.faq-section-contain-question i');
                otherAnswer.classList.remove('faq-section-contain-active');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });

        // Toggle the current FAQ answer and icon
        faqans.classList.toggle('faq-section-contain-active');
        if (faqans.classList.contains('faq-section-contain-active')) {
            faqicon.classList.remove('fa-plus');
            faqicon.classList.add('fa-minus');
        } else {
            faqicon.classList.remove('fa-minus');
            faqicon.classList.add('fa-plus');
        }
    });
});