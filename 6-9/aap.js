// chapter 6-9
// addition,
// subtraction,
// increment,
// decrement ,

//Task = 1
let num1 = 5;
let num2 = 5;
console.log(num1 * num2);

let a = 5;
let b = 1;
console.log(a + b);

let c = 9;
let d = 5;
console.log(c - d);

//Task = 2
var e = 2,
  f = 1;
var result = --e - --f + ++f + f--;
console.log("e =", e);
console.log("f =", f);
console.log("result =", result);

//Task = 3
let naam = prompt("What is your name?");
alert("Hello " + naam + "! Welcome");

// Task 4 – Basic Math Operations
let num = +prompt("Enter first number:");
let nume = +prompt("Enter second number:");

document.write("<h3>Results:</h3>");
document.write("Addition: " + (num1 + num2) + "<br>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + num1 * num2 + "<br>");
document.write("Division: " + num1 / num2 + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br>");

//Task = 5
let Table = prompt("Aap ko konsa table parhna hai?");

if (Table === "" || Table === null) {
  Table = 5;
}

for (let i = 1; i <= 10; i++) {
  document.write(Table + " x " + i + " = " + Table * i + "<br>");
}

//Task = 6
let sub1 = prompt("Enter first subject name:");
let sub2 = prompt("Enter second subject name:");
let sub3 = prompt("Enter third subject name:");

let totalMarks = 100;

let marks1 = +prompt("Enter marks for " + sub1);
let marks2 = +prompt("Enter marks for " + sub2);
let marks3 = +prompt("Enter marks for " + sub3);

let totalObtained = marks1 + marks2 + marks3;
let percentage = (totalObtained / 300) * 100;

document.write("<h3>Marks Sheet</h3>");
document.write(sub1 + ": " + marks1 + "/100<br>");
document.write(sub2 + ": " + marks2 + "/100<br>");
document.write(sub3 + ": " + marks3 + "/100<br>");
document.write("Total Marks: 300<br>");
document.write("Obtained Marks: " + totalObtained + "<br>");
document.write("Percentage: " + percentage + "%");
