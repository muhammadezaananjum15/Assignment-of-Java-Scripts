// Given Data in Which i perform the map and filter function :)
let students = [
  { id: 1, name: 'Ali', age: 18, marks: 85, isPresent: true },
  { id: 2, name: 'Ahmad', age: 20, marks: 45, isPresent: false },
  { id: 3, name: 'Zubair', age: 19, marks: 72, isPresent: true },
  { id: 4, name: 'Sara', age: 21, marks: 95, isPresent: true },
  { id: 5, name: 'Hina', age: 17, marks: 55, isPresent: false },
];
let names = students.map((students) => students.name);
console.log(names);
let marks = students.map((students) => students.marks);
console.log(marks);
let results = students.map((students) => {
  return {
    id: students.id,
    name: students.name,
    marks: students.marks,
    result: students.marks >= 50 ? "Pass" : "Fail",
  };
});
console.log(results);
let toUpperCase = students.map((students) => students.name.toUpperCase());
console.log(toUpperCase);

let presentStudents = students.filter((students) => students.isPresent === true);
console.log(presentStudents);
let passedStudents = students.filter((students) => students.marks >= 50);
console.log(passedStudents);
let failedStudents = students.filter((students) => students.marks < 50);
console.log(failedStudents);
let olderStudents = students.filter((students) => students.marks > 18);
console.log(olderStudents);
let passedStudentsnames = students
  .map((students) => students.name)
  .filter((students) => students.marks >= 50);
console.log(passedStudentsnames);
let absentstudents = students
  .filter((students) => students.isPresent === false)
  .map((students) => students.name.toUpperCase());
console.log(absentstudents);
let prsentstudents = students
  .filter((students) => students.isPresent === true)
  .map((students) => students.id);
console.log(prsentstudents);

// map() is used to transform every element in an array and always returns a new  or copy array of the same length :)
// filter() is used to extract elements that meet a condition and returns a new or copy array that may be shorter :)

// Because map() is designed to loop through every item and apply a transformation to each one
// so instead of removing items it always produces a new or copy array with the same number of elements just modified :)
