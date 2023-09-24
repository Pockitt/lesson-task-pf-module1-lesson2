// Question 1
var numberInt = 5;
var numberDec = 6.7;
console.log("Q1", numberInt, numberDec);


// Question 2
var workWeek= ("Monday-Tuesday-Wednesday-Thursday-Friday");
console.log("Q2", workWeek);


// Question 3
var addition = numberInt + numberDec;
console.log("Q2+", addition);

var subtraction = numberInt - numberDec;
console.log("Q2-", subtraction);

var multiplication = numberInt * numberDec;
console.log("Q3*", multiplication);

var division = numberInt / numberDec;
console.log("Q3/", division);


// Question 4
isInDanger = false;
console.log("Q4", isInDanger);


// Question 5
var taskString = "The frogs are angry.";
console.log("Q5", taskString.length);


// Question 6
var timeElapsed;
var totalPrice;
console.log("Q6", "timeElapsed", "totalPrice");


// Question 7
var number1 = "53";
var number2 = "44.6";
number1 = parseInt(number1); 
number2 = parseFloat(number2);
console.log("Q7", parseInt(number1), parseFloat(number2));


// Question 8
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

console.log("Q8", "typeof pet", typeof pet, ",", "typeof age", typeof age, ",", "typeof discountApplied", typeof discountApplied, ",", "typeof timeLeft", typeof timeLeft);


// Question 9
var heading ="Updating heading";
var header = document.querySelector("h1");

header.innerHTML = heading;

console.log("Q9", "header", header.innerHTML);


// Question 10
var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";