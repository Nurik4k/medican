
let width = 367;
let count = 4;
let gallery = document.querySelector('.gallery__wrapper');

let galleryItems = document.querySelectorAll(".slider-item-outer")

let position = 0;

arrowRight.onclick = function () {
   position += width;

   position = Math.min(position, 0)

   gallery.style.marginLeft = position + 'px';
};

arrowLeft.onclick = function () {
   position -= width;

   position = Math.max(position, -width * (galleryItems.length - count));

   gallery.style.marginLeft = position + 'px';
};