### 1. **Question: Sum of Odd and Even Numbers**
Write a function that separates the odd and even numbers from an array and returns their sums.

**Answer:**
```js
function sumOddEven(arr) {
    let oddSum = 0, evenSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    return { oddSum, evenSum };
}

console.log(sumOddEven([1, 2, 3, 4, 5])); // { oddSum: 9, evenSum: 6 }
```
### Explanation:
This function loops through the array and uses the modulus operator `%` to check if each number is odd or even. It then sums the respective values.

---

### 2. **Question: Find the Largest Number in an Array**
Write a function that finds the largest number in an array of integers without using the built-in `Math.max` function.

**Answer:**
```js
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([1, 5, 3, 9, 2]));  // 9
```
### Explanation:
The function loops through the array and uses the greater-than operator (`>`) to compare each element to the current largest value, updating as needed.

---

### 3. **Question: Count Vowels and Consonants**
Write a function that counts the number of vowels and consonants in a string.

**Answer:**
```js
function countVowelsConsonants(str) {
    let vowels = 0, consonants = 0;
    str = str.toLowerCase();  // Convert string to lowercase to handle both cases
    
    for (let char of str) {
        if ('aeiou'.includes(char)) {
            vowels++;
        } else if (char >= 'a' && char <= 'z') {
            consonants++;
        }
    }

    return { vowels, consonants };
}

console.log(countVowelsConsonants("Hello World"));  // { vowels: 3, consonants: 7 }
```
### Explanation:
The function uses the `.includes()` method to check if each character is a vowel and counts consonants by checking if the character is between 'a' and 'z'.

---

### 4. **Question: Reverse an Array**
Write a function to reverse an array without using the built-in reverse method.

**Answer:**
```js
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4]));  // [4, 3, 2, 1]
```
### Explanation:
This function uses a `for` loop to iterate through the array from the last element to the first, and pushes each element into a new array.

---

### 5. **Question: Find the Second Largest Number**
Write a function that finds the second largest number in an array.

**Answer:**
```js
function findSecondLargest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

console.log(findSecondLargest([1, 5, 3, 9, 2]));  // 5
```
### Explanation:
This function keeps track of the largest and second largest values by updating them as it iterates through the array.

---

### 6. **Question: Remove Duplicates from an Array**
Write a function that removes duplicates from an array and returns the resulting array.

**Answer:**
```js
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let num of arr) {
        if (!uniqueArr.includes(num)) {
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5]));  // [1, 2, 3, 4, 5]
```
### Explanation:
The function uses the `.includes()` method to check if the element is already present in the result array before adding it.

---

### 7. **Question: Find the Sum of Digits of a Number**
Write a function that takes a number as input and returns the sum of its digits.

**Answer:**
```js
function sumOfDigits(num) {
    let sum = 0;
    num = Math.abs(num);  // Handle negative numbers
    
    while (num > 0) {
        sum += num % 10;  // Add the last digit to the sum
        num = Math.floor(num / 10);  // Remove the last digit
    }

    return sum;
}

console.log(sumOfDigits(12345));  // 15
```
### Explanation:
The function uses the modulus operator `%` to get the last digit and adds it to the sum. Then, it removes the last digit by dividing the number by 10 and taking the floor value.

---

### 8. **Question: Check if a Number is a Power of Two**
Write a function that checks if a number is a power of two.

**Answer:**
```js
function isPowerOfTwo(num) {
    if (num <= 0) return false;
    return (num & (num - 1)) === 0;  // Bitwise AND operation
}

console.log(isPowerOfTwo(16));  // true
console.log(isPowerOfTwo(18));  // false
```
### Explanation:
The bitwise AND operation `(num & (num - 1))` checks if the number is a power of two. A power of two in binary representation has only one bit set, and this operation will return `0` if the number is a power of two.

---

### 9. **Question: Calculate the GCD (Greatest Common Divisor) of Two Numbers**
Write a function to calculate the GCD of two numbers using the Euclidean algorithm.

**Answer:**
```js
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(48, 18));  // 6
```
### Explanation:
This function uses the Euclidean algorithm to calculate the GCD of two numbers by repeatedly applying the modulus operator until the second number becomes 0. The first number will be the GCD.

---

### 10. **Question: Rotate an Array**
Write a function to rotate an array `k` times.

**Answer:**
```js
function rotateArray(arr, k) {
    k = k % arr.length;  // To handle rotation greater than array length
    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));  // [4, 5, 1, 2, 3]
```
### Explanation:
The function first calculates the remainder of `k` divided by the array length, to handle cases where `k` is greater than the array size. Then it slices the array into two parts and reorders them.
