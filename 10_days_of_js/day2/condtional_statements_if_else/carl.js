function getGrade(score) {
    return score > 25
        ? "A"
        : score > 20
        ? "B"
        : score > 15
        ? "C"
        : score > 10
        ? "D"
        : score > 5
        ? "E"
        : "F";
}
