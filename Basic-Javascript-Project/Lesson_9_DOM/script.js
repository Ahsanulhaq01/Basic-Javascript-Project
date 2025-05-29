/*
//head button code 
const headbutton = document.createElement("button");
document.body.append(headbutton);
headbutton.classList.add('head')
headbutton.innerText = 'head';

//tail button code 
const tailbutton = document.createElement('button');
document.body.append(tailbutton);
tailbutton.classList.add('tail')
tailbutton.innerText = 'Tail';

//para element :
const para = document.createElement('p');
    para.classList.add('paragraph');
    para.innerText = `You Choose : `;
    document.body.append(para)
//head interactivness :
const headelement = document.querySelector('.head');
headelement.addEventListener('click',()=>{
        para.innerText = `You Choose : ${headbutton.innerText}`
})
//tail interactivness
const tailelement = document.querySelector('.tail');
tailelement.addEventListener('click',()=>{
    para.innerText = `You Choose : ${tailbutton.innerText}`;
})
*/


/*

//code to submit anything with enter key :***********


//code for input element :
const inputelemnt = document.createElement("input");
inputelemnt.placeholder = 'Enter You Name :';
inputelemnt.classList.add('js-input');
document.body.append(inputelemnt)

//code for submit button :

const buttonelement = document.createElement("button");
buttonelement.innerText = "Submit";
document.body.append(buttonelement)
buttonelement.classList.add('submitjs')

//code for paragraph
const para = document.createElement('p');
document.body.append(para);
// code for interactivness :

const jsbutton = document.querySelector('.submitjs');
    jsbutton.addEventListener('click',()=>{
      para.innerText = `Your Name is : ${inputelemnt.value}`;
      inputelemnt.value = ``
})
//code for Enter button interactivness :
inputelemnt.addEventListener('keydown',(event)=>{
        // event.preventDefault();  
        if(event.key === 'Enter'){
            para.innerText = `Your Name is : ${inputelemnt.value}`;
            inputelemnt.value = ``;
        }
        // else{
        //     para.innerText =`You have press wrong key `;
        // }

    })

*/


/*
//code for counting words and also learning onkeyup event *********



//code for input element creation :
const inputelemnt = document.createElement("input");
inputelemnt.classList.add('.js-input');
document.body.append(inputelemnt);
inputelemnt.placeholder = "onkeydown chapter";

//code for creating paragraph element :

const paraelement = document.createElement("p");
paraelement.classList.add('.para');
document.body.append(paraelement);
//code for html para elemnent :
const ahsan = document.querySelector(".count");

//code for onkeyup :
inputelemnt.onkeyup = ()=>{
    paraelement.textContent = inputelemnt.value;
    ahsan.textContent = inputelemnt.value.length
    
}
    */



