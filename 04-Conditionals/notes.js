// 04-Conditionals - Practice Problems

// 1. Odd or Even
// Write a program to check if a number is odd or even.
let num = 4;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2. Age Eligibility
// Write a program that checks if a person is eligible to vote.
let age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 3. Grade Checker
// Write a program that assigns a grade based on a student's score.
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 4. Leap Year Checker
// Write a program that checks if a year is a leap year.
let year = 2020;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("Leap year");
        } else {
            console.log("Not a leap year");
        }
    } else {
        console.log("Leap year");
    }
} else {
    console.log("Not a leap year");
}

// 5. Maximum of Three Numbers
// Write a program that finds the largest of three numbers.
let num1 = 5, num2 = 8, num3 = 3;
if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}

// 6. Number Range Checker
// Write a program that checks if a number is between 10 and 20.
let numInRange = 15;
if (numInRange >= 10 && numInRange <= 20) {
    console.log("In the range");
} else {
    console.log("Out of the range");
}

// 7. Divisibility Checker
// Write a program that checks if a number is divisible by both 3 and 5.
let numDiv = 15;
if (numDiv % 3 === 0 && numDiv % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}

// 8. Vowel or Consonant Checker
// Write a program that checks if a character is a vowel or consonant.
let char = 'a';
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// 9. Temperature Converter (Celsius to Fahrenheit)
// Write a program that converts Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

// 10. Day of the Week
// Write a program that takes a number (1 to 7) and prints the corresponding day of the week.
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
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
