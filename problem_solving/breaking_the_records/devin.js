function breakingRecords(scores) {
    let firstGame = scores.splice(0, 1);
    let highScore = firstGame;
    let lowestScore = firstGame;
    let scoreCountHighLow = [0, 0];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > highScore) {
            scoreCountHighLow[0]++;
            highScore = scores[i];
        }

        if (scores[i] < lowestScore) {
            scoreCountHighLow[1]++;
            lowestScore = scores[i];
        }
    }

    return scoreCountHighLow;
}

console.log(breakingRecords([10, 20, 1]));
