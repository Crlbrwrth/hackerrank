function hurdleRace(k, height) {
    let potions = 0;
    height.forEach(element => {
        while (k < element) {
            k++;
            potions++;
        }
    });

    return potions;
}
