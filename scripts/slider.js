let slider = document.querySelector(".slider");
let wrapper = document.querySelector('.gallery__wrapper');
let arrowLeft = document.querySelector("#arrowLeft");
let arrowRight = document.querySelector("#arrowRight")

const interval = 3000;
let slides = document.querySelectorAll(".slider-item-outer");
const getSlides = () => document.querySelectorAll('.slider-item-outer');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';


wrapper.append(firstClone);

for (let i = 1; i < 4; i++) {
   wrapper.append(slides[i].cloneNode(true))
}

wrapper.prepend(lastClone);
// let width = 367;
const slideWidth = 367;

wrapper.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
   slideId = setInterval(() => {
      moveToNextSlide();
   }, interval);
};

wrapper.addEventListener('transitionend', () => {
   slides = getSlides();

   if (slides[index].id === firstClone.id) {
      wrapper.style.transition = 'none';
      index = 1;
      wrapper.style.transform = `translateX(${-slideWidth * index}px)`;
   }

   if (slides[index].id === lastClone.id) {
      wrapper.style.transition = 'none';
      index = slides.length - 5;
      wrapper.style.transform = `translateX(${-slideWidth * index}px)`;
   }

});

const moveToNextSlide = () => {
   slides = getSlides();
   if (index >= slides.length - 4) return;
   index++;
   wrapper.style.transition = '.7s ease-out';
   wrapper.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
   if (index <= 0) return;
   index--;
   wrapper.style.transition = '.7s ease-out';
   wrapper.style.transform = `translateX(${-slideWidth * index}px)`;
};

slider.addEventListener('mouseenter', () => {
   clearInterval(slideId);
});

slider.addEventListener('mouseleave', startSlide);
arrowLeft.addEventListener('click', moveToNextSlide);
arrowRight.addEventListener('click', moveToPreviousSlide);

startSlide();
