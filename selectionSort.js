// Here we will implement selection sort.Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list.It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element.It continues iterating through the list and swapping elements until it reaches the end of the list.Now the list is sorted.Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest

function selectionSort(array) {
    // Get the length of the array
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion of the array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the current element
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
