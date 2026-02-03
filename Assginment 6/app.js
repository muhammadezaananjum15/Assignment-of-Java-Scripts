function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); 
console.log(add(10, 5)); 
// ==================================
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 4));  // 8
console.log(multiply(5, 3));  // 15
// =====================================
function greet(name) {
  return `Assalamwalaikum ${name}`;
}
console.log(greet("Ali"));  
console.log(greet("Ahmed"));  
// ===============================
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(8)); 
console.log(isEven(15)); 
// ============================================
function countItems(arr) {
  return arr.length;
}
console.log(countItems([1, 2, 3]));     
console.log(countItems(["a", "b"]));    
// ==================================================
function bigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(bigger(15, 67));   
console.log(bigger(420, 67));   
