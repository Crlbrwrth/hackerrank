function countSwaps(a) {
    let swaps = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[j + 1]) {
                let currentNumber = a[j + 1];
                a[j + 1] = a[j];
                a[j] = currentNumber;
                swaps++;
            }
        }
    }

    let stateMent = "Array is sorted in " + swaps + " swaps.";
    let firstElement = "First Element: " + Math.min(...a);
    let lastElement = "Last Element: " + Math.max(...a);

    console.log(stateMent);
    console.log(firstElement);
    console.log(lastElement);
}
