/* 
==================================================
            PRACTICE: JavaScript Loops
==================================================

Mastering loops is crucial for efficient programming. Below are exercises for 
each loop type — `for`, `while`, `do...while`, and advanced loop techniques.
*/

console.log("===============================");
console.log("🚀 Let's Practice Loops!");
console.log("===============================");


/**
 * 💡 Challenge 1: Sum of First 10 Natural Numbers
 * Instructions: Write a `for` loop that calculates and prints the sum of the 
 * first 10 natural numbers (1 + 2 + 3 + ... + 10).
 */

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`Sum of first 10 natural numbers is: ${sum}`);


/**
 * 💡 Challenge 2: Reverse Counting
 * Instructions: Write a `while` loop to print numbers from 10 down to 1.
 */

let num = 10;
console.log("Reverse Counting:");
while (num > 0) {
  console.log(num);
  num--;
}


/**
 * 💡 Challenge 3: Multiplication Table
 * Instructions: Create a function `printMultiplicationTable(n)` that prints the 
 * multiplication table for a given number `n`, up to 10.
 */

function printMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
printMultiplicationTable(5);


/**
 * 💡 Challenge 4: Find the First Odd Number Greater Than 20
 * Instructions: Use a `do...while` loop to find the first odd number greater than 20.
 */

let oddNum = 21;
do {
  if (oddNum % 2 !== 0) {
    console.log(`First odd number greater than 20: ${oddNum}`);
    break;
  }
  oddNum++;
} while (true);


/**
 * 💡 Challenge 5: Break and Continue
 * Instructions: Write a loop that prints numbers from 1 to 10 but skips 5 and stops at 8.
 */

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}


/**
 * 💡 Challenge 6: Nested Loops — Print Patterns
 * Instructions: Write a nested `for` loop to print the following pattern:
 * Output:
 * *
 * **
 * ***
 * ****
 * *****
 */

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}


/**
 * 💡 Challenge 7: Sum of Odd Numbers Between 1 and 50
 * Instructions: Write a `for` loop to find the sum of all odd numbers between 1 and 50.
 */

let oddSum = 0;
for (let i = 1; i <= 50; i += 2) {
  oddSum += i;
}
console.log(`Sum of odd numbers between 1 and 50: ${oddSum}`);


/**
 * 💡 Advanced Challenge 8: FizzBuzz Problem
 * Instructions: Print numbers from 1 to 50. For multiples of 3, print "Fizz"; 
 * for multiples of 5, print "Buzz"; for multiples of both 3 and 5, print "FizzBuzz".
 */

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("===============================");
console.log("🎉 Congrats! You've completed the Loop Practice.");
console.log("===============================");
