// The mathematical term symmetric difference(△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.For example, for sets A = { 1, 2, 3} and B = { 2, 3, 4}, A △ B = { 1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements.So to evaluate an expression involving symmetric differences among three elements(A △ B △ C), you must complete one operation at a time.Thus, for sets A and B above, and C = { 2, 3}, A △ B △ C = (A △ B) △ C = { 1, 4} △ { 2, 3 } = { 1, 2, 3, 4 }.

// Create a function that takes two or more arrays and returns an array of their symmetric difference.The returned array must contain only unique values(no duplicates).
function sym() {
    // Convert arguments object to an array of arrays
    const args = Array.prototype.slice.call(arguments);

    // Function to find symmetric difference between two sets
    function symDiff(arrayOne, arrayTwo) {
        // Function to find elements in first array not in second
        function filterArray(arr1, arr2) {
            return arr1.filter(item => arr2.indexOf(item) === -1);
        }

        // Combine unique elements from both arrays that are not in the other array
        return filterArray(arrayOne, arrayTwo).concat(filterArray(arrayTwo, arrayOne));
    }

    // Reduce all arrays to a single array containing their symmetric difference
    return args.reduce((acc, currentArray) => {
        // Ensure unique elements in the arrays
        acc = [...new Set(acc)];
        currentArray = [...new Set(currentArray)];

        // Calculate symmetric difference
        return symDiff(acc, currentArray);
    }, []);
}

// Example usage
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // Expected output: [3, 5, 4]
