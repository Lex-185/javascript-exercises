// Using while loop
const repeatString = function(str, n) {
    let repeatString = '';
    if (n > 0) {
        while (n > 0){
            repeatString += str;
            n--;
        }
        return repeatString
    } else if (n == 0 || str == '') {
        return ''
    } else {
        return 'ERROR'
    }
    
};

// Using repeat method
// const repeatString = function(str, n) {
//     if (n > 0) {
//         console.log(str.repeat(n))
//     } else {
//         return '';
//     }
// };

// Do not edit below this line
module.exports = repeatString;
