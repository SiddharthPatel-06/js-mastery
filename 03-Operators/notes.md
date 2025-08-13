# 03 - Operators in JavaScript

## 1. Introduction to Operators

Operators are symbols or keywords that perform operations on operands (values or variables). They are used to manipulate and compare data.

---

## 2. Types of Operators

### 2.1 Arithmetic Operators

Used for mathematical calculations.

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `++` Increment
- `--` Decrement

#### Examples:

```javascript
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

---

### 2.2 Assignment Operators

Used to assign values to variables.

- `=` Assign
- `+=` Add and assign
- `-=` Subtract and assign
- `*=` Multiply and assign
- `/=` Divide and assign
- `%=` Modulus and assign

#### Examples:

```javascript
let x = 5;
x += 3; // x = x + 3
console.log(x); // 8
```

---

### 2.3 Comparison Operators

Used to compare two values and return a Boolean (`true` or `false`).

- `==` Equal (with type coercion)
- `===` Strict equal (no type coercion)
- `!=` Not equal (with type coercion)
- `!==` Strict not equal (no type coercion)
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

#### Examples:

```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

---

### 2.4 Logical Operators

Used to combine conditions.

- `&&` AND
- `||` OR
- `!` NOT

#### Examples:

```javascript
let a = true,
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```

---

### 2.5 Bitwise Operators

Operate at the binary level.

- `&` AND
- `|` OR
- `^` XOR
- `~` NOT
- `<<` Left shift
- `>>` Right shift
- `>>>` Unsigned right shift

#### Examples:

```javascript
console.log(5 & 1); // 1 (0101 & 0001)
```

---

### 2.6 String Operators

- `+` Concatenation: Combines strings.
- `+=` Append: Adds a string to an existing variable.

#### Examples:

```javascript
let greeting = "Hello, ";
greeting += "World!";
console.log(greeting); // Hello, World!
```

---

### 2.7 Conditional (Ternary) Operator

A shorthand for `if-else` statements:
`condition ? expr1 : expr2`.

#### Example:

```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult
```

---

### 2.8 Type Operators

- `typeof`: Returns the type of a variable.
- `instanceof`: Checks if an object is an instance of a class.

#### Examples:

```javascript
console.log(typeof "Hello"); // string
console.log([] instanceof Array); // true
```

---

### 2.9 Nullish Coalescing Operator (`??`)

Returns the right-hand operand if the left-hand operand is `null` or `undefined`.

#### Example:

```javascript
let name = null;
console.log(name ?? "Default Name"); // Default Name
```

---

### 2.10 Optional Chaining Operator (`?.`)

Safely access nested properties without risking errors.

#### Example:

```javascript
let user = {};
console.log(user?.address?.city); // undefined
```

### With out optional chaining:

```javascript
let user = {};
console.log(user.address.city); // TypeError: Cannot read properties of undefined
```

### With optional chaining:

```javascript
console.log(user?.address?.city); // undefined
```

### Another Example:

```javascript
let user = {
  name: "Siddh",
  preferences: {
    theme: "dark",
  },
};

console.log(user?.preferences?.theme); // "dark"
console.log(user?.settings?.notifications); // undefined
```

### Another Example:

```javascript
let config = {
  server: null,
};

console.log(config?.server?.host ?? "localhost"); // "localhost"
```

---

## 3. Operator Precedence

Operator precedence determines the order in which operators are evaluated.

- Example:

```javascript
console.log(3 + 4 * 5); // 23
```

`*` has higher precedence than `+`.

### Precedence Table (Common Operators):
| Precedence | Operator(s)            | Associativity  |
|------------|------------------------|----------------|
| 1          | `()`                   | Left-to-right  |
| 2          | `++`, `--`             | Right-to-left  |
| 3          | `*`, `/`, `%`          | Left-to-right  |
| 4          | `+`, `-`               | Left-to-right  |
| 5          | `<`, `>`, `<=`, `>=`   | Left-to-right  |
| 6          |`==`, `!=`, `===`, `!==`| Left-to-right  |
| 7          | `&&`                   | Left-to-right  |
| 8          | `||`                   | Left-to-right  |

---

## 4. Special Use Cases

### Short-circuit Evaluation

Logical operators like `&&` and `||` can "short-circuit" and stop evaluating as soon as the result is determined.

```javascript
let result = true || false; // Stops at true
console.log(result); // true
```
