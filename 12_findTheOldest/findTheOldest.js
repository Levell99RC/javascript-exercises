const findTheOldest = function(people) {
    let sortedByAge = people.sort(function(a, b) {
        let aTerm2;
        let bTerm2;
        if (a.yearOfDeath === undefined) {
            aTerm2 = new Date().getFullYear();
        } else {
            aTerm2 = a.yearOfDeath;
        }
        if (b.yearOfDeath === undefined) {
            bTerm2 = new Date().getFullYear();
        } else {
            bTerm2 = b.yearOfDeath;
        }
        return (aTerm2 - a.yearOfBirth) - (bTerm2 - b.yearOfBirth);
    });
    return sortedByAge[sortedByAge.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
