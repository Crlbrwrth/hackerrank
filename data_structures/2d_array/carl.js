function hourglassSum(arr) {
    let highest = -Infinity;
    arr.forEach((e, i) =>
        e.forEach((f, j) => {
            if (j < 4 && i < 4) {
                let cur =
                    arr[i][j] +
                    arr[i][j + 1] +
                    arr[i][j + 2] +
                    arr[i + 1][j + 1] +
                    arr[i + 2][j] +
                    arr[i + 2][j + 1] +
                    arr[i + 2][j + 2];
                if (cur > highest) highest = cur;
            }
        })
    );
    return highest;
}
