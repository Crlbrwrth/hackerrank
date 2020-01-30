function viralAdvertising(n) {
    let totalLikes = 0;
    let dailyLikes = 0;
    let shared = 0;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            shared = 5;
        }

        totalLikes += Math.floor(shared / 2);
        dailyLikes = Math.floor(shared / 2);
        shared = dailyLikes * 3;
    }

    return totalLikes;
}
