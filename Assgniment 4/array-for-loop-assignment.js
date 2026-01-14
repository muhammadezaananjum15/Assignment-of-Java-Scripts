var numbers = [10, 20, 30, 40, 50];
for (var i = 0; i < numbers.length; i++) {
  console.log('Element at index ' + i + ': ' + numbers[i]);
}
var colors = ['red', 'blue', 'green', 'yellow', 'golden', 'purple', 'pink'];

for (var i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

var marks = [45, 50, 60, 70, 80];
var addOns = 0;
for (var i = 0; i < marks.length; i++) {
  var addOns = addOns + marks[i];
}
console.log('Sum of Array Numbers', addOns);
var fruits = ['apple', 'banana', 'mango', 'orange'];
var count = 0;

for (var i = 0; i < fruits.length; i++) {
  count++;
}

console.log('Count Total Elements', count);
var nums = [45, 22, 89, 14, 77];
var largest = 0;

for (var i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
  }
}

console.log('Largest Number', largest);

var num = [9, 3, 15, 1, 6];
var smallest = num[0];

for (var i = 0; i < num.length; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
}

console.log(smallest); 

var numb = [1, 2, 3, 4, 5, 6, 7, 8];
var evenCount = 0;

for (var i = 0; i < numb.length; i++) {
  if (numb[i] % 2 === 0) {
    evenCount++;
  }
}

console.log('Even numbers count:', evenCount);

var numOf = [11, 22, 33, 44, 55];

for (var i = 0; i < numOf.length; i++) {
  if (numOf[i] % 2 !== 0) {
    console.log(numOf[i]);
  }
}

var numbThat = [2, 4, 6, 8];
var newArray = [];

for (var i = 0; i < numbThat.length; i++) {
  newArray[i] = numbThat[i] * 2;
}

console.log(newArray);

var arr = [10, 20, 30, 40, 50];
var found = false;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 30) {
    found = true;
  }
}

console.log('Found:', found);

var marksOf = [45, 67, 32, 90, 50, 41];
var pass = 0;
var fail = 0;

for (var i = 0; i < marksOf.length; i++) {
  if (marksOf[i] >= 50) {
    pass++;
  } else {
    fail++;
  }
}

console.log('Pass:', pass);
console.log('Fail:', fail);

var fruitOf = ['apple', 'banana', 'cherry'];

for (var i = 0; i < fruitOf.length; i++) {
  console.log('Index:', i, 'Value:', fruitOf[i]);
}

var scores = [80, 70, 90, 100];
var total = 0;

for (var i = 0; i < scores.length; i++) {
  var total = total + scores[i];
  var average = total / scores.length;
}

console.log('Average:', average);

var numInteger = [-5, 10, -3, 7, -1, 8];

for (var i = 0; i < numInteger.length; i++) {
  if (numInteger[i] > 0) {
    console.log(numInteger[i]);
  }
}

var original = [1, 2, 3, 4];
var copiedArray = [];

for (var i = 0; i < original.length; i++) {
  copiedArray[i] = original[i];
}

console.log(copiedArray);
