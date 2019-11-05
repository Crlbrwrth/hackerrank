function getTotalX(a, b) {
    let counter = 0;
    for (let i = 1; i <= Math.max(...b); i++) {
        if (a.every(e => !(i % e))) {
            if (b.every(e => !(e % i))) {
                counter++;
            }
        }
    }
    return counter;
}
