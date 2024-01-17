// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations(aab, aab, aba, aba, baa, baa), but only 2 of them(aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
    // Helper function to swap two characters in an array
    function swap(arr, a, b) {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    // Helper function to check if a permutation has no consecutive repeated letters
    function hasNoConsecutiveRepeats(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    // Recursive function to generate permutations and count those with no consecutive repeats
    function generatePermutations(arr, n) {
        if (n === 1) {
            if (hasNoConsecutiveRepeats(arr.slice())) {
                count++;
            }
        } else {
            for (let i = 0; i < n; i++) {
                generatePermutations(arr, n - 1);
                if (n % 2 === 0) {
                    swap(arr, i, n - 1);
                } else {
                    swap(arr, 0, n - 1);
                }
            }
        }
    }

    const charArray = str.split('');
    let count = 0;
    generatePermutations(charArray, charArray.length);
    return count;
}

console.log(permAlone('aab')); // Output: 2
