function utopianTree(n) {
    let height = 1;
    let i = 0;
    while (i < n) {
        i % 2 ? height++ : (height = 2 * height);
        i++;
    }
    return height;
}
