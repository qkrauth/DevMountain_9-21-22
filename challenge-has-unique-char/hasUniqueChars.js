// Has Unique Characters

// Concepts
// Sets, Conditions

// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
// returns true
// hasUniqueChars("Moonday")
// returns false

//  Write your code below using SETS  //
let unique_count = (input_string) => {
    let is_equal = false;
    let set_string = new Set(input_string);
    if (set_string.size === input_string.length) {
        is_equal = true;
    }
    return is_equal
}

let value = unique_count("soul");
console.log(value);



// Another way, NESTED FOR LOOPS  //
function hasUniqueChars(string) {
    for (let i = 0; i < string.length; i++)
        for (let j = i + 1; j < string.length; j++)
            if (string[i] === string[j])
                return false;
    return true;
}

console.log(hasUniqueChars("soul"));