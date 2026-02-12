/* Task1 */
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

/* Task2 */
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * true + num * true); // 6

// Soultion Three
console.log(num + +true + +true + +true); // 6

// Solution Four
console.log(num * (true + true)); // 6

// Solution Five
console.log(num ** true + num ** true); // 6

// Solution Six
console.log(++num + num - true - true ); // 6


/* Task3 */
let numb = "10";

// Solution One
console.log(+numb + +numb); // 20

// Solution Two
console.log(numb * true + numb * true); // 20

// Solution Three
console.log(+numb * (true + true)); // 20

// Solution Four 
console.log((+numb) ** true + (+numb) ** true); // 20


/* Task4 */
let points = 10;

points++; points++; points++;

console.log(points); // 13

// Write Your Code Here

console.log(points); // 8;

////////////////////////////////////NUMBERS/////////////////////////////

/* TASK 1 */
console.log(1e5); // 100000
console.log(100 * 1000); // 100000
console.log(1000000 / 10); // 100000
console.log(50000 + 50000); // 100000
console.log(200000 - 100000); // 100000
console.log(10e4);
console.log(+"100000"); // 100000
console.log(100000 * true); // 100000
console.log(1e6 / 10); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(+100 * 1000); // 100000
console.log(Math.round(100000.2222))  // 100000
console.log(parseInt(100000)) //100000

/* TASK 2 */
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

/* TASK 3 */
console.log(Math.log2(Number.MAX_SAFE_INTEGER + 1) - 53 + 16); //16

/* TASK 4 */
let myVar = "100.56789 Views";

console.log((Math.floor(parseFloat(myVar)))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

/* TASK 5 */
let val = 10;

console.log(Number.isInteger(val) + Number.isInteger(val)); // 2

/* TASK 6 */
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt / 1)); // 10

/* TASK 7 */
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

/////////////////////////////////////strings and methods//////////////

/* Task 1 */
let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee

/* Task 2 */
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

/////////////////comparison//////////////////

/* TASK 1 */
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log( + -50 < +"-40"); // true
console.log( + 10 < -"-40"); // true
console.log(+ "10" == 10); // true
console.log( ! 20 == false); // true

/* TASK 2 */
let num1 = 10;
let num2 = 20;

console.log(num2 > num1); // true
console.log(num1 < num2); // true
console.log(num2 != num1); // true
console.log(num2 !== num1); // true
console.log(typeof num1 === typeof num2); // true
console.log(num1 + num1 < num2 + num2); // true

/* TASK 3 */
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a < b || a < c); // true
console.log((a < b) && !(a > b) && (a > c) && !(a < c)); // true