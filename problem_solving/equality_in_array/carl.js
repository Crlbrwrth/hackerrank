function equalizeArray(arr) {
    let counter = 0;
    let highestCount = 0;
    let current = null;
    let mostCommon = null;

    arr = arr.sort((a, b) => a - b);
    arr.forEach((e) => {
        if (e === current) {
            counter++;
            if (counter > highestCount) {
                mostCommon = e;
                highestCount = counter;
            }
        } else {
            counter = 0;
            current = e;
        }
    });
    if (counter == 0) return arr.length - 1;
    let arr2 = arr.filter(e => e === mostCommon);
    return arr.length - arr2.length;
}

