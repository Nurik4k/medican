const anims = document.querySelectorAll(".anim");

if (anims.length > 0) {

   window.addEventListener("scroll", animOnScroll);
   function animOnScroll() {
      for (let i = 0; i < anims.length; i++) {
         let animItem = anims[i];
         let animItemHeight = animItem.offsetHeight;
         let animItemOffset = offset(animItem).top;
         const animeStart = 4;


         let animItemPoint = window.innerHeight - animItemHeight / animeStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animeStart;
         }

         if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add("active");
         } else {
            if (animItem.classList.contains("anim-repeat")) {
               animItem.classList.remove("active")
            }
         }
      }
   }

   function offset(elem) {
      const rect = elem.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll();
   }, 300)
}