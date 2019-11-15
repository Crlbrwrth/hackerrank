function diagonalDifference(arr) {
    let width = arr[0].length;
    let sum1 = 0;
    let sum2 = 0;
    arr.filter((e, i) => {
        for (let j = 0; j < e.length; j++) {
            if (i + j === width - 1) sum1 += e[j];
            if (i == j) sum2 += e[j];
        }
    });
    return sum1 > sum2 ? sum1 - sum2 : sum2 - sum1;

    //UNNECESSARILY COMPLICATED SOLUTION

    // let width = arr[0].length;
    // let diag1 = [];
    // let diag2 = [];
    // arr.filter((e, i) => {
    //     for (let j = 0; j < e.length; j++) {
    //         if (i + j === width - 1) diag1.push(e[j]);
    //     }
    // });
    // arr.filter((e, i) => {
    //     for (let j = 0; j < e.length; j++) {
    //         if (i == j) diag2.push(e[j]);
    //     }
    // });
    // let sum1 = diag1.reduce((sum, e) => (sum += e));
    // let sum2 = diag2.reduce((sum, e) => (sum += e));
    // return sum1 > sum2 ? sum1 - sum2 : sum2 - sum1;

    //SOLUTION IF IT HAD BEEN A FLAT ARRAY

    // let diagonal1 = arr.filter((e, i) => {
    //     return i % (width + 1) === 0;
    // });
    // let diagonal2 = arr.filter((e, i) => {
    //     return i % (width - 1) === 0 && i > 0 && i < arr.length - 1;
    // });
    // let sum1 = diagonal1.reduce((sum, e) => (sum += e));
    // let sum2 = diagonal2.reduce((sum, e) => (sum += e));
    // console.log(sum1);
    // console.log(sum2);
    // return sum1 > sum2 ? sum1 - sum2 : sum2 - sum1;
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
