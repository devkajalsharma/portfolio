let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        navClose.style.display="block";
        navToggle.style.display="none"
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navClose.style.display="none";
        navToggle.style.display="block"
       
    })
}


//to remove nav menu mobile //
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// skills//

const skillsContent = document.getElementsByClassName('skills-content');
skillsHeader = document.querySelectorAll('.skills-header');
skillsArrow = document.querySelectorAll('.skills-arrow');


function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills-content skills-close"

    }
    if (itemClass === "skills-content skills-close") {
        this.parentNode.className = "skills-content skills-open";


    }




}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills)

})

// skillsArrow.addEventListener('click',()=>{
//     skillsArrow.classList.add('toggle-up');
//     skillsArrow.classList.remove('skills-arrow');
// })


let education = document.getElementById('education');
let work = document.getElementById('work');
let eduContent = document.getElementById('education-content');
let workContent = document.getElementById('work-content');

work.addEventListener('click', () => {
    document.getElementById('work-content').style.display = "block";
    document.getElementById('education-content').style.display = "none";
    education.classList.remove('active');

});

education.addEventListener('click', () => {
    document.getElementById('education-content').style.display = "block";
    document.getElementById('work-content').style.display = "none";
    work.classList.remove('active');

});


// services //

const modelButtons = document.querySelectorAll('.services-button'),
    showModels = document.querySelectorAll('.services-model'),

    closeModels = document.querySelectorAll('.services-model-close');



   let model = function(modelClick){
    showModels[modelClick].classList.add('active-model');


    }

    modelButtons.forEach((modelButton,i)=>{
        modelButton.addEventListener('click',()=>{
            model(i);
        })
    })
   
    closeModels.forEach(( closeModel)=>{
        closeModel.addEventListener('click',()=>{
            showModels.forEach((showModel)=>{
                showModel.classList.remove('active-model');
            })
        })
    })

// change header background on scroll

function changebg(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80)nav.classList.add('scroll-header');
    else{
        nav.classList.remove('scroll-header'); 
    }
}

window.addEventListener('scroll', changebg);



//scrolltop show//

function scrolltop(){
    const scrolltop =document.getElementById('scroll-top');
    if(this.scrollY>=560)scrolltop.classList.add('show-scroll');
    else{
        scrolltop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrolltop)

// dark theme enable //

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const themeIcon = 'fa-sun';

const selectedTheme = localStorage.getItem('selected-Theme');
const selectedIcon = localStorage.getItem('selected-Icon');


const getcurrentTheme = ()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getcurrentIcon = ()=>themeButton.classList.contains(themeIcon)? 'fa-moon': 'fa-sun';

if(selectedTheme)
document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme);

themeButton.classList[selectedIcon === 'fa-moon'? 'add':'remove'](themeIcon);
// return false;

themeButton.addEventListener('click', ()=>{
document.body.classList.toggle(darkTheme);
document.body.classList.toggle(themeIcon);



localStorage.setItem('selectedTheme', getcurrentTheme());
localStorage.setItem('selectedIcon', getcurrentIcon());
}
)

var swiper = new swiper(".myswiper", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,
  });
