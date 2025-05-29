
let a1;
let sign1,sign2,sign3,sign4,sign5;

const button1element = document.querySelector('.js1-button');
button1element.addEventListener('click' , ()=>{
   
a1 = 1;
document.querySelector('.js-para').innerHTML= `${a1}`;

})

const button2element = document.querySelector('.js2-button');
button2element.addEventListener('click' , ()=>{
 let a2 = 2;
document.querySelector('.js-para').innerHTML= `${a1}${a2}`;

})