// Declares object for that stores data on duplicates 
let counts = {};

// For this exercise, I added a pre-declared range and a random range. The chances of getting 4 duplicates in a randomly range is slim, however I figured it would make for a good comparison to have two lists.
let numRange = [90, 14, 90, 53, 90, 90, 7, 63, 82, 37, 49];

// Initalise empty random array
let numRandRange = [];

// Generates random array of 10 numbers, ranging from 1 to 100
let randRange = () => {
    for (i = 0; i < 10; i++) {
        randomNum = Math.floor (Math.random() * 100) +1;
        numRandRange.push(randomNum); 
    }
}

randRange();

// Checks for duplicates in the array
let checkDuplicates = (array) => {

    // For each loop that assigns a count value for each item, incrementing each instance it appears
    array.forEach(function (i) {

    counts[i] = (counts[i] || 0) + 1;
    
    // Condition when count is equal to 4
    if (counts[i] === 4) {
        delete counts[i];
    }

});

// Displays list of items and their count
console.log(counts);

// Clears object so function can be run again for another list
counts = {};

}

// Runs function with two arrays, one predefined array and a randomly generated array
checkDuplicates(numRange);
checkDuplicates(numRandRange);