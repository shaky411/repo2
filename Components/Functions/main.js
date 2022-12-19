// Functions

// function greet(name) {
//     return "Hello " + name + "!";
// }

// console.log(greet("Marc"));

// ======================================

// let multiplyFive = function (number) {
//     return number * 5;
// }

// console.log(multiplyFive(2));
// console.log(multiplyFive(3));
// console.log(multiplyFive(4));

// ======================================

// const name = "Dev Ed";
// const youtuber = "Traversy Media";

// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// toUpper(name);
// toUpper(youtuber);

// ======================================


// this is another way to invoke a function
// const toUpper = () => {

// }


// ======================================




// function greet() {
//     console.log("Hello There");
// }


// const speak = function(name = "marc", time = "night"){
//     console.log(`good ${time} ${name}`);
// };

// speak()
// speak("Willow")



// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log(area)





// ======================================


// Practice with functions

// function doMath(num) {
//     num = Number(num);
//     if(num) {

//         var newNumber = (num + 100) / 5;
//         return newNumber
//     } else {

//         return false;
//     }
// }

// let customNum = doMath(343);
// console.log(customNum);




// ======================================

// Practice with arrow functions

// const greet = function() {
//     return "hello, world!";
// };

// const greet = () => "hello, world!";
    
// const result = greet();
// console.log(result);




// let products = [20,15,30]
// // let tax = .18

// // const bill = function(products, tax) {
// //     let total = 0;
// //     for (let i = 0; i < products.length; i++) {
// //         total += products[i] + products[i] * tax;   
// //     }
// //     return total;
// // };

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;   
//     }
//     return total;
// };

// console.log(bill(products, 0.2))


const name = "Marc";

// Functions

const greet = () => "Hello";

let resultOne = greet();
console.log(resultOne);


// Methods

let resultTwo = name.toUpperCase();
console.log(resultTwo)