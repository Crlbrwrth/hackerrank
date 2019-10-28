//SWITCH STATEMENT EXERCISE

function getLetter(s) {
    let a = ["a", "e", "i", "o", "u"];
    let b = ["b", "c", "d", "f", "g"];
    let c = ["h", "j", "k", "l", "m"];
    if (a.includes(s[0])) return "A";
    if (b.includes(s[0])) return "B";
    if (c.includes(s[0])) return "C";
    return "D";
}

// IF STATEMENT EXERCISE

function getGrade(score) {
    return score > 25
        ? "A"
        : score > 20
            ? "B"
            : score > 15
                ? "C"
                : score > 10
                    ? "D"
                    : score > 5
                        ? "E"
                        : "F";
}

// LOOPS EXERCISE

function vowelsAndConsonants(s) {
    let str = "";
    s.split("").forEach(e => {
        if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
            console.log(e);
        } else {
            str += e;
        }
    });
    str.split("").forEach(e => console.log(e));
}
