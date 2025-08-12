# **Interview Questions and Answers - Conditionals**

### **1. What is the difference between `==` and `===` in JavaScript?**

**Answer:**
- `==` is the **loose equality** operator. It compares two values for equality after converting them to a common type. 
  - For example, `'5' == 5` will return `true` because JavaScript converts `'5'` to `5` before comparing.
  
- `===` is the **strict equality** operator. It compares both the **value** and the **type** without any type conversion.
  - For example, `'5' === 5` will return `false` because one is a string and the other is a number.

### **2. How do you check if a number is even or odd in JavaScript?**

**Answer:**
You can check if a number is even or odd by using the modulus operator `%`. 
- If a number divided by 2 leaves no remainder, it's **even**; otherwise, it's **odd**.

Example:
```js
let num = 4;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
```

### **3. What are the different types of conditional statements in JavaScript?**

**Answer:**
JavaScript has three main types of conditional statements:
1. **if**: Executes a block of code if a specified condition is true.
   ```js
   if (condition) { ... }
   ```
   
2. **else**: Executes a block of code if the condition in the `if` statement is false.
   ```js
   if (condition) { ... } else { ... }
   ```
   
3. **else if**: Specifies a new condition to check if the `if` condition is false.
   ```js
   if (condition1) { ... } else if (condition2) { ... } else { ... }
   ```
   
4. **switch**: A more efficient way to compare multiple values to one expression.
   ```js
   switch (expression) {
       case value1: ... break;
       case value2: ... break;
       default: ... break;
   }
   ```

### **4. What is the `ternary operator` in JavaScript?**

**Answer:**
The ternary operator is a shorthand for the `if-else` statement. It is written as:

```js
condition ? expr1 : expr2;
```
- If the `condition` is true, it returns `expr1`.
- If the `condition` is false, it returns `expr2`.

Example:
```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes
```

### **5. What is the `switch` statement used for?**

**Answer:**
The `switch` statement is used to evaluate a single expression and match its value against multiple `case` options. It's useful when you have multiple conditions for the same variable.

Example:
```js
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

### **6. What is the output of the following code?**
```js
let a = 10, b = 20;
if (a == 10 && b == 20) {
    console.log("Both conditions are true");
}
```

**Answer:**
The output will be:
```
Both conditions are true
```
Explanation: 
- Both conditions `a == 10` and `b == 20` are true, so the `if` block is executed.

### **7. Can a `switch` statement have multiple `case` values for the same output?**

**Answer:**
Yes, a `switch` statement can have multiple `case` values that lead to the same output. This is useful when you want to handle several cases in the same way.

Example:
```js
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
    case "cherry":
        console.log("It's a fruit.");
        break;
    default:
        console.log("Not a fruit.");
}
```
This will output: `"It's a fruit."` for any of the listed fruits.

### **8. How do you check if a number is positive, negative, or zero in JavaScript?**

**Answer:**
You can use `if-else` or `switch` to check whether a number is positive, negative, or zero.

Example:
```js
let num = -5;
if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}
```

### **9. What is a "truthy" and "falsy" value in JavaScript?**

**Answer:**
- **Truthy values**: All values are truthy except for those that are **falsy**.
- **Falsy values**: Values that are considered false when evaluated in a Boolean context. These include:
  - `false`
  - `0`
  - `""` (empty string)
  - `null`
  - `undefined`
  - `NaN`

Example:
```js
if ("Hello") { console.log("Truthy"); } // Outputs "Truthy"
if (0) { console.log("Falsy"); } // No output
```

### **10. How can you use an `if-else` statement to determine if a number is divisible by 3 and 5?**

**Answer:**
You can use the modulus operator `%` to check if the number is divisible by both 3 and 5.

Example:
```js
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}
```
