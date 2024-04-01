//code for function that accepts a string as input and swaps the case of each character
function swapCase(str) {
    // Split the input string into an array of characters
    var result = []
    for (var x = 0; x < str.length; x++) {
        if (str[x] === str[x].toUpperCase()) {
            // Check if the character is uppercase
            result.push(str[x].toLowerCase());
        }
        else if (str[x] === str[x].toLowerCase()) {
            result.push(str[x].toUpperCase());
        }
        else {
            result.push(str(x));
        }
    }
    return result.join('');
}
console.log(swapCase("The Quick Brown Fox"))
