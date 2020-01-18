function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let count = 0;
    let sorted = s
        .trim()
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == alphabet[count]) {
            count++;
        }
    }

    return count >= alphabet.length - 1 ? "pangram" : "not pangram";
}
