function cutTheSticks(arr) {
    let shortestSticks = [];

    while (arr.length > 0) {
        shortestSticks.push(arr.length);
        arr = arr.map(e => e - Math.min(...arr)).filter(e => e > 0);
    }

    return shortestSticks;
}
