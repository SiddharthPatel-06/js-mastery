# Interview Questions: Variables and Data Types

## 1. **What is a variable in JavaScript? How is it declared?**

### Answer:

A variable is a container for storing data values. In JavaScript, variables can be declared using `var`, `let`, or `const`.

### Examples:

```javascript
var x = 10; // Function-scoped and allows redeclaration
let y = 20; // Block-scoped, no redeclaration in the same scope
const z = 30; // Block-scoped, cannot be reassigned
```

## 2. **What is the difference between `var`, `let`, and `const`?**

### Answer:

- `var`: Function-scoped, can be redeclared, and hoisted (initialized as `undefined`).
- `let`: Block-scoped, cannot be redeclared in the same scope, and hoisted (not initialized).
- `const`: Block-scoped, must be initialized during declaration, and cannot be reassigned.

### Example:

```javascript
var a = 5;
let b = 10;
const c = 15;

// Differences
{
  var a = 50; // Redeclared
  let b = 100; // Cannot redeclare
  // const c = 150; // Error: Cannot redeclare or reassign
}
```

## 3. **What are the different data types in JavaScript?**

### Answer:

JavaScript has two categories of data types:

- **Primitive Data Types**: `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`, and `BigInt`.
- **Non-Primitive Data Types**: `Object` (includes Arrays and Functions).

### Example:

```javascript
let name = "Alice"; // String
let age = 30; // Number
let isLoggedIn = true; // Boolean
let address; // Undefined
let emptyValue = null; // Null
let uniqueKey = Symbol(); // Symbol
let bigNumber = 123n; // BigInt

let user = { name: "Bob" }; // Object
let fruits = ["Apple", "Banana"]; // Array
function greet() {
  return "Hello!";
} // Function
```

## 4. **What is the difference between `undefined` and `null`?**

### Answer:

- `undefined`: A variable is declared but not initialized.
- `null`: Represents an explicitly empty or non-existent value.

### Example:

```javascript
let x; // undefined
let y = null; // null

console.log(x); // Output: undefined
console.log(y); // Output: null
```

## 5. **What is type coercion in JavaScript? Give an example.**

### Answer:

Type coercion is JavaScript's automatic conversion of one data type to another during operations.

### Example:

```javascript
console.log("5" + 2); // Output: "52" (String concatenation)
console.log("5" - 2); // Output: 3 (String converted to Number)
```

## 6. **How can you check the type of a variable in JavaScript?**

### Answer:

You can check the type of a variable using the `typeof` operator. For arrays, use `Array.isArray()`.

### Example:

```javascript
console.log(typeof "Hello"); // Output: string
console.log(typeof 42); // Output: number
console.log(Array.isArray([1, 2, 3])); // Output: true
```

## 7. **What is the difference between primitive and non-primitive data types?**

### Answer:

- **Primitive Data Types**: Stored directly in the variable; immutable.
- **Non-Primitive Data Types**: Stored as references to memory; mutable.

### Example:

```javascript
// Primitive
let x = 10;
let y = x;
y = 20;
console.log(x); // Output: 10 (unchanged)

// Non-Primitive
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); // Output: [1, 2, 3] (changed)
```

## 8. **What are template literals in JavaScript?**

### Answer:

Template literals allow embedded expressions and multi-line strings using backticks (`` ` ``).

### Example:

```javascript
let name = "Alice";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is Alice and I am 30 years old.
```

## 9. **What is dynamic typing in JavaScript?**

### Answer:

JavaScript is dynamically typed, meaning variables can hold values of different types at runtime.

### Example:

```javascript
let dynamic = 42; // Number
dynamic = "Now a string"; // String
console.log(dynamic); // Output: Now a string
```

## 10. **What is a BigInt in JavaScript, and when should you use it?**

### Answer:

`BigInt` is a primitive data type that represents integers larger than the `Number` type's maximum safe value (`2^53 - 1`). Use it for very large integers.

### Example:

```javascript
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber); // Output: 123456789012345678901234567890n
```

## 11. **What happens if you declare a variable without `var`, `let`, or `const`?**

### Answer:

If a variable is declared without `var`, `let`, or `const`, it becomes a global variable (if not in strict mode) and can lead to unintended behavior. In strict mode, it throws an error.

### Example:

```javascript
// Without strict mode
x = 10;
console.log(x); // Output: 10 (global variable)

// With strict mode
("use strict");
y = 20; // Error: y is not defined
```

## 12. **How can you perform explicit type conversion in JavaScript?**

### Answer:

You can use constructors like `Number()`, `String()`, or `Boolean()` for explicit conversion.

### Example:

```javascript
console.log(Number("123")); // Output: 123
console.log(String(456)); // Output: "456"
console.log(Boolean(0)); // Output: false
```

## 13. **Explain hoisting in JavaScript.**

### Answer:

Hoisting is JavaScript's default behavior of moving declarations to the top of their scope. Variables declared with `var` are hoisted and initialized as `undefined`. Variables declared with `let` and `const` are hoisted but not initialized.

### Example:

```javascript
console.log(a); // Output: undefined (hoisted)
var a = 5;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 10;
```

## 14. **What is the difference between `==` and `===` in JavaScript?**

### Answer:

- `==`: Checks for equality with type coercion.
- `===`: Checks for equality without type coercion (strict equality).

### Example:

```javascript
console.log(5 == "5"); // Output: true (type coercion)
console.log(5 === "5"); // Output: false (no type coercion)
```
