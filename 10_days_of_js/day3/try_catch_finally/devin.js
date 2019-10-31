function reverseString(s) {
    try {
        s = s
            .split("")
            .reverse()
            .join("");
    } catch (error) {
        console.log(error.message);
    }
    console.log(s);
}
