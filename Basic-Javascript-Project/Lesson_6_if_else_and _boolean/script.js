/*
let hour = Number((Math.random()*24).toFixed(0));
// console.log(hour);
const name1 = 'Ahsanulhaq';
if(hour >5 && hour <13 ){
    console.log(`Good Morning : ${name1}`);
}
else if(hour > 12 && hour <18){
    console.log(`Good afternoon : ${name1}`);
}
else
console.log(`Good Night : ${name1}`);



let age = Number((Math.random()* 90).toFixed(0));
let isHoliday = false;

console.log(age);
if(((age <=6 && age > 0)||age >=65) && !isHoliday){
    console.log('Discount');
}
else
console.log('No Discount');



let flip = Number(Math.random().toFixed(1));
let result;
console.log(flip);
// if(flip < 0.5){
//     result = 'Head';
// }
// else
// result = 'Tail';

let statement = (flip<0.5) ? result = 'Head' : result = 'Tail';

let guess = 'Tail';
// if(result === guess){
//     console.log('You Win');
// }
// else{
//     console.log('You Lose');
// }

let guessResult = (result === guess) ? console.log('You Win') : console.log('You Lose');
*/

/***********************************************/

let count = 0;

const addButtonElement = document.querySelector(".js-cartbutton");

addButtonElement.addEventListener('click',()=>{
    
    countCheck(1);


})

const onebuttonelement = document.querySelector('.js-onebutton');

    onebuttonelement.addEventListener('click', ()=>{
    
    countCheck(1);
})

const twobuttonelement = document.querySelector('.js-twobutton');
twobuttonelement.addEventListener('click',()=>{
   
    countCheck(2);
})

const removebuttonelement = document.querySelector('.js-removebutton');
removebuttonelement.addEventListener('click',()=>{
    checkForRemove();
   
})

const resetbuttonelement = document.querySelector('.js-resetbutton');
resetbuttonelement.addEventListener('click',()=>{
    checkForReset();
   
})


function countCheck(countarg){
   const paraelement = document.querySelector('.paraCart');
   paraelement.innerHTML = `${count}`;
    if(paraelement.innerHTML<=10-countarg){
        
        count+=countarg;

        paraelement.innerHTML =
        `Cart Quantity : ${count}`
       
        
    } 
    else{
        alert('Cart is full');
        paraelement.innerHTML =
        `Cart Quantity : ${count}`
    }
    
}

function checkForRemove(){
    const paraelement = document.querySelector('.paraCart');
    if(count > 0 || count ===10){
        count--;
        paraelement.innerHTML = `Cart Quantity : ${count}`;
    }
    else{
        alert('Sorry!Not enough items in the Cart');
    }
}

function checkForReset(){
    const paraelement = document.querySelector('.paraCart');
    if(count === 0){
     alert('Cart is already Reset')  ;
    }
    else{
        count = 0;
        paraelement.innerHTML = `Cart Quantity : ${count}`;
    }
}


