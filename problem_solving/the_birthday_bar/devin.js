function birthday(s, d, m) {
    let possibleAnswers = 0;
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < m; j++) {
            total += s[i + j];
        }
        if (total === d) {
            possibleAnswers++;
        }
        total = 0;
    }

    return possibleAnswers;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
// 2
