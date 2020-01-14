function birthday(s, d, m) {
    let counter = 0;
    s.forEach((e, i) => {
        let sum = 0;
        let x = 0;
        while (x < m) {
            sum += s[i + x];
            x++;
        }
        if (sum === d) counter++;
    });
    return counter;
}
