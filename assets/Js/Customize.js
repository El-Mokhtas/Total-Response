const carouselExampleCaptions = document.querySelector(
    "#carouselExampleCaptions"
);

const carousel = new bootstrap.Carousel(carouselExampleCaptions, {
    interval: 3000,
    touch: false,
});

let switcherlist = document.querySelectorAll(".switcher li");
switcherlist.forEach((li) => {
    li.addEventListener("click", removeActive);
});
function removeActive() {
    switcherlist.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
    });
}
// manage imges
(function () {
    let buttons = document.querySelectorAll(".btn");
    let storeImages = document.querySelectorAll(".card");
    buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    e.preventDefault();
    let product = e.target.dataset.product;
    storeImages.forEach((item) => {
        if (product === "All") {
            item.style.display = "block";
        } else {
        if (item.classList.contains(product)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
});
});
});
})();


// To Tob Scrool 
let span =document.querySelector(".up");
window.onscroll =function() {
    this.scrollY >= 400 ? span.classList.add("show") : span.classList.remove("show") ;
}
span.onclick = function () {
    window.scrollTo({
        top:0 ,
        behavior:"smooth"
    })
}



