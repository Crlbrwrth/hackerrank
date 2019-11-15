function compareTriplets(a, b) {
    let result = [0, 0];
    for (let i = 0; i < a.length; i++) {
        a[i] > b[i]
            ? result[0]++
            : b[i] > a[i]
                ? result[1]++
                : console.log("lol");
    }
    return result;
}
