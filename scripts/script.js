const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector(".menu-list").cloneNode(true);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {

   popup.classList.toggle("open");
   hamb.classList.toggle("active");
   body.classList.toggle("noscroll")
   renderPopup()


}

function renderPopup() {
   popup.appendChild(menu);
}


popup.addEventListener("click", (event) => {
   if (event.target.tagName !== "A") return;
   hambHandler(event);
});




// window.addEventListener("resize", function () {
//    let circles = this.document.querySelectorAll(".circle-green");
//    if (window.matchMedia("(max-width: 1520px)").matches) {
//       circles[1].classList.remove("circle-green--right");
//       circles[5].classList.remove("circle-green--right");
//    } else {
//       circles[1].classList.add("circle-green--right");
//       circles[5].classList.add("circle-green--right");
//    }
// })



