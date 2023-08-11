// Basic Foundation I
// Objectives
/// Get comfortable with basic for loops, if/else statements, and functions.
// Get comfortable building basic algorithms in preparation for the Python track
// Please work on the following challenges and upload your work in a single file.

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function function_1() {
  let res = [];
  for (let i = 1; i <= 255; i++) {
    res.push(i);
  }
  return res;
}
// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function function_2() {
  let res = [];
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      res.push(i);
    }
  }
  res.forEach((element) => {
    sum = sum + element;
  });
  return sum;
}
// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function function_3() {
  let res = [];
  let sum = 0;
  for (let i = 1; i <= 5000; i++) {
    if (i % 2 != 0) {
      res.push(i);
    }
  }
  res.forEach((element) => {
    sum = sum + element;
  });
  return sum;
}
// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function function_4(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}
// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function function_5(arr) {
  return Math.max(...arr);
}
// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function function_6(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function function_7() {
  let res = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      res.push(i);
    }
  }
  return res;
}
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function function_8(Y, arr) {
  let count = 0;
  arr.forEach((element) => {
    if (element > Y) {
      count++;
    }
  });
  return count;
}
// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function function_9(arr) {
  let res = [];
  arr.forEach((element) => {
    res.push(element * element);
  });
  return res;
}
// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function function_10(arr) {
  let res = [];
  arr.forEach((element) => {
    if (Math.sign(element) == "-1") {
      res.push(0);
    } else {
      res.push(element);
    }
  });
  return res;
}
// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function function_11(arr) {
  return [
    function_5(arr),
    Math.min(...arr),
    arr.reduce((a, b) => a + b) / arr.length,
  ];
}
// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function function_12(arr) {
  let start = arr[0];
  let end = arr[arr.length - 1];
  arr[0] = end;
  arr[arr.length - 1] = start;
  return arr;
}
// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function function_13(arr) {
  let res = [];
  arr.forEach((element) => {
    if (Math.sign(element) == "-1") {
      res.push("Dojo");
    } else {
      res.push(element);
    }
  });
  return res;
}
