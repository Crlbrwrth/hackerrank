function squares(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            arr.push(i);
        }
    }

    return arr.length;
}
