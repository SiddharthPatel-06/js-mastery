// 03-Operators in JavaScript

// 1. Arithmetic Operators
// These operators are used to perform basic arithmetic operations.

let addition = 5 + 10; // Addition: Adds two operands
let subtraction = 10 - 5; // Subtraction: Subtracts second operand from the first
let multiplication = 5 * 10; // Multiplication: Multiplies two operands
let division = 10 / 2; // Division: Divides first operand by second
let modulus = 10 % 3; // Modulus: Returns remainder of division
let exponentiation = 2 ** 3; // Exponentiation: Raises first operand to the power of second

// 2. Assignment Operators
// These operators assign values to variables.

let x = 10; // Basic Assignment
x += 5; // Addition Assignment: x = x + 5
x -= 2; // Subtraction Assignment: x = x - 2
x *= 3; // Multiplication Assignment: x = x * 3
x /= 2; // Division Assignment: x = x / 2
x %= 3; // Modulus Assignment: x = x % 3

// 3. Comparison Operators
// These operators compare two operands and return a boolean value.

let isEqual = 5 == "5"; // Equal to (without type checking)
let isStrictEqual = 5 === "5"; // Strict Equal to (with type checking)
let isNotEqual = 5 != "5"; // Not Equal to (without type checking)
let isStrictNotEqual = 5 !== "5"; // Strict Not Equal to (with type checking)
let isGreaterThan = 10 > 5; // Greater Than
let isLessThan = 5 < 10; // Less Than
let isGreaterThanOrEqual = 5 >= 5; // Greater Than or Equal
let isLessThanOrEqual = 3 <= 5; // Less Than or Equal

// 4. Logical Operators
// These operators perform logical operations.

let andOperation = true && false; // AND: Returns true if both operands are true
let orOperation = true || false; // OR: Returns true if at least one operand is true
let notOperation = !true; // NOT: Reverses the boolean value

// 5. Ternary Operator
// The ternary operator is a shortcut for if-else statements.

let age = 20;
let result = age >= 18 ? "Adult" : "Minor"; // Ternary operator: Returns 'Adult' if age >= 18, otherwise 'Minor'

// 6. Type Operators
// These operators deal with types in JavaScript.

let typeOfNum = typeof 5; // typeof: Returns the type of the operand
let typeOfStr = typeof "Hello"; // typeof: Returns the type of the operand
let isInstanceOfArray = [] instanceof Array; // instanceof: Checks if an object is an instance of a class

// Practice Questions:

// 1. Basic Arithmetic
let arithmeticResult = (10 % 3) + 2 * 3; // What is the result of this expression?
let calculation = 2 ** 3 + 5 * 2; // Calculate this expression

// 2. Assignment Operators
let xVal = 5;
xVal += 3; // Use += to increase by 3
xVal -= 2; // Use -= to decrease by 2

// 3. Comparison Operators
let isEqualCheck = 5 == "5"; // Check using == and ===
let isStrictEqualCheck = 5 === "5";
let num = 15;
let isBetween = num >= 10 && num <= 20; // Check if num is between 10 and 20

// 4. Logical Operators
let logicalCheck = num > 10 && num < 20; // Logical AND
let opposite = !false; // Use NOT operator to get the opposite of false

// 5. Ternary Operator
let isOddEven = num % 2 === 0 ? "Even" : "Odd"; // Check if num is odd or even using ternary operator

// 6. Type Operators
let typeCheck = typeof null; // Check the type of null
let isArrayCheck = [] instanceof Array; // Check if it's an array using instanceof
