// const score = {
//     win : 0,
//     lose : 0,
// }

// localStorage.setItem('score', JSON.stringify(score));

// const jsonobject = localStorage.getItem('score');

// const random = (Math.random()* 10).toFixed(0);
// let guess = 1;
// const simpleobject = JSON.parse(jsonobject);
// for(i = 0;i<10;i++){
//     guess  = (Math.random()*i).toFixed(0);
// }
// if(random ===guess){
//    console.log( `You Win!${jsonobject.win +=1}`);
// }
// else{

//     console.log(`You Lose !${jsonobject.lose +=1}`);
// }

// console.log(`
    
//     Winning Score : ${jsonobject.win}
//     Losing Score : ${jsonobject.lose}
    
//     `);

//     console.log(guess);
//     console.log(random);


/*
const score = {
    win: 0,
    lose: 0,
};
const btnelement= document.querySelector('.js-button');
btnelement.addEventListener('click',()=>{
    buttonelement();
localStorage.setItem('score', JSON.stringify('score'));
}); 

function buttonelement(){


const conditionelment = document.querySelector('.js-condition');
const storedScore = localStorage.getItem('score');
const simpleobject = JSON.parse(storedScore);


const random = (Math.random() * 10).toFixed(0);
let guess;

for (let i = 0; i < 10; i++) {
    guess = (Math.random() * i).toFixed(0);
}


if (random === guess) {
    simpleobject.win += 1;
    conditionelment.innerHTML =
    `You Win! `;
} else {
    simpleobject.lose += 1; 
    conditionelment.innerHTML =
    `You Lose! `;
}




const winScore = document.querySelector('.js-WinScore');
winScore.innerHTML = 
`Win : ${simpleobject.win}`

const loseScore = document.querySelector('.js-LosScore');
loseScore.innerHTML = 
`lose : ${simpleobject.lose}`;

localStorage.setItem('score', JSON.stringify('score'));

}
  */


// Retrieve score from localStorage or initialize it
// let score;
// const storedScore = localStorage.getItem('score');
// if (storedScore) {
//     score = JSON.parse(storedScore); // Use the stored score
// } else {
//     score = { win: 0, lose: 0 }; // Default score if no data is stored
// }

// const buttonelem = document.querySelector('.js-button');
// buttonelem.addEventListener('click', () => {
//     buttonelement();
// });

// function buttonelement() {
//     const conditionelment = document.querySelector('.js-condition');

//     // Generate random numbers
//     const random = Math.floor(Math.random() * 10); // Random number between 0 and 9
//     const guess = Math.floor(Math.random() * 10); // Random number between 0 and 9

//     // Compare random and guess
//     if (random === guess) {
//         score.win += 1;
//         conditionelment.innerHTML = `You Win!`;
//     } else {
//         score.lose += 1;
//         conditionelment.innerHTML = `You Lose!`;
//     }

//     // Update score display
//     const winScore = document.querySelector('.js-WinScore');
//     winScore.innerHTML = `Win: ${score.win}`;

//     const loseScore = document.querySelector('.js-LosScore');
//     loseScore.innerHTML = `Lose: ${score.lose}`;

//     // Save updated score to localStorage
//     localStorage.setItem('score', JSON.stringify(score));
// }


let score;
const updateScore = localStorage.getItem('score');
// localStorage.clear();

if(updateScore){
    score = JSON.parse(updateScore)
}
else{
    score = {win : 0,lose : 0}
}

const buttonelement = document.querySelector('.js-button');
buttonelement.addEventListener('click' , ()=>{
    buttonftn();
})
buttonelement.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
        event.preventDefault();
        buttonftn();
    }
})

const condition1 = document.querySelector('.js-condition');
const winScore = document.querySelector('.js-WinScore');
const losScore = document.querySelector('.js-LosScore');


function buttonftn(){
    const random1 = (Math.random()*10).toFixed(0);
    const guess = (Math.random()*10).toFixed(0)

    if(random1 === guess){
        condition1.innerHTML = `You Win !`;
        score.win++;
    }
    else{
        condition1.innerHTML = `You lose !`
        score.lose++;
    }

    winScore.innerHTML = `Win : ${score.win}`;
    losScore.innerHTML = `Lose : ${score.lose}`;

    localStorage.setItem('score',JSON.stringify(score));
    // localStorage.clear();
}