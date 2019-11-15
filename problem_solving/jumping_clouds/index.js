function jumpingOnClouds(c) {
    let counter = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i + 2] === 0) {
            i++;
        }
        if (i < c.length) counter++;
    }
    return counter;
}
