// Q5. Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

function add(a, b, debug = false) {
  if (debug) logValue(a, b);

  if (b === 0) {
    return a;
  }
  return add(a ^ b, (a & b) << 1, debug);
}

// Debug functions

function logValue(a, b) {
  console.log(`a: ${a} (${decToBin(a)})`);
  console.log(`b: ${b} (${decToBin(b)})`);
  console.log('----------');
}

function decToBin(dec) {
  let res = dec;
  return (res >>> 0).toString(2);
}

// Test: 31 + 1

console.log(add(31, 1, true));