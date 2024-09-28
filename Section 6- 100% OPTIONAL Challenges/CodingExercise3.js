// Frequency Counter - sameFrequency

// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
    const num1Count = {}
    const num2Count = {}

    for (let num of num1.toString()) {
        num1Count[num] = (num1Count[num] || 0) + 1;
    }
    for (let num of num2.toString()) {
        num2Count[num] = (num2Count[num] || 0) + 1;
    }

    if (Object.keys(num1Count).length !== Object.keys(num2Count).length) return false;

    for (let key in num1Count) {
        if (num1Count[key] !== num2Count[key]) return false;
    }

    return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
