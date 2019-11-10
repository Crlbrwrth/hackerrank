function solve(meal_cost, tip_percent, tax_percent) {
    let answer = Math.round(
        meal_cost +
            (meal_cost / 100) * tax_percent +
            (meal_cost / 100) * tip_percent
    );

    return answer;
}

console.log(solve(10.25, 17, 10));
