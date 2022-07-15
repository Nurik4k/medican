const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector(".menu-list").cloneNode(true);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
   e.preventDefault();
   popup.classList.toggle("open");
   hamb.classList.toggle("active");
   body.classList.toggle("noscroll")
   renderPopup()
}

function renderPopup() {
   popup.appendChild(menu);
}