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

## 13. **What is the difference between `==` and `===` in JavaScript?**

### Answer:

- `==`: Checks for equality with type coercion.
- `===`: Checks for equality without type coercion (strict equality).

### Example:

```javascript
console.log(5 == "5"); // Output: true (type coercion)
console.log(5 === "5"); // Output: false (no type coercion)
```

## 14. **What is Hoisting in JavaScript?**

**Answer:**
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the creation phase.

- `var` is hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but remain in the Temporal Dead Zone (TDZ) until the declaration line.

**Example:**

```javascript
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

## 15. **What is the Temporal Dead Zone (TDZ)?**

**Answer:**
The TDZ is the time between entering a scope and the variable's declaration where the variable exists but is not accessible.

- Accessing it throws a ReferenceError..
- Only applies to let and const.

**Example:**

```javascript
{
  console.log(x); // ReferenceError
  let x = 5; // TDZ ends here
}
```

## 16. **Is function declaration hoisted?**

**Answer:**
Yes, function declarations are fully hoisted (both name and body), so they can be called before being defined.

**Example:**

```javascript
greet(); // Output: Hello

function greet() {
  console.log("Hello");
}
```

## 17. **Is function expression hoisted?**

**Answer:**

- With var: Name is hoisted but initialized as undefined (cannot call before assignment).

- With let/const: In TDZ until declaration.

**Example:**

```javascript
sayHi(); // TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi");
};
```

## 18. **Hoisting Order**

```javascript
console.log(a);
var a = 10;
function a() {}
console.log(a);
```

Expected Output:

```javascript
[Function: a]
10
```

Reason:

- Function declarations are hoisted before var declarations.
- First console.log(a) sees the function.
- Later var a = 10 overwrites it.

## 19. **const with objects**

```javascript
const obj = { a: 1 };
obj.a = 99;
console.log(obj);

obj = { b: 2 };
```

Expected Output:

```javascript
{
  a: 99;
}
TypeError;
```

Reason: Object properties can change, but you can’t reassign the const variable.

## 20. **let in for loop closure**

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

Expected Output:

```javascript
0;
1;
2;
```

Reason: let creates a new variable for each loop iteration.

## 21. **var in for loop closure**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

Expected Output:

```javascript
3;
3;
3;
```

Reason: var has one shared variable updated after loop ends.

## 22. **typeof null bug**

```javascript
console.log(typeof null);
```

Expected Output:

```javascript
object;
```

Reason: A historical JS bug — null is not an object, but typeof says so.

## 23. **Implicit type conversion in comparisons**

```javascript
console.log([] == 0);
console.log([] == []);
console.log([1] == 1);
```

Expected Output:

```javascript
true;
false;
true;
```

Reason:

- [] → "" → 0 when compared with number.
- Arrays are compared by reference, so [] == [] is false.
- [1] → "1" → 1.

## 24 **Default parameters with var**

```javascript
var a = 1;
function test(a = 2) {
  console.log(a);
}
test();
test(5);
```

Expected Output:

```javascript
2;
5;
```

Reason: Default param only applies when argument is undefined.

## **Why — step by step**

### 1. var a = 1;

- This makes a global variable a with value 1.

### 2. function test(a = 2) { ... }

- The function has its own variable named a (a parameter).
- This local a hides the global a inside the function. So inside the function, a means the parameter, not the global a.

### 3. test() — called with no argument.

- When you call with no value, the parameter a is undefined.
- The default a = 2 is used because the argument is undefined.
- So console.log(a) prints 2.

### 4. test(5) — called with the value 5.

- The parameter a is given 5, so default is not used.
- console.log(a) prints 5.

### 5. The global a (1) is not used inside the function because the function has its own a.
