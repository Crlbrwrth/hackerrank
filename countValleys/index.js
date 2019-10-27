// n: number of steps
// s: path

function countingValleys(n, s) {
    let level = 0;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "U") {
            level++;
            if (level === 0) {
                counter++;
            }
        } else {
            level--;
        }
    }
    return counter;
}

console.log(
    countingValleys(8, "UDDDUDUUDDDDUUUUUUUDDDDDDDDDDDDDDUUUUUUUUUUUUUUUU")
);
