const sumAll = function(startInt, endInt) {
    let sum = 0;
    if (startInt > endInt) {
        let temp = startInt;
        startInt = endInt;
        endInt = temp;
    } else if (startInt < 0 || endInt < 0) {
        return 'ERROR';
    } else if ((typeof startInt) !== 'number' || (typeof endInt) !== 'number') {
        return 'ERROR';
    }
    for (let a = startInt; a <= endInt; a++) {
        sum += a;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
