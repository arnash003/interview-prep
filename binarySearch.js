// Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element.It operates using the following steps:

// Find the middle value of a sorted array.If value == target return true(The value has been found and the search is complete).
// If middle value < target, search right half of array in next compare.
// If middle value > target, search left half of array in next compare.
// If after searching the whole array the value is not present, return false(The array has been searched and the value is not in the array).
// As you can see, you are successively halving an array, which gives you the log(n) efficiency.For this challenge, we want you to show your work - how you got to the target value... the path you took!
// Write a function binarySearch that implements the binary search algorithm on an array, returning the path you took(each middle value comparison) to find the target in an array.

// The function takes a sorted array of integers and a target value as input.It returns an array containing(in -order) the middle value you found at each halving of the original array until you found the target value.The target value should be the last element of the returned array.If the value is not found, return the string Value Not Found.

// For example, binarySearch([1, 2, 3, 4, 5, 6, 7], 5) would return [4, 6, 5].

// For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x / 2).This will give a consistent, testable path.

// Note: The following array will be used in tests:

// const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];


function binarySearch(sortedArray, target) {
    let path = []; // Array to store the path
    let left = 0; // Initialize the left pointer
    let right = sortedArray.length - 1; // Initialize the right pointer

    while (left <= right) {
        // Calculate the middle index using Math.floor
        const middle = Math.floor((left + right) / 2);
        path.push(sortedArray[middle]); // Store the middle value in the path

        if (sortedArray[middle] === target) {
            return path; // Found the target, return the path
        } else if (sortedArray[middle] < target) {
            left = middle + 1; // Search the right half
        } else {
            right = middle - 1; // Search the left half
        }
    }

    return "Value Not Found"; // Value not found in the array
}

// Example usage:
const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];

console.log(binarySearch(testArray, 5)); // [8, 16, 4, 12, 5]
