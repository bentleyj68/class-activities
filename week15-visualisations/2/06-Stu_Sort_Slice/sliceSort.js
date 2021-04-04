// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];
numArray2 = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];
numArray3 = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
numArray.sort(function compareFunction(firstNum, secondNum) {
    // resulting order is (3, 2, 1)
    return secondNum - firstNum;
  });

// Print the results to the console
console.log(numArray);

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
numArray2.sort((firstNum, secondNum) => firstNum - secondNum);
console.log(numArray2);

// Reverse the array order
var reversedArray = numArray3.reverse()
console.log(reversedArray);

// Sort the array in ascending order using an arrow function
reversedArray.sort((firstNum, secondNum) => secondNum - firstNum);
console.log(reversedArray);

// Slice the first five elements of the sortedAscending array, assign to a variable
var right = reversedArray.slice(0, 5);
console.log(right);
