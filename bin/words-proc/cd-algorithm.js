const dictionary = require('./dictionary.js')();

// Function name: CT Algorithm.
// ------------------------------------------- //
// Input:  9 character string.
// Output: Array of strings representing
//         english words formed from the input.
// ------------------------------------------- //
module.exports = function(jumble) {
    let answers = [];

    // For each category of english words.
    dictionary.forEach(function(category) {
        // And for each word in the category.
        // Initialize answers array.
        let ansarray = [];

        category.forEach(function(word) {
            // And initialize used array for the jumble string letters.
            let used = new Array(jumble.length).fill(false);

            // Search if every letter in the word is in the jumble string.
            for(let i = 0; i < word.length; i++) {
                // Initialize found flag to false.
                let found = false;

                // If the current letter is found in the jumble:
                if(jumble.indexOf(word[i]) >= 0) {
                    // For each letter in the jumble string (starting from
                    // where we found the first matching letter).
                    for(let j = jumble.indexOf(word[i]); j < jumble.length; j++) {
                        // If the letter matches, and is not used.
                        if(jumble[j] === word[i] && !used[j]) {
                            // Signal that you found the match.
                            found = true;
                            // And signal that the letter is from now on used.
                            used[j] = true;
                        }

                        // If found, stop searching.
                        if(found) {break;}
                    }

                    // If we found the letter in the jumble and we've reached the end
                    // of the word, add the word to the answer list.
                    if((i === word.length - 1) && found) {
                        ansarray.push(word);
                    }

                    // If the letter is in the jumble, but it is already used, skip to next word.
                    if(!found) {break;}

                } else {
                    // If the current letter is not found, skip to the next word.
                    break;
                }
            }
        });

        // Add the category answers to the array of categories.
        if(ansarray.length)
            answers.push(ansarray);
    });

    // Return answers and end function.
    return answers;
};