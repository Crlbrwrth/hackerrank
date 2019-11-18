function queensAttack(n, k, r_q, c_q, obstacles) {
    let counter = 0;
    let rowPlusCol = 2 * (n - 1);
    let diagonalDeduct = 0;
    let row = 0;
    n - r_q === r_q - 1 ? row = 0 : n - r_q > r_q - 1 ? row = ((n - r_q) - (r_q - 1)) / 2 : row = "false";
    let column = c_q;
    console.log("row", row);
}

queensAttack(5, 0, 2, 3, 0);