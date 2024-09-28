// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    if ((str1.length + str2.length) === 0) return true;

    const charCount = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        } else {
            charCount[char] -= 1;
        }
    }

    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat", "car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true