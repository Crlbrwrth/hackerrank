function camelcase(s) {
    let words = 1;

    s.split("").filter(e => {
        if (e === e.toUpperCase()) {
            words++;
            return e;
        }
    });

    return words;
}
