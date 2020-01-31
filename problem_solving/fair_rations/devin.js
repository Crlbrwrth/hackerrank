function fairRations(B) {
    const even = e => e % 2 === 0;
    let loaves = 0;

    for (let i = 0; i < B.length; i++) {
        if (B[i] % 2 === 1 && B[i - 1] % 2 === 1) {
            B[i] += 1;
            B[i - 1] += 1;
            loaves += 2;
        }

        if (B[i] % 2 === 1 && B[i + 1] % 2 === 1) {
            B[i] += 1;
            B[i + 1] += 1;
            loaves += 2;
        }

        if (B[i] % 2 === 1 && B[i - 1] % 2 === 0 && B[i + 1] % 2 === 0) {
            B[i] += 1;
            B[i + 1] += 1;
            loaves += 2;
        }
    }

    return B.every(even) ? loaves : "NO";
}

// FAILED TWO TEST CASES
