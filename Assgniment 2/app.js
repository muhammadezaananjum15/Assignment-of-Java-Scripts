// -----------------------------------------------
var num = prompt("Enter a number:");
if (num > 50){
  console.log('Appropriate.');
}
// --------------------------------------------------
var age = +prompt("Enter your age:");
if (age >= 18){
  console.log('You are eligible to vote.');
} else {
  console.log('You are not eligible to vote.');
}
// --------------------------------------------------
var passwordLength = +prompt("Enter Your Password Here")
if (passwordLength >=8){
  console.log("Strong Password")
}
else{
  console.log("Weak Password")
}
// --------------------------------------------------
var marks = +prompt("Enter Your Marks Here !")
if (marks >= 50) {
  console.log('Your are Pass');
} else {
  console.log('You are Fail');
}
// --------------------------------------------------
var temperature = +prompt("Enter Temperature Here !");
if (temperature >= 30){
  console.log("It's Hot ")
}
else{
  console.log("Wether is Normal")
}
// --------------------------------------------------
 var marks = +prompt ("Enter your Marks to Check your Grade Here")
 if (marks < 0 || marks > 100) {
   console.log('Invalid Marks');
 } else if (marks >= 90) {
   console.log('Grade A+');
 } else if (marks >= 80) {
   console.log('Grade B');
 } else if (marks >= 70) {
   console.log('Grade C');
 } else if (marks >= 60) {
   console.log('Grade D');
 } 
 else {
  console.log("Fail")
 }
//  ------------------------------------------------------------------------