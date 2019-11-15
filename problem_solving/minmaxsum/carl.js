function miniMaxSum(arr) {
    arr = arr.sort();
    let minArr = arr.reduce((sum, e) => (sum += e)) - arr[arr.length - 1];
    let maxArr = arr.reduce((sum, e) => (sum += e)) - arr[0];
    console.log(minArr, maxArr);
}
