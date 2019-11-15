function alternatingCharacters(s) {
    let s2 = s.split("");
    let curr = "ab";
    s2 = s2.filter(e => {
        if (e !== curr) {
            curr = e;
            return e;
        }
    });
    return s.length - s2.length;
}
