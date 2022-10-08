/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
var skillsContent = document.getElementsByClassName('skills__content');
    var skillsHeader = document.getElementsByClassName('skills__header');
    for (i = 0; i < skillsHeader.length; i++) {
        skillsHeader[i].addEventListener('click', toggleSkills, false);
    }
    function toggleSkills() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close';
        }
        if (itemClass == 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open';
        }
    }

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const modelViews = document.querySelectorAll('.services__model'),
      modelBtns = document.querySelectorAll('.services__button'),
      modelCloses = document.querySelectorAll('.services__model-close')

let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((modelBtns, i) => {
    modelBtns.addEventListener('click', () =>{
        model(i)
    })
})

modelCloses.forEach((modelClose) => {
    modelClose.addEventListener('click', () =>{
        modelViews.forEach((modelView) =>{
            modelView.classList.remove('active-model')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 