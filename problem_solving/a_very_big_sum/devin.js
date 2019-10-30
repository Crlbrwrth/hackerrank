function aVeryBigSum(ar) {
    let bigSum = ar.reduce((a, b) => a + b);

    console.log(bigSum);
    return bigSum;
}

aVeryBigSum([1, 2, 3]);
