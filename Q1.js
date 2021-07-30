// Q1. Write a function that takes a string as input and returns the string reversed.

function reverseString(input) {
  return input.split('').reverse().join('');
}

// Test: hello

console.log(reverseString('hello'));