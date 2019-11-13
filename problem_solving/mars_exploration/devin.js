function marsExploration(s) {
    let messages = s.split("");

    let errors = 0;

    for (let i = 1; i < messages.length; i += 3) {
        if (messages[i] !== "O") {
            errors++;
        }
    }

    for (let j = 0; j < messages.length; j += 3) {
        if (messages[j] !== "S") {
            errors++;
        }
    }

    for (let k = 2; k < messages.length; k += 3) {
        if (messages[k] !== "S") {
            errors++;
        }
    }

    return errors;
}
