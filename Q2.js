// Q2. Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Note: Do not use any built-in library function such as sqrt.

function isPerfectSquare(input) {
  // Square numbers are non-negative
  if (input < 0) return false;

  let count = 0;
  while (true) {
    const squared = count * count;
    if (input === squared) {
      return true;
    } else if (input < squared) {
      return false;
    }
    count++;
  }
}

// Test #1: Number (perfect square)

console.log(isPerfectSquare(16));

// Test #2: Number (Non-perfect square)

console.log(isPerfectSquare(14));

// Test #3: Number (Negative number)

console.log(isPerfectSquare(-1));