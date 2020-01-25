function diagonalDifference(arr) {
    let fromLeftCorner = 0;
    let fromRightCorner = 0;

    for (let i = 0; i < arr.length; i++) {
        fromLeftCorner += arr[i][i];
        fromRightCorner += arr[i][arr.length - 1 - i];
    }

    return Math.abs(fromLeftCorner - fromRightCorner);
}
