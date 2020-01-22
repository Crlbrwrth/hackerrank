function lonelyinteger(a) {
    let sorted = a.sort((min, max) => {
        return min - max;
    });

    for (let i = 0; i < sorted.length; i++) {
        if (sorted.length === 1) {
            return sorted[i];
        }

        if (sorted[i] < sorted[i + 1] && sorted[i + 1] !== sorted[i + 2]) {
            return sorted[i + 1];
        }
    }
}
