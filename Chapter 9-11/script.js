//Task 01
//Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

let city = prompt("Enter your City");
if (city === "Karachi") {
    alert("Welcome to city of lights")
}

//Task 02
/*Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.*/

let gender = prompt("Enter your Gender");

if (gender === "male" || gender === "Male") {
    alert("Good Morning Sir")
} 
if (gender === "female" || gender === "Female") {
    alert("Good Morning Ma'am")
}

//Task 03
/*Write a program to take input color of road traffic signal from the user & show the message according to this table:*/

let color = prompt("Enter traffic signal color");

if (color === "Red" || color === "red") {
    alert("Must Stop")
} else if (color === "Yellow" || color === "yellow") {
    alert("Ready to move")
} else if (color === "Green" || color === "green") {
    alert("Move now")
} else {
    alert("Enter a valid color")
}

//OR

/* if (color === "Red" || color === "red") {
    alert("Must Stop")
} 
if (color === "Yellow" || color === "yellow") {
    alert("Ready to move")
}
if (color === "Green" || color === "green") {
    alert("Move now")
} */

//Task 04 

/* Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 
0.25 litres, show the message “Please refill the fuel in your car” */

let remainingFuel = prompt("Enter the remaining fuel in litres");

if (remainingFuel < 0.25 + "litres"){
    alert("Please refill the fuel in your car")
}

//Task 05 
/* Run this script, & check whether alert message would be displayed or not. Record the outputs.*/

//a. //alert message is displayed.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//b.  //alert message is NOT displayed.

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//c.   //Condition 2 and 4 are TRUE

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//d.  //The message is Displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//e.  // True is executed 

if (true){
alert("True");
}
if (false){    //This will not execute beacause the condition is false
alert("False");
}

//Task 06

let marks_1 = +prompt("Enter first subject marks");
let marks_2 = +prompt("Enter second subject marks");
let marks_3 = +prompt("Enter third subject marks");
let totalMarks = +prompt("Enter total marks of all subjects");
let marksObtained = marks_1 + marks_2 + marks_3;
let percentage = (marksObtained * 100) / totalMarks;

document.write("<h1>" + "Marks Sheet" + "</h1>");

if (percentage >= 80 && percentage <=100) {
    document.write("<p>" + "Total Marks : " + totalMarks + "</p>" + "<p>" + "Marks Obtained : " + marksObtained + "</p>" + "<p>" + "Percentage : " + Math.round(percentage) + "%" + "</p>" + "<p>" + "Grade : " + "A-one" + "</p>" + "<p>" + "Remarks : " + "Excellent")
} else if (percentage >= 70 && percentage <=79) {
    document.write("<p>" + "Total Marks : " + totalMarks + "</p>" + "<p>" + "Marks Obtained : " + marksObtained + "</p>" + "<p>" + "Percentage : " + Math.round(percentage) + "%" + "</p>" + "<p>" + "Grade : " + "A" + "</p>" + "<p>" + "Remarks : " + "Good")
} else if (percentage >= 60 && percentage <=69) {
    document.write("<p>" + "Total Marks : " + totalMarks + "</p>" + "<p>" + "Marks Obtained : " + marksObtained + "</p>" + "<p>" + "Percentage : " + Math.round(percentage) + "%" + "</p>" + "<p>" + "Grade : " + "B" + "</p>" + "<p>" + "Remarks : " + "You need to improve")
} else {
    document.write("<p>" + "Total Marks : " + totalMarks + "</p>" + "<p>" + "Marks Obtained : " + marksObtained + "</p>" + "<p>" + "Percentage : " + Math.round(percentage) + "%" + "</p>" + "<p>" + "Grade : " + "Fail" + "</p>" + "<p>" + "Remarks : " + "Sorry")
}

//Task 07

/* Guess game:
Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct answer”.
b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. */

let number = 5;
let userInput = +prompt("Guess the secret number ranging from 1 - 10");

if (userInput === number) {
    alert("Bingo! Correct answer")
} 
else if (userInput === (number - 1)) {
    alert("Close enough to the correct answer")
} else {
    alert("Sorry, Try again")
}

//Task 08

/* Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
is divisible by 3.*/

let userNumber = +prompt("Enter a Number");
let modulus = userNumber % 3;

if (modulus === 0) {
    alert("Number is divisible by 3")
} else {
    alert("Number is NOT divisible by 3")
}

//Task 09 
/* Write a program that checks whether the given input is an even number or an odd number. */

let checkNum = +prompt("Enter a number to check whether it's EVEN or ODD:")

let checkModulus = checkNum % 2;

if (checkModulus === 0) {
    alert("Number is Even")
} else {
    alert("Number is Odd")
}

//Task 10
/* Write a program that takes temperature as input and shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */

let temperature = prompt("Enter a temperature");
if (temperature > 40) {
    alert("It is too hot outside.")
} else if (temperature > 30 && temperature <= 40) {
    alert("The Weather today is Normal.")
} else if (temperature > 20 && temperature <= 30) {
    alert("Today’s Weather is cool.")
} else if (temperature > 10 && temperature <= 20) {
    alert("OMG! Today’s weather is so Cool.")
} else {
    alert("Enter a Valid Temperature")
}

//Task 11
/* Write a program to create a calculator for +,-,*,/ & % using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */

let num_01 = parseInt(prompt("Enter first number"));
let num_02 = parseInt(prompt("Enter second number"));
let operator = prompt("Enter Operation Symbol (+, -, *, /, %)");
let operation;

if (operator === "+") {
    operation = num_01 + num_02;
    alert(num_01 + " + " + num_02 + " = " + operation)
} 
else if (operator === "-") {
    operation = num_01 - num_02;
    alert(num_01 + " - " + num_02 + " = " + operation)
} 
else if (operator === "*") {
    operation = num_01 * num_02;
    alert(num_01 + " * " + num_02 + " = " + operation)
} 
else if (operator === "/") {
    operation = num_01 / num_02;
    alert(num_01 + " / " + num_02 + " = " + operation)
} 
else {
    operation = num_01 % num_02
    alert(num_01 + " % " + num_02 + " = " + operation)
}