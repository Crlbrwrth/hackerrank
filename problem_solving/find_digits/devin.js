function findDigits(n) {
    let divisor = [];
    let divisors = 0;

    String(n)
        .split("")
        .forEach(e => {
            if (Number(e) == 0 || divisor.includes(e)) {
                divisors += 0;
            }

            if (n % Number(e) === 0) {
                divisors++;
                divisor.push(e);
            }
        });

    return divisors;
}
