/*TASK1
Code One:
Will NOT work because the element with id="el" is not loaded yet
when the script runs in the head.

Code Two:
Will work because window.onload waits until the whole page
is fully loaded before running the code.

Code Three:
Will work because the script runs after the element is created
inside the body.*/

/*TASK2*/
document.write( "<h1 style='color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;'>ELZERO</h1>");

/*TASK3*/
console.log(
    "%cElzero  %cWeb %cSchool",
    "color: red; font-size: 40px; font-weight: bold;",
    "color: green; font-size: 40px;",
    "color: blue; font-size: 40px;");


/* TASK4 */
console.group("Group 1");

console.log("Message One");
  console.log("Message Two");

  console.group("Child Group");

  console.log("Message One");
  console.log("Message Two");

  console.group("Grand Child Group");

  console.log("Message One");
  console.log("Message Two");

  console.groupEnd(); 
  console.groupEnd(); 
  console.groupEnd(); 

  console.group("Group 2");

  console.log("Message One");
  console.log("Message Two");

  console.groupEnd(); 

/*TASK5*/
  var names = ["Farah", "Ahmed", "Mohammed", "Ali", "Aya"];
  console.table(names);

/*TASK6*/
//console.log("Iam In Console");
//document.write("Iam In Page");

/*console.log("Iam In Console");*/
/*document.write("Iam In Page");*/


//////////////////////////////////////////////////////


/*Task 1 */
// Add Variables Here
let numberOne = 10; 
let numberTwo = 20; 

// Output
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

// Normal Concatenate
console.log(numberTwo + "\n" + numberOne);

// Template Literals Way
console.log(`${numberTwo}
${numberOne}`);

/*Task 2 */
const elzero = {
    innerHTML: `${"object"}` 
  };
  console.log(elzero.innerHTML); 
console.log(typeof elzero);    

/*Task 3 */
console.log('I\'m In\n\\\\\nLove \\\\ \"\"\" \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``');


/* task 4*/
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);   // _21_2021_2021_2021_20_
