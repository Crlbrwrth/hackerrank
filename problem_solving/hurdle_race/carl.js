function hurdleRace(k, height) {
    return Math.max(...height) - k > 0 ? Math.max(...height) - k : 0;
}
