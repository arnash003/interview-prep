// Here we will move on to an intermediate sorting algorithm: quick sort.Quick sort is an efficient, recursive divide - and - conquer approach to sorting an array.In this method, a pivot value is chosen in the original array.The array is then partitioned into two subarrays of values less than and greater than the pivot value.We then combine the result of recursively calling the quick sort algorithm on both sub - arrays.This continues until the base case of an empty or single - item array is reached, which we return.The unwinding of the recursive calls return us the sorted array.

// Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average.It is also relatively easy to implement.These attributes make it a popular and useful sorting method.

// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.While the choice of the pivot value is important, any pivot will do for our purposes here.For simplicity, the first or last element could be used.

function quickSort(array) {
    // Base case: If the array is empty or has only one element, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Choose a pivot (for simplicity, let's choose the last element)
    const pivot = array[array.length - 1];

    // Create two sub-arrays to hold elements less than and greater than the pivot
    const lessThanPivot = [];
    const greaterThanPivot = [];

    // Partition the array into two sub-arrays based on the pivot
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= pivot) {
            lessThanPivot.push(array[i]);
        } else {
            greaterThanPivot.push(array[i]);
        }
    }

    // Recursively sort the sub-arrays and combine them with the pivot
    const sortedLess = quickSort(lessThanPivot);
    const sortedGreater = quickSort(greaterThanPivot);

    // Combine the sorted sub-arrays with the pivot and return the result
    return [...sortedLess, pivot, ...sortedGreater];
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
