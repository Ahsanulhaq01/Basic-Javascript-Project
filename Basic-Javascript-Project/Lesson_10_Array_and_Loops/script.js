// function getlastValue(arr){

//     size = arr.length;
//     console.log(size)
//    return arr[size-1]
// }


// size = getlastValue([1,2,3,10]);
// console.log(size)

//????????????********************?
// function swap(arr){

//     [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
//     return arr;

// }

// let arr = [9,8,7,6,5,4,44];

// const zone = swap(arr);
// console.log(zone.join(','))
// // console.log(JSON.stringify(zone))   

//********************* */
//****************** */
// for(let i = 0;i<=10 ;i+=2){
//     console.log(i)
//     // i+=2
// }

//*********************8 */
// for(let i = 5;i>0;i--){
//     console.log(i)
// }
//
//**************************************** */
// let i =0
// while(i<=10){
//     console.log(i);
//     i+=2;
// }
//     console.log()
// i = 5
// while(i>0){
//     console.log(i);
//     i--;
// }

//********************** */

// function repeat(arr){
//     for(let i = 0; i < arr.length;i++){
//       arr[i]=arr[i]+1;

//     }
//     return arr;
// }
// let arr = [-2,3,-4,5,-6,6]


// console.log(repeat(arr))  


//*******************88888 */

///** */******************* */
// 
/*
function twoarr(arr){
    // let ahsan=[];
    // for(let i= 0;i<arr.length;i++){

    //     ahsan.push(arr[i]+1)

    // }
    // return [...arr];

    return arr.map(item => item);

}
let arr =[2,3,39,5]

console.log(twoarr(arr))


//************ */
//*************************************************** */
/*
function addnum(arr,num){
    for(let i = 0;i<arr.length;i++){
        arr[i] =arr[i]+num;
    }

    return arr;
}

let arr= [1,2,3,4];
console.log(addnum(arr,4))

*/
//88888888888888888888888888**************************

/*
function addarray(arr1,arr2){
   
    for(let i = 0; i < arr1.length; i++){

        arr1[i] = arr1[i] + arr2[i];     
    }

    return ar1;
}


let ar1 = [1,2,3];
let ar2 = [4,5,6];

console.log(addarray(ar1,ar2));

*/


/*
function positivecount(arr){
    let count = 0;
    for(let i = 0;i<arr.length ;i++)
   {
        if(arr[i]>0)
        count++;
       
    }
    
   console.log(`You have ${count} Positive element`);
}

let arr = [1,2,-3,4,-6,-5,-4,-40,2,3,1,2,3,2,22];

(positivecount(arr));

*/

/*
/////Printing max and min element of array :
function minmax(arr){
   let arr1 =[];
   let arr2 = [];
    
    for(let i = 0;i < arr.length;i++){

        // for(let j = 1; j<=arr.length;j++){

            if(arr[i]>arr[(i+1)]){
                arr1.push(arr[i])
                
                
            }
            else{
                arr2.push(arr[i+1])
            }

            // if(arr[i]>arr[(1+i)]){
            //     arr.pop(arr[1+i])
                
                
            // }
            // else{
            //     arr.pop(arr[i])
            // }
            // // if(arr[i]<arr[(j+i)]){

            //     arr2.push(arr[i])
              
            // }
            // if(arr1[i]<arr1[j+i]){
            //     arr1.pop(arr1[i])
            // }

            // if(arr2[i]>arr2[j+i]){
            //     arr2.pop(arr2[i])
            // }
    
        // }

        // arr1.pop([arr1.length+i]);
        // arr2.pop(arr2.length+i);
        
        


        // if(arr[i]>arr[i+1]){
        //     arr1.push(arr[i])
        
        // }
        // if(arr[i] < arr[i+1]){
        //     arr2.push(arr[i])
      
        // }

      
    }

    // console.log(arr1);
    console.log(arr2);
    return arr1
    // return console.log(`The Max value is : ${arr1} arr2 : ${arr2}`);

}
    */
//arr copying /////////////////////

/*
const arr = [3,6,50,4]
 const ret = minmax(arr)
console.log(minmax([3,6,1000,500,3,,21,0,10202]))


ftn();
const ftn = function()//this function is called anonymus funciton namaloom ftn because of having no name
{
    console.log("hello ahsan")
}

ftn(); 

*/
//callback function     
/*
function run(para){
    para();//callback function
};

run(function(){
    console.log("ahsanulha  q=")
});
*/

// setTimeout(() => {
//     console.log("hello ashan")
// }, 3*1000);

// console.log("you are very blessing person")





// const id = setInterval(() => {
//     console.log("ahanulhaq a python devloper")
// }, 0);

// clearInterval(id)

let position = 0;
const box = document.createElement('div');
box.style.width = '50px';
box.style.height = '50px';
box.style.backgroundColor = 'red';
box.style.position = 'absolute';
document.body.appendChild(box);

const animationId = setInterval(() => {
    position += 10; // Move the box 10 pixels to the right
    box.style.left = `${position}px`;
    if (position >= 200) {
        clearInterval(animationId); // Stop the animation
    }
}, 100); // 100 milliseconds = 0.1 seconds