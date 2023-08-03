const fibonacci = function(member) {
    if(member < 0) {
        return 'OOPS';
    }
    if(typeof member === 'string') {
        member = parseInt(member);
    }
    let num1 = 1;
    let num2 = 1;
    for(let a = 3; a <= member; a++) {
        let temp = num2;
        num2 += num1;
        num1 = temp;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
