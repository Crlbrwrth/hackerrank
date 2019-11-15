function howManyGames(p, d, m, s) {
    if (p > s) return 0;
    let spent = 0;
    let amountBought = 0;
    spent += p;
    amountBought++;
    while (true) {
        p - d > m ? (p = p - d) : (p = m);
        if (spent + p <= s) {
            amountBought++;
            spent += p;
        } else {
            return amountBought;
        }
    }
}
