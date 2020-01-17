function hackerrankInString(s) {
    let checkForString = "hackerrank";
    let letterCheck = 0;

    for (let i = 0; i < s.length; i++) {
        if (
            s[i] === checkForString[letterCheck] &&
            letterCheck < checkForString.length - 1
        ) {
            letterCheck++;
        }
    }

    return letterCheck === checkForString.length - 1 ? "YES" : "NO";
}
