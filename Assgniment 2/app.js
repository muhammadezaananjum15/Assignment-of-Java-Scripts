// //  ------------------------------------------------------------------------
// -----------------------------------------------
var num = 75;
console.log("Number:", num);

if (num > 50) {
  console.log("Appropriate.");
} else {
  console.log("Not Appropriate.");
}

// -----------------------------------------------
var age = 20;
console.log("Age:", age);

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// -----------------------------------------------
var passwordLength = 10;
console.log("Password Length:", passwordLength);

if (passwordLength >= 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

// -----------------------------------------------
var marks = 65;
console.log("Marks:", marks);

if (marks >= 50) {
  console.log("You are Pass");
} else {
  console.log("You are Fail");
}

// -----------------------------------------------
var temperature = 32;
console.log("Temperature:", temperature);

if (temperature >= 30) {
  console.log("It's Hot");
} else {
  console.log("Weather is Normal");
}

// -----------------------------------------------
var gradeMarks = 85;
console.log("Marks for Grade:", gradeMarks);

if (gradeMarks < 0 || gradeMarks > 100) {
  console.log("Invalid Marks");
} else if (gradeMarks >= 90) {
  console.log("Grade A+");
} else if (gradeMarks >= 80) {
  console.log("Grade B");
} else if (gradeMarks >= 70) {
  console.log("Grade C");
} else if (gradeMarks >= 60) {
  console.log("Grade D");
} else {
  console.log("Fail");
}
