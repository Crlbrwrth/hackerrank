function birthdayCakeCandles(ar) {
    let sorted = ar.sort((a, b) => {
        return b - a;
    });
    let candlesBlownOut = 0;

    sorted.forEach(e => {
        if (e === sorted[0]) {
            candlesBlownOut++;
        }
    });

    return candlesBlownOut;
}

console.log(birthdayCakeCandles([9, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8]));
