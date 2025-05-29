
const buttonelement = document.createElement('button')
document.body.appendChild(buttonelement);
buttonelement.classList.add('js-button');
buttonelement.innerText = 'Start Typing';
const btn1 = document.querySelector('.js-button');
const paraelement = document.createElement('p');
    paraelement.classList.add('js-para');
    const count = 0;
    document.body.appendChild(paraelement);
btn1.addEventListener('keydown' , (event)=>{
    // event.preventDefault();
    
    if(event.key ==="Backspace"){
        paraelement.innerText = paraelement.innerText.slice(0,-1);
        count--;
    }
    else if(event.key.length ===1){
    paraelement.innerText += `${event.key}`;  
    count++;
        
        
        
    }
    const paracount = document.querySelector('.count');
    paracount.innerText = `${count}`;
});
  
    // if(event.key === 'Enter'){
    //     const paraelement = document.createElement('p');
    //     paraelement.classList.add('js-para');

    //     document.body.appendChild(paraelement);
    //     paraelement.innerText = "Pakistan is our country";
    // }
    // else{
    //     const para2element = document.createElement('p');
    //     para2element.classList.add('js-para2');
    //     document.body.appendChild(para2element);
    //     para2element.innerText = 'chal nikal bsdk  !';
    // }
//});


/*
// Create a form and input field dynamically
const form = document.createElement('form');
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Type something...';
form.appendChild(inputField);

// Add the form to the body of the page
document.body.appendChild(form);

// Listen for the "keydown" event on the input field
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default behavior

    // Get the input value
    const inputValue = inputField.value;

    // Display the input value (or handle it as needed)
    console.log(`You entered: ${inputValue}`);

    // Clear the input field
    inputField.value = '';
  }
});*/
