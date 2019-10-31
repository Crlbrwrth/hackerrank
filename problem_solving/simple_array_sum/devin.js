function simpleArraySum(ar) {
    let sum = ar.reduce((a, b) => a + b);
    return sum;
}

simpleArraySum([1, 2, 3, 4, 10, 3, 7, 30, 20]);
