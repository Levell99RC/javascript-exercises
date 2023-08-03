const palindromes = function (text) {
    let chars = text.toLowerCase().split('');
    console.log(chars);
    let letters = chars.filter((item) => {
        return item >= 'a' && item <= 'z' ||
            item >= '0' && item <= '9';
    });
    console.log(letters);
    for(let a = 0; a < Math.floor(letters.length / 2); a++) {
        if(letters[a] !== letters[letters.length - 1 - a]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
