function vowelsAndConsonants(s) {
    let consonants = s.split("");
    let vowels = [];
    for (var i = 0; i < consonants.length; i++) {
        if (
            consonants[i] === "a" ||
            consonants[i] === "e" ||
            consonants[i] === "i" ||
            consonants[i] === "o" ||
            consonants[i] === "u"
        ) {
            vowels += consonants.splice(i, 1);
            i--;
        }
    }

    let letters = (vowels += consonants.join(""));
    for (var j = 0; j < letters.length; j++) {
        console.log(letters[j]);
    }
}

vowelsAndConsonants("head");
