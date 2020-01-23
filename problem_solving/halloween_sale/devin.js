function howManyGames(p, d, m, s) {
    if (p > s) {
        return 0;
    }
    var spent = 0;
    var gamesBought = 0;

    spent = spent + p;
    gamesBought++;

    while (true) {
        p - d > m ? (p = p - d) : (p = m);
        if (spent + p <= s) {
            spent = spent + p;
            gamesBought++;
        } else {
            return gamesBought;
        }
    }
}
