// const startbtn = document.querySelector('.start');
// const stopbtn = document.querySelector('.stop');
// const paraelement = document.querySelector('.textarea')
// let value;


// startbtn.addEventListener('click',()=>{
//   value = setInterval(() => {
//     paraelement.textContent = Math.floor(Math.random()*6)+1
    
//    }, 2000);
// })

// stopbtn.addEventListener('click',()=>{

//   clearInterval(value);
// })


// const data = fetch('https://jsonplaceholder.typicode.com/posts/1');

// data.then(response =>response.json()).then(value=>{
//   console.log(`The titile of data as ${value.title}`);
  
// })

// data.catch(error=>{
//   console.log(error)
// })

// async function gettitle() {
//   try {
//     const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const value = await data.json();

//   console.log(value.title);

//   } catch (error) {
//     console.log('something went wrong',error)
//   }
  
// }

// gettitle(); 


// fetch('https://jsonplaceholder.typicode.com/users/2').then(Response=>Response.json()).then(data => {
//   console.log(`The user id as ${data.id}`);
  
// })
// .catch(error => {
//   console.log(error)
// })
// async function getuserId(params) {
// try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//   const data = await response.json();
//   console.log(`the user id as  ${data.id}`);
// } catch (error) {
//   console.log("Pakistan is our country");
  
// }
// }

// getuserId();

/////////////////////******************************************************///////////////////////////////


async function parllalexcess(){

  try {
    
    const [respOne,resTwo] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')]);

        const [r1,r2] = await Promise.all([
          resTwo.json(),
          respOne.json()
          ]);

          console.log(`user : ${r1}`);
          console.log(`user : ${r2}`);
          
  } catch (error) {
    console.log('fail to fetch the data ')
  }
  

}

parllalexcess();
