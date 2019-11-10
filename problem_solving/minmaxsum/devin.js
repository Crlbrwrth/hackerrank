function miniMaxSum(arr) {
    let sorted = arr.sort((a, b) => a - b);

    let min = sorted.slice(0, 4).reduce((sum, e) => {
        return sum + e;
    });

    let max = sorted.slice(1, 5).reduce((sum, e) => {
        return sum + e;
    });

    console.log(min, max);
}

miniMaxSum([2, 5, 4, 8, 10]);
