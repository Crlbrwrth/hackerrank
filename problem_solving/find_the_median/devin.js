function findMedian(arr) {
    let sorted = arr.sort((min, max) => {
        return min - max;
    });

    return sorted[Math.floor(sorted.length / 2)];
}
