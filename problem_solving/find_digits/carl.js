function findDigits(n) {
    let counter = 0;
    String(n)
        .split("")
        .forEach(e => {
            if (!(n % e != 0) && e) counter++;
        });
    return counter;
}
