function staircase(n) {
    for (let i = n - 1; i >= 0; i--) {
        let str = "";
        for (let j = 0; j < n; j++) {
            i <= j ? (str += "#") : (str += " ");
        }
        console.log(str);
    }
}
