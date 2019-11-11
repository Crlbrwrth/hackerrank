// m = wrappers num, for bar
// c = cost of bar
// n = Money

function chocolateFeast(n, c, m) {
    let chocolateBars = Math.floor(n / c);
    let wrapperCount = chocolateBars;

    while (wrapperCount >= m) {
        wrapperCount -= m;
        chocolateBars++;
        wrapperCount++;
    }

    return chocolateBars;
}

chocolateFeast(10, 2, 2);
