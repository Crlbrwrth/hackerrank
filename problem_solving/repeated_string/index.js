// function repeatedString(s, n) {
//     let string = s.repeat(n / s.length);
//     string = string.concat(string.substring(0, n % s.length));
//     let counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "a") counter++;
//     }
//     console.log(counter);
//     return counter;
// }

function repeatedString(s, n) {
    let asInString = 0;
    let roundedDown = Math.floor(n / s.length);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") asInString++;
    }
    let tail = s.substring(0, n % s.length);
    let tailCount = 0;
    for (let i = 0; i < tail.length; i++) {
        if (tail[i] === "a") tailCount++;
    }
    return roundedDown * asInString + tailCount;
}

repeatedString("Fanta", 15);
