let burgerMenu = document.querySelector(".header__burger")
let X = document.querySelector(".x-btn")
let item = document.querySelectorAll(".menu__item")
let Menu = document.querySelector(".header__menu")
let header = document.getElementById("myHeader");
let logo = document.querySelector(".header__logo");
let title = document.querySelector(".intro__title");

burgerMenu.addEventListener("click", (e) => {
        Menu.classList.add("header__menus")
})
item.forEach((e) => {
 
    X.addEventListener("click", (e) => {
        Menu.classList.remove("header__menus")
    })
    
    e.addEventListener("click", (e) => {
        Menu.classList.remove("header__menus")
    })
})


function range1(){
    let SliderValue = document.getElementById("slider").value;
    let  elMyImage = document.getElementById("slider__my-image");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}

function range2(){
    let SliderValue = document.getElementById("slider2").value;
    let  elMyImage = document.getElementById("slider__my-image2");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}

function range3(){
    let SliderValue = document.getElementById("slider3").value;
    let  elMyImage = document.getElementById("slider__my-image3");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}


function range4(){
    let SliderValue = document.getElementById("slider4").value;
    let  elMyImage = document.getElementById("slider__my-image4");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}

function range5(){
    let SliderValue = document.getElementById("slider5").value;
    let  elMyImage = document.getElementById("slider__my-image5");
    elMyImage.style.clipPath = `polygon(0 0, ${SliderValue}% 0, ${SliderValue}% 100%, 0 100%)`;
    // console.log(elMyImage.style.cliath = "polygon(0 0, " + SliderValue + "% 0" + SliderValue + "% 100%, 0 100%)");
}



window.onscroll = function() {myFunction()};



var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    title.classList.add("ass");
    logo.src = "../img/logo-dark.svg"
  } else {
    header.classList.remove("sticky");
    title.classList.remove("ass");
    logo.src = "../img/logo.svg"

  }
}








