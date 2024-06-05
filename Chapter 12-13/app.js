//Task 01:
/* Write a program that takes a character (number or string) in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).*/

let character = prompt("Enter a number or a letter");
let check = character.charCodeAt();
let numInput = Number(character);

if (check >= 65 && check <= 90) {
    alert("Character is Uppercase Letter")
} else if (check >= 97 && check <= 122) {
    alert("Character is LowerCase Letter")
} else if (Number.isInteger(numInput) == true) {
    alert("Character is Number")
} else {
    alert("It's a special character")
}

//Task 02:
/* Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.*/

let num_1 = +prompt("Enter Number 01");
let num_2 = +prompt("Enter Number 02");
let greaterNum = num_1 > num_2;
let smallerNum = num_1 < num_2;

if(greaterNum == true) {
    alert(num_1 + " is greater than " + num_2)
} else if (smallerNum == true) {
    alert(num_2 + " is greater than " + num_1)
} else if (num_1 === num_2) {
    alert(num_1 + " and " + num_2 + " are equal")
} else {
    alert("Please enter an integer")
}

//Task 03:
/* Write a program that takes input a number from user & state whether the number is positive, negative or zero.*/

const userNumber = parseInt(prompt("Enter a number: "));

if (userNumber > 0) {
    alert("The number is positive");
} else if (userNumber == 0) {
  alert("The number is zero");
} else {
     alert("The number is negative");
}

//Task 04:
/* Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise*/

const inputChar = prompt("Enter a Letter");

if (
    inputChar === 'a' || inputChar === 'A' ||
    inputChar === 'e' || inputChar === 'E' ||
    inputChar === 'i' || inputChar === 'I' ||
    inputChar === 'o' || inputChar === 'O' ||
    inputChar === 'u' || inputChar === 'U'
) {
    alert(true)
} else {
    alert(false)
}

//Task 05:
/* Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give message “ Please enter your password”
ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.*/

const correctPassword = "amiqa24301";
let userPassword = prompt("Enter your Password");
if (userPassword == "") {
    alert("Please enter your Password")
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password")
} else {
    alert("Incorrect password")
}

//Task 06:
/* This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/ 

var greeting;
var hour = 19;
if (hour < 18) {
    greeting = "Good Day"
} else {                        //Fixed it with a {
    greeting = "Good Evening"
} 

//Task 07
/*Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements */

let time = +prompt("Enter the time in 24 hours clock format like 1800");

if (time >= 0o0 && time < 1200) {
    alert("Good Morning")
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
}
else if (time >= 2100 && time <= 2359) {
    alert("Good Night")
}