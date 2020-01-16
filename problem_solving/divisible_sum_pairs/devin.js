function divisibleSumPairs(n, k, ar) {
    let validPairs = 0;

    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j <= ar.length; j++) {
            if (i < j && (ar[i] + ar[j]) % k === 0) {
                validPairs++;
            }
        }
    }

    return validPairs;
}
