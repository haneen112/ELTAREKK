const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const hamburgerMenu = document.querySelector(".hamburger");
hamburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");  // إضافة أو إزالة الكلاس "active" من bars
    xmark.classList.toggle("active"); // إضافة أو إزالة الكلاس "active" من xmark
    navbar.classList.toggle("active"); // إضافة أو إزالة الكلاس "active" من navbar
});




let stars =document.getElementById('star');
let moon =document.getElementById('moon');
let mountains=document.getElementById('mountains');
let motor=document.getElementById('motor');
let eltarekk = document.querySelector('.eltarekk');
window.onscroll = function(){
let value=scrollY;
stars.style.left=value + 'px';
moon.style.top=value*3 + 'px';
mountains.style.top=value*1.5 + 'px';
motor.style.top=value + 'px';
motor.style.left=value*3 + 'px';
eltarekk.style.fontSize= value + 'px';
if(scrollY>=40){
    eltarekk.style.fontSize= 40 + 'px';
}
}


