document.write("")

//for loop method

let string = "superman";
let newString = "";
for(let i = string.length-1; i >= 0; i--) {
    newString += string[i];
}
console.log(newString);

//spilt method

let string1 = "superman";
let spiltString = string.split("");
let reverseString = spiltString.reverse();
console.log(reverseString);

//joint method

let string2 = "superman";
let spiltString1 = string2.split("");
let reverseString1 = spiltString1.reverse();
let joinString1 = reverseString1.join("");
console.log(joinString1);

// string palindrome

function palindrome(data) {
  let start = 0;
  let end = data.length - 1;
  let result = true;
  while (end > start){

    if(data[start]!=data[end])
    {
        result = false;
    }
    start++;
    end--;
  }
  return result;
}

let stringName = "superman";
console.log(palindrome(stringName))



// function checkDataType(input) {
//     const dataType = typeof input;
//     alert('Type: ' + dataType);
// }

// // Prompt the user for input
// const userInput = prompt('Enter a value:');

// // Check the data type of the input
// checkDataType(userInput);


//for input

let input = prompt('Enter a value:');
let number = Number(input);
if (isNaN(number)) {
    alert('Not a number');
} else {
    alert('Number:'+ number);
}

//for array consistent

// 


function isArrayConsistent(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            return false;
        }
    }
    return true;
}

// Example usage:
const inconsistentArray = [1, 2, 3, 4, 5, 6, 7];
const consistentArray = [1, 2, 3, 4, 5, 6];

console.log('Is Inconsistent Array:', !isArrayConsistent(inconsistentArray)); // Output: true
console.log('Is Consistent Array:', isArrayConsistent(consistentArray)); // Output: true