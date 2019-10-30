function getLetter(s) {
    let a = ["a", "e", "i", "o", "u"];
    let b = ["b", "c", "d", "f", "g"];
    let c = ["h", "j", "k", "l", "m"];
    if (a.includes(s[0])) return "A";
    if (b.includes(s[0])) return "B";
    if (c.includes(s[0])) return "C";
    return "D";
}
