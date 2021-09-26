'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Event Delegation

// Not effective way
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event 
document.querySelector('.nav__links').addEventListener( 'click',
function(e) {
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }

});



// Implementing smooth scrolling

const [btnScrollTo] = document.getElementsByClassName('btn--scroll-to');
const section1 = document.getElementById('section--1');

btnScrollTo.addEventListener('click', function(e) {

  const s1coords = section1.getBoundingClientRect();

  // DOM rectangle
  // console.log(section1.getBoundingClientRect());  
  // console.log(e.target.getBoundingClientRect());  

  // position relative to the scroll of the page:
  // console.log('current scroll (X/Y)', scrollX, scrollY); 

  // Size of visible screen
  // console.log(document.documentElement.clientHeight, 
  //   document.documentElement.clientWidth);

  // Scrolling
  // scrolls relatively to the current position
  // window.scrollTo(s1coords.left, s1coords.top);
  
  // scrolling to actual position of target
  // window.scrollTo(s1coords.left + scrollX, s1coords.top + scrollY);
  
  // smoothly
  // window.scrollTo({
  //   left: s1coords.left + scrollX, 
  //   top: s1coords.top + scrollY,
  //   behavior: 'smooth'
  // });

  // modern way
  section1.scrollIntoView({behavior: 'smooth'});

})

// const h1 = document.querySelector('h1');

// const eventListenFunc = (e) => {
//   // console.log('addEventListener');
//   h1.removeEventListener('mouseenter', eventListenFunc);
// };

// h1.addEventListener('mouseenter', eventListenFunc);

// lil bit oldschool
// if we assign second function to event this way - it will override
// h1.onmouseenter = () => console.log('onmouseenter');

// Event Propagation in practice

// rgb(255, 255, 255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () => 
//   `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
  
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', 
// function(e) {
//   this.style.backgroundColor = randomColor();
//   // console.log(e.currentTarget); // where element is attached
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', 
// function(e) {
//   this.style.backgroundColor = randomColor();
//   // console.log(e.currentTarget); // where element is attached
// });
// document.querySelector('.nav').addEventListener('click', 
// function(e) {
//   this.style.backgroundColor = randomColor();
//   // console.log(e.currentTarget); // where element is attached
//   // e.stopPropagation();
// }, true);



