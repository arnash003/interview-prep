// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.Update the current existing inventory item quantities(in arr1).If an item cannot be found, add the new item and quantity into the inventory array.The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // Convert arr1 to an object for easier manipulation
    const inventory = arr1.reduce((acc, [quantity, name]) => {
        acc[name] = quantity;
        return acc;
    }, {});

    // Update inventory with items from arr2
    arr2.forEach(([quantity, name]) => {
        if (inventory[name]) {
            inventory[name] += quantity;
        } else {
            inventory[name] = quantity;
        }
    });

    // Convert the inventory object back to an array and sort it alphabetically
    return Object.keys(inventory).map(name => [inventory[name], name])
        .sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
