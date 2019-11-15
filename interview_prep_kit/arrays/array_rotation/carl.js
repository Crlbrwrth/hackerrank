function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        let x = a.shift();
        a.push(x);
    }
    return a;
}
