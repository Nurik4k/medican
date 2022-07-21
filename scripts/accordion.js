
function dropdown(event) {
   if (event.target.className != "accordion__lable-title"
      && event.target.className != "dropdown"
      && event.target.className != "accordion__label") return;
   let item = event.target.closest(".accordion__item-inner")
   item.classList.toggle('active');
}

body.addEventListener("click", dropdown)