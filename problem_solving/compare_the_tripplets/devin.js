function compareTriplets(a, b) {
    let playerOne = 0;
    let playerTwo = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            playerOne++;
        } else if (b[i] > a[i]) {
            playerTwo++;
        }
    }

    return [playerOne, playerTwo];
}

compareTriplets([1, 2, 3], [3, 4, 5]);
