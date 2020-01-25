function migratoryBirds(arr) {
    let mostfrequent = null;
    let appears = 0;
    let highestAppearances = 0;
    let current = null;

    let sorted = arr.sort((min, max) => {
        return min - max;
    });

    for (let i = 0; i < sorted.length; i++) {
        if (current !== sorted[i]) {
            current = sorted[i];
            appears = 0;
        }

        if (sorted[i] === current) {
            appears++;
        }

        if (appears > highestAppearances) {
            highestAppearances = appears;
            mostfrequent = current;
        }
    }

    return mostfrequent;
}
