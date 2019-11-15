function viralAdvertising(n) {
    let received = 5;
    let liked = 0;
    let i = 0;
    while (i < n) {
        let likes = Math.floor(received / 2);
        received = likes * 3;
        liked += likes;
        i++;
    }
    return liked;
}
