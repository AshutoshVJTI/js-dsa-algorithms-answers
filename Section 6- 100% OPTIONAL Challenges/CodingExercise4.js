// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:

// Time - O(n)
// Space - O(n)

// Bonus:

// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...args) {
    const frequency = {};

    for (let arg of args) {
        if (frequency[arg]) return true;
        frequency[arg] = 1;
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 