// NAV //
const navBar = document.querySelector('.nav1');


window.addEventListener('scroll',() => {
    navBar.classList.add('navOnScroll')
});

window.onscroll = function (e) {
    console.log(window.scrollY); // Value of scroll Y in px
};

let scrollBTN = document.querySelector('.scroll');
scrollBTN.addEventListener('click', ()=>{
    window.scrollTo(0, 680)
})

let scrollAbout = document.querySelector('.aboutNAV');
scrollAbout.addEventListener('click', ()=>{
    window.scrollTo(0, 680)
})

let scrollProductos = document.querySelector('.productosNAV');
scrollProductos.addEventListener('click', ()=>{
    window.scrollTo(0,1400)
})

let scrollContacto = document.querySelector('.contactNAV');
scrollContacto.addEventListener('click', ()=>{
    window.scrollTo(0,3000)
})

// SECCION DE PRODUCTOS EN DISPLAY //

const previewProductos = document.querySelectorAll(".productosImg img");
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".fullImg");

previewProductos.forEach((previewProductos)=>{
    previewProductos.addEventListener("click", ()=>{
        modal.classList.add("open");

        
        const sourceImg = previewProductos.getAttribute('alt');
        fullImg.src = `./img/productos/${sourceImg}.png`;
    })
})

modal.addEventListener("click", (e)=>{
    if (e.target.classList.contains("modal")){
        modal.classList.remove("open");
    }
})

// ----------------
