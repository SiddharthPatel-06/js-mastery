# **04-Conditionals in JavaScript**

Conditionals in JavaScript are used to perform different actions based on different conditions. They help you make decisions in your program.

## **1. if Statement**

The `if` statement is used to execute a block of code only if a specified condition is `true`.

### **Syntax:**

```js
if (condition) {
  // Code to run if condition is true
}
```

### **Example:**

```js
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
}
```

**Explanation:**  
The code inside the `if` block runs only if `age` is 18 or more.

---

## **2. if-else Statement**

The `if-else` statement is used when you want to execute one block of code if the condition is true, and another block if the condition is false.

### **Syntax:**

```js
if (condition) {
  // Code to run if condition is true
} else {
  // Code to run if condition is false
}
```

### **Example:**

```js
let age = 16;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

**Explanation:**  
If `age` is 18 or more, the first block runs, otherwise the second block runs.

---

## **3. if-else if-else Statement**

The `if-else if-else` statement is used when you have multiple conditions to check.

### **Syntax:**

```js
if (condition1) {
  // Code to run if condition1 is true
} else if (condition2) {
  // Code to run if condition2 is true
} else {
  // Code to run if no condition is true
}
```

### **Example:**

```js
let age = 20;
if (age < 18) {
  console.log("You are a minor");
} else if (age < 21) {
  console.log("You are an adult, but not yet 21");
} else {
  console.log("You are over 21");
}
```

**Explanation:**  
Here, JavaScript checks the conditions one by one. If none of the conditions are true, the code inside the `else` block will run.

---

## **4. switch Statement**

The `switch` statement is used to perform different actions based on different conditions. It is a cleaner alternative to multiple `if-else if` conditions.

### **Syntax:**

```js
switch (expression) {
  case value1:
    // Code to run if expression === value1
    break;
  case value2:
    // Code to run if expression === value2
    break;
  default:
  // Code to run if none of the cases match
}
```

### **Example:**

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

**Explanation:**  
The `switch` statement checks the value of `day` and matches it with the cases. If it matches `3`, it prints "Wednesday". If no match is found, the `default` block is executed.

---

## **5. Ternary Operator**

The ternary operator is a shorthand for `if-else`. It evaluates a condition and returns one of two values based on whether the condition is `true` or `false`.

### **Syntax:**

```js
condition ? valueIfTrue : valueIfFalse;
```

### **Example:**

```js
let age = 17;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);
```

**Explanation:**  
If `age` is 18 or more, the message will be "You are an adult". Otherwise, it will be "You are a minor".

---

## **6. Logical Operators in Conditionals**

### **AND (`&&`)**

The `&&` operator returns `true` if **both** conditions are `true`.

### **Syntax:**

```js
if (condition1 && condition2) {
  // Code to run if both conditions are true
}
```

### **Example:**

```js
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
  console.log("You can enter the club");
}
```

**Explanation:**  
Both conditions must be true for the code inside the `if` block to execute.

### **OR (`||`)**

The `||` operator returns `true` if **at least one** condition is `true`.

### **Syntax:**

```js
if (condition1 || condition2) {
  // Code to run if at least one condition is true
}
```

### **Example:**

```js
let age = 15;
let hasTicket = true;
if (age >= 18 || hasTicket) {
  console.log("You can enter");
}
```

**Explanation:**  
The `if` statement checks if either `age` is 18 or more, or the person has a ticket. If either is true, the code inside will run.

### **NOT (`!`)**

The `!` operator inverts a boolean value. It changes `true` to `false`, and `false` to `true`.

### **Syntax:**

```js
if (!condition) {
  // Code to run if condition is false
}
```

### **Example:**

```js
let isWeekend = false;
if (!isWeekend) {
  console.log("It's a working day");
}
```

**Explanation:**  
The `!` operator inverts `isWeekend` from `false` to `true`. Since `isWeekend` is `false`, the code inside the `if` block will run.

---

## **7. Conditional (Optional) Chaining**

The optional chaining operator (`?.`) allows you to access deeply nested properties of an object without causing an error if a reference is `null` or `undefined`.

### **Example:**

```js
let user = {
  name: "John",
  address: {
    city: "New York",
  },
};

console.log(user?.address?.city); // New York
console.log(user?.contact?.phone); // undefined
```

**Explanation:**  
The `?.` operator ensures that if `address` or `contact` is `undefined` or `null`, it doesn’t throw an error.
