// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function insertionSort(array) {
    // Get the length of the array
    const n = array.length;

    for (let i = 1; i < n; i++) {
        // Store the current element to be inserted into the sorted portion
        const currentElement = array[i];
        let j = i - 1;

        // Move elements of the sorted portion that are greater than the current element
        // one position ahead of their current position
        while (j >= 0 && array[j] > currentElement) {
            array[j + 1] = array[j];
            j--;
        }

        // Place the current element in its correct sorted position
        array[j + 1] = currentElement;
    }

    return array;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
