// Basic Foundation II
// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function function_14(arr) {
  let res = [];
  arr.forEach((element) => {
    if (Math.sign(element) != "-1") {
      res.push("big");
    } else {
      res.push(element);
    }
  });
  return res;
}
// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function function_15(arr) {
  console.log(Math.min(...arr));
  return Math.max(...arr);
}
// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function function_16(arr) {
  let firstOdd;
  if (arr.length > 3) {
    console.log(arr[arr.length - 2]);
  } else {
    console.log();
  }
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Math.sign(element) == "-1") {
      firstOdd = element;
      i = arr.length;
    }
  }
  return firstOdd;
}

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function function_17(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + arr[i]);
  }
  return newArr;
}
// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function function_18(arr) {
  let posCount = 0;
  arr.forEach((element) => {
    if (Math.sign(element) != "-1") {
      posCount++;
    }
  });
  arr[arr.length - 1] = posCount;
  return arr;
}
// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function function_19(arr) {
  let posCount = 0;
  let negCount = 0;
  arr.forEach((element) => {
    if (Math.sign(element) != "-1") {
      posCount++;
    } else {
      negCount++;
    }
    if (posCount > 2) {
      console.log("Even more so!");
      posCount = 0;
    }
    if (negCount > 2) {
      console.log("That's odd!");
      negCount = 0;
    }
  });
}
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function function_20(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      arr[i]++;
    }
  }
  arr.forEach((element) => {
    console.log(element);
  });
  return arr;
}
// Previous Lengths - You are passed an array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function function_21(arr) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i != 0) {
      newArr[i] = arr[i - 1].length;
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
}
// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function function_22(arr) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element + 7);
  });
  return newArr;
}
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function function_23(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--)
    [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}
// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function function_24(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.abs(arr[i]) * -1;
  }
  return arr;
}
// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function function_25(arr) {
  let foodCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      foodCount++;
    }
  }
  if (foodCount < 1) {
    console.log("I'm hungry");
  }
}
// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function function_26(arr) {
  let left1 = arr[0];
  let left3 = arr[2];
  iterateLeft = [
    [0, arr.length - 1, arr.length],
    [2, arr.length - 3, arr.length - 2],
  ];
  iterateLeft.forEach((element) => {
    arr.copyWithin(element[0], element[1], element[2]);
  });
  arr[arr.length - 1] = left1;
  arr[arr.length - 3] = left3;
  return arr;
}
// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
function function_27(arr, num) {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element * num);
  });
  return newArr;
}
