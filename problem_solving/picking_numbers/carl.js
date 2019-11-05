function pickingNumbers(a) {
    let counter = 0;
    a.forEach(e => {
        let c2 = 0;
        a.forEach(f => {
            if (e == f || e + 1 == f) c2++;
        });
        if (c2 > counter) counter = c2;
    });
    return counter;
}
