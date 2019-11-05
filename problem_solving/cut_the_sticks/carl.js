function cutTheSticks(arr) {
    let result = [];
    while (arr.length > 0) {
        result.push(arr.length);
        arr = arr.map(e => e - Math.min(...arr)).filter(e => e > 0);
    }
    return result;
}
