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
