function birthdayCakeCandles(ar) {
    let max = Math.max(...ar);
    let result = ar.sort().filter(e => e === max);
    return result.length;
}
