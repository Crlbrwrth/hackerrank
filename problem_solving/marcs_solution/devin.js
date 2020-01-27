function marcsCakewalk(calorie) {
    calorie.sort((min, max) => max - min);
    let milesToCalories = 0;
    for (let i = 0; i < calorie.length; i++) {
        milesToCalories += Math.pow(2, i) * calorie[i];
    }
    return milesToCalories;
}
