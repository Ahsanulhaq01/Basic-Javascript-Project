/* 3a, 3b and 3c solution of lesson #3
const para = 'My name as :';
const asam = 'Ahsanulhaq';
console.log(`${para} ${asam}`);
*/

/*
3d ,3e and 3f solution of lesson #3

const coffe = 5;
const bagel = 3;
const totalCost = coffe + bagel;

alert(`Total Cost : $${totalCost}`)
*/

/* 
3g,3h,3i and 3j solution of lesson #3
const coffe = 599;
const bagel = 295;
const totalCost = (coffe + bagel)/100;

alert(`
    Total Cost $${totalCost}
    Thank You Come Again`);
    */

//Challenge Excercise of lesson #3

const basketball = 2095;
const shirt = 799;
const deliveryCharge = 499;

let totalCostWithOutShipping = (((basketball *2)+ (shirt *2))/100).toFixed(2);

const shippingPrice = (deliveryCharge * 2)/100;
const fortaxvalue = parseFloat(totalCostWithOutShipping) + shippingPrice;
const taxCalculation = ((fortaxvalue * 100/100)*0.1).toFixed(2);


const totalWithTax = `${(parseFloat(totalCostWithOutShipping)) + parseFloat(taxCalculation) + shippingPrice}`;

console.log(`
    Item(4): \t $${(totalCostWithOutShipping)}
    Shipping & handling: \t$${(deliveryCharge * 2)/100}
    Total before tax: \t $${parseFloat(totalCostWithOutShipping) + (shippingPrice) }
    Estimated tax(10%): \t$${taxCalculation}
    Order total \t$${totalWithTax}
    `)

console.log(23+ 'pakistan'); //this process is called type coercion


