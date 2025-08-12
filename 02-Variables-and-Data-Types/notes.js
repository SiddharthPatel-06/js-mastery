/* 
  📘 Welcome to Variables and Data Types!
  In this file, you'll learn about variables, their types, and how to use them effectively in JavaScript.
  Practice along with the examples and try out the challenges to deepen your understanding.
*/

/* --- 1. What are Variables? --- */
// Variables are containers for storing data values.
// You can think of variables as labeled boxes that hold data you can reuse or modify later.
let exampleVariable = "Hello, JavaScript!"; // String type
console.log(exampleVariable); // Output: Hello, JavaScript!

/* --- 2. Declaring Variables --- */
// There are three ways to declare variables in JavaScript: var, let, and const.

// Example using `var` (Legacy)
var x = 5; // Function-scoped
var x = 10; // Redeclaration allowed
console.log(x); // Output: 10

// Example using `let` (Modern)
let y = 20; // Block-scoped
// let y = 30; // Error: Cannot redeclare 'y' in the same scope
y = 25; // Reassignment allowed
console.log(y); // Output: 25

// Example using `const` (Modern)
const z = 100; // Block-scoped, must be initialized
// z = 200; // Error: Cannot reassign a constant
console.log(z); // Output: 100

/* --- 3. Data Types in JavaScript --- */
// JavaScript has two main categories of data types: Primitive and Non-Primitive

// 3.1 Primitive Data Types
// - String: Sequence of characters
let name = "Alice";
console.log(typeof name); // Output: string

// - Number: Numeric values (integer, float, special numbers)
let age = 30;
console.log(typeof age); // Output: number

// - Boolean: Logical values (true, false)
let isLoggedIn = true;
console.log(typeof isLoggedIn); // Output: boolean

// - Undefined: Declared but not initialized
let uninitialized;
console.log(typeof uninitialized); // Output: undefined

// - Null: Represents an empty or non-existent value
let emptyValue = null;
console.log(typeof emptyValue); // Output: object (quirk in JS)

// - Symbol: Unique identifier (used for object keys)
let uniqueKey = Symbol("key");
console.log(typeof uniqueKey); // Output: symbol

// - BigInt: For very large integers
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // Output: bigint

// 3.2 Non-Primitive Data Types
// - Object: Collection of key-value pairs
let user = { name: "Alice", age: 25 };
console.log(typeof user); // Output: object

// - Array: Ordered list of items
let fruits = ["Apple", "Banana", "Cherry"];
console.log(Array.isArray(fruits)); // Output: true

// - Function: Reusable block of code
function greet() {
  return "Hello!";
}
console.log(typeof greet); // Output: function

/* --- 4. Type Conversion and Coercion --- */
// JavaScript can convert data types implicitly or explicitly.

// Implicit Coercion
console.log("5" + 2); // Output: 52 (String concatenation)
console.log("5" - 2); // Output: 3 (String converted to Number)

// Explicit Conversion
console.log(Number("123")); // Output: 123
console.log(String(456)); // Output: "456"
console.log(Boolean(0)); // Output: false

/* --- 5. Practice Challenges --- */

// Challenge 1: Create a variable to store your name and age, then log a greeting message.
// Example:
// let name = "John";
// let age = 25;
// console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Challenge 2: Experiment with `var`, `let`, and `const` in a block of code.
// Observe their scoping behavior and try redeclaring them.

// Challenge 3: Create an object representing a book with properties like title, author, and year.
// Access and log each property using both dot notation and bracket notation.

// Challenge 4: Convert the string "123" into a number, and the number 456 into a string.
// Verify their new types using `typeof`.

// Challenge 5: Write a function that accepts two numbers as parameters, adds them,
// and returns the result. Test the function with different inputs.

/* --- Bonus Practice: Dynamic Typing --- */
// JavaScript allows variables to hold values of different types at different times.
let dynamicVariable = 42; // Number
console.log(dynamicVariable); // Output: 42

dynamicVariable = "Now I'm a string!";
console.log(dynamicVariable); // Output: Now I'm a string!

dynamicVariable = true; // Boolean
console.log(dynamicVariable); // Output: true

// Can you think of a scenario where dynamic typing might cause bugs? Try it out!

/* --- Key Takeaways --- */
// - Use `const` for values that won't change, and `let` for values that might.
// - Avoid `var` in modern JavaScript due to scoping issues.
// - Understand data types and how to check them using `typeof` and `Array.isArray()`.
// - Practice type conversion and experiment with JavaScript's dynamic typing.
