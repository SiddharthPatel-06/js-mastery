## **1. Introduction to Variables**

- A **variable** is a named container for storing data values.
- Variables in JavaScript act as placeholders, enabling dynamic and reusable code.

**Example**: Storing user information, product prices, or calculated results in variables.

### **Syntax to Declare Variables**

```javascript
let variableName = value; // Preferred modern syntax
```

---

## **2. Declaring Variables**

### **2.1 `var` (Legacy)**

- Function-scoped.
- Allows redeclaration.
- Hoisted but uninitialized.

```javascript
var a = 10; // Can be redeclared
var a = 20; // Works fine

if (true) {
  var b = 30; // Accessible outside the block
}
console.log(b); // 30
```

### **2.2 `let` (Modern)**

- Block-scoped.
- Cannot be redeclared in the same scope.
- Prevents accidental overwriting.

```javascript
let c = 10;
let c = 20; // Error: Identifier 'c' has already been declared
```

### **2.3 `const` (Modern)**

- Block-scoped.
- Must be initialized during declaration.
- Value cannot be reassigned (immutable references).

```javascript
const pi = 3.14;
pi = 3.15; // Error: Assignment to constant variable
```

---

## **3. Data Types in JavaScript**

### **3.1 Primitive Data Types**

1. **String**: Sequence of characters.

   ```javascript
   let name = "Alice"; // Double quotes
   let greeting = "Hello"; // Single quotes
   let template = `Hi, ${name}`; // Template literal
   ```

2. **Number**: Numeric values (integer or floating-point).

   ```javascript
   let age = 25;
   let price = 99.99;
   let infinityValue = Infinity; // Special numeric value
   ```

3. **Boolean**: Logical values (`true` or `false`).

   ```javascript
   let isLoggedIn = true;
   let hasAccess = false;
   ```

4. **Undefined**: Variable declared but not initialized.

   ```javascript
   let uninitialized;
   console.log(uninitialized); // undefined
   ```

5. **Null**: Represents an intentional absence of value.

   ```javascript
   let emptyValue = null;
   ```

6. **Symbol**: Unique and immutable identifier (used for object keys).

   ```javascript
   let id = Symbol("uniqueId");
   ```

7. **BigInt**: Numbers beyond the range of `Number`.
   ```javascript
   let bigNumber = 123456789012345678901234567890n; // 'n' at the end
   ```

### **3.2 Non-Primitive Data Types**

1. **Object**: Key-value pairs.

   ```javascript
   let user = {
     name: "Alice",
     age: 25,
   };
   ```

2. **Array**: List-like object.

   ```javascript
   let fruits = ["Apple", "Banana", "Cherry"];
   ```

3. **Function**: A reusable block of code.
   ```javascript
   function greet() {
     return "Hello, World!";
   }
   ```

---

## **4. Type Checking in JavaScript**

### **Using `typeof` Operator**

- To determine the data type of a variable.

```javascript
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (quirk in JS)
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
```

### **Array Type Checking**

- Use `Array.isArray()` to check for arrays.

```javascript
console.log(Array.isArray([])); // true
```

---

## **5. Dynamic Typing**

- JavaScript variables are dynamically typed, meaning their type can change at runtime.

```javascript
let value = 42; // Number
value = "Hello"; // Now a String
```

---

## **6. Type Conversion**

### **6.1 Implicit Type Coercion**

- JavaScript automatically converts types where necessary.

```javascript
console.log("5" + 2); // "52" (string concatenation)
console.log("5" - 2); // 3 (string converted to number)
```

### **6.2 Explicit Conversion**

- Use functions like `Number()`, `String()`, `Boolean()` for explicit conversions.

```javascript
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
```

---

## **7. Scope in JavaScript**

1. **Global Scope**: Accessible anywhere in the code.
2. **Local Scope**: Accessible only within a function.
3. **Block Scope**: Accessible only within `{}` when using `let` or `const`.

### **Example of Scope**

```javascript
function example() {
  let localVar = "I'm local";
  console.log(localVar); // Accessible here
}
// console.log(localVar); // Error: localVar is not defined
```

---

## **8. Variable Shadowing**

- Occurs when a variable in a nested scope has the same name as one in an outer scope.

```javascript
let x = 10;
{
  let x = 20; // Shadows the outer x
  console.log(x); // 20
}
console.log(x); // 10
```

---

## **9. Best Practices for Variables**

1. Use `const` by default; use `let` only when reassignment is needed.
2. Avoid `var` in modern JavaScript.
3. Use meaningful variable names.
4. Group related variables together.

**Bad Example**:

```javascript
let a = 42;
```

**Good Example**:

```javascript
let userAge = 42;
```

---

## **10. Common Errors**

1. **ReferenceError**

   - Accessing a variable before it is declared.

   ```javascript
   console.log(a); // ReferenceError
   let a = 5;
   ```

2. **TypeError**
   - Assigning a value to a constant variable.
   ```javascript
   const x = 10;
   x = 20; // TypeError
   ```

---

## **11. Useful Examples for Practice**

### **Declaring and Reassigning Variables**

```javascript
let a = 10;
a = 20; // Works
```

### **Combining Strings and Numbers**

```javascript
let result = "The result is: " + (5 + 5);
console.log(result); // The result is: 10
```

### **Scoping and Shadowing**

```javascript
let color = "red";
if (true) {
  let color = "blue"; // Shadows outer variable
  console.log(color); // blue
}
console.log(color); // red
```
