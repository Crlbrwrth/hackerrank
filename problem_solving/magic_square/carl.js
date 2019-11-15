function formingMagicSquare(s) {
    // s.forEach(e => console.log(e));
    //
    // s.forEach(e => {
    //     e = e.reduce((sum, f) => (sum += f));
    //     console.log(e);
    // });
    //
    // s[0].forEach((e, i) => console.log(e + s[1][i] + s[2][i]));

    // function flatten(s) {
    //     if (!s.every(e => typeof e == "number")) {
    //         let arr = [];
    //         s.forEach(e => e.forEach(f => arr.push(f)));
    //         return flatten(arr);
    //     } else {
    //         return s;
    //     }
    // }
    // s = flatten(s);
    let counter = 0;
    let rows = [];
    let cols = [];
    let diags = [];
    s.forEach(e => {
        rows.push(e.reduce((sum, f) => (sum += f)));
        if (e == s[0]) {
            e.forEach((f, i) => cols.push(s[0][i] + s[1][i] + s[2][i]));
        }
    });
    diags.push(s[0][0] + s[1][1] + s[2][2], s[0][2] + s[1][1] + s[2][0]);

    console.log("rows: ", rows);
    console.log("cols: ", cols);
    console.log("diags: ", diags);
    if (rows == cols && cols == diags) console.log(counter);
}

formingMagicSquare([[4, 1, 2], [3, 1, 7], [8, 1, 2]]);
