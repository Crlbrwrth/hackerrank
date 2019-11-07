function minimumDistances(a) {
    let min = Infinity;
    a.forEach((e, i) =>
        a.forEach((f, j) => {
            if (e === f && i - j > 0 && i - j < min) {
                min = i - j;
            }
        })
    );

    if (min !== Infinity) {
        return min;
    } else {
        return -1;
    }
}
