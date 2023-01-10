// 01. Split string -> reverse string -> join reverse string
// const reverseString = function(str) {
//     let splitStr = str.split('')
//     let reverseArr = splitStr.reverse()
//     let joinArr = reverseArr.join('')
//     return joinArr
// };

// 02 Decrementing for loop
const reverseString = function(str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    };

    return reverseStr
}

// Do not edit below this line
module.exports = reverseString;
