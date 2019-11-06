function getSecondLargest(nums) {
    // Complete the function
    let secondHighest;
    let sorted = nums.sort((a, b) => {
        return b - a;
    });

    for (var i = 0; i < sorted.length - 1; i++) {
        secondHighest = sorted[0];

        if (sorted[i] < sorted[0]) {
            return (secondHighest = sorted[i]);
        }
    }
}

console.log(getSecondLargest([2, 3, 4, 22, 21, 1, 22]));
