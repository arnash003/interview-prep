// Another common intermediate sorting algorithm is merge sort.Like quick sort, merge sort also uses a divide - and - conquer, recursive methodology to sort an array.It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place.But we'll start with only one array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

// 1) Recursively split the input array in half until a sub - array with only one element is produced.

// 2) Merge each sorted sub - array together to produce the final sorted array.

// Merge sort is an efficient sorting method, with time complexity of O(nlog(n)).This algorithm is popular because it is performant and relatively easy to implement.

// As an aside, this will be the last sorting algorithm we cover here.However, later in the section on tree data structures we will describe heap sort, another efficient sorting method that requires a binary heap in its implementation.

// Instructions: Write a function mergeSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.A good way to implement this is to write one function, for instance merge, which is responsible for merging two sorted arrays, and another function, for instance mergeSort, which is responsible for the recursion that produces single - item arrays to feed into merge.Good luck!

function mergeSort(array) {
    // Base case: If the array has one or zero elements, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Function to merge two sorted arrays
    function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Compare elements from left and right sub-arrays and merge them
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Add any remaining elements from both sub-arrays
        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    // Divide the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    // Recursively sort and merge the two halves
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]