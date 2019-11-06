function beautifulDays(i, j, k) {
    let beautifulDays = 0;
    let difference = [];

    for (let eye = i; eye <= j; eye++) {
        difference.push(
            eye -
                eye
                    .toString()
                    .split("")
                    .reverse()
                    .join("")
        );
    }

    for (let z = 0; z < difference.length; z++) {
        if (difference[z] % k === 0) {
            beautifulDays++;
        }
    }

    return beautifulDays;
}

console.log(beautifulDays(20, 23, 6));
