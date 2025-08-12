## **05-Loops in JavaScript**

### **1. Introduction**
Loops allow us to execute a block of code multiple times based on a specified condition. They help avoid repetitive code and improve code efficiency.

---

### **2. Types of Loops**

#### **2.1 `for` Loop**
Used when the number of iterations is known in advance.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration: ${i}`);
}
```

#### **Explanation:**
1. **Initialization:** `let i = 1` sets the starting point.
2. **Condition:** `i <= 5` is evaluated before each iteration.
3. **Increment:** `i++` updates the counter after each iteration.

---

#### **2.2 `while` Loop**
Used when the number of iterations is unknown but depends on a condition.

**Syntax:**
```javascript
while (condition) {
  // Code to execute
}
```

**Example:**
```javascript
let count = 1;
while (count <= 3) {
  console.log(`Count: ${count}`);
  count++;
}
```

---

#### **2.3 `do...while` Loop**
Executes the code at least once, regardless of the condition.

**Syntax:**
```javascript
do {
  // Code to execute
} while (condition);
```

**Example:**
```javascript
let num = 5;
do {
  console.log(`Number is: ${num}`);
  num++;
} while (num <= 7);
```

---

#### **2.4 `for...of` Loop**
Iterates over iterable objects like arrays.

**Example:**
```javascript
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

#### **2.5 `for...in` Loop**
Iterates over object properties.

**Example:**
```javascript
const person = { name: "Siddh", age: 25, city: "Bhopal" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

---

### **3. Loop Control Statements**

#### **3.1 `break` Statement**
Exits the loop immediately.

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 1, 2
```

#### **3.2 `continue` Statement**
Skips the current iteration and continues with the next.

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Output: 1, 2, 4, 5
```

---

### **4. Infinite Loops**
Be cautious while using loops, as a condition that always evaluates to true can cause infinite loops.

**Example (Avoid):**
```javascript
while (true) {
  console.log("This will run forever!");
}
```

---

### **Practice Questions for Loops**

#### **Basic-Level Questions**
1. Print numbers from 1 to 10 using a `for` loop.
2. Write a program to calculate the sum of numbers from 1 to 100 using a loop.
3. Print all even numbers between 1 and 20 using a `while` loop.

#### **Intermediate-Level Questions**
4. Create a program to reverse an array using a loop.  
   **Input:** `[1, 2, 3, 4, 5]`  
   **Output:** `[5, 4, 3, 2, 1]`  

5. Write a function to count the number of vowels in a string using a `for` loop.  
   **Input:** `"hello world"`  
   **Output:** `3`

6. Write a program that stops the loop when a specific value is found (`break` statement).  
   **Input Array:** `[3, 7, 9, 2, 8]`, stop at `9`.

#### **Advanced-Level Questions**
7. Create a program to generate the Fibonacci series up to a given number using a loop.
   
8. Write a function to check whether a number is prime using a loop.  
   **Input:** `7`  
   **Output:** `"7 is prime"`

9. Write a nested loop to display a multiplication table for numbers 1 to 5.

10. Build a function that finds the factorial of a number using a `while` loop.

---

### **Bonus Challenge**
**FizzBuzz Problem:**  
Write a program that prints numbers from 1 to 100.  
- For multiples of 3, print `"Fizz"` instead of the number.  
- For multiples of 5, print `"Buzz"`.  
- For multiples of both 3 and 5, print `"FizzBuzz"`.  
   
**Expected Output:**  
```
1  
2  
Fizz  
4  
Buzz  
Fizz  
...  
FizzBuzz
```

---
