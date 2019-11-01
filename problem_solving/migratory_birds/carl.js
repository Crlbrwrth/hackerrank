function migratoryBirds(arr) {
    let species = 0;
    let counter = 1;
    let highest = 0;
    arr.sort().forEach((e, i) => {
        if (arr[i + 1] === e) counter++;
        if (counter > highest) {
            species = e;
            highest = counter;
        }
        if (arr[i + 1] !== e) counter = 1;
    });
    return species;
}
