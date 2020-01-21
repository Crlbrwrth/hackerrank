function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 - y2 >= 1) {
        return 10000;
    } else if (y1 - y2 < 0) {
        return 0;
    } else if (m1 <= m2 && d1 <= d2) {
        return 0;
    } else if (m1 < m2) {
        return 0;
    }

    let multiplier = m1 > m2 ? 500 : 15;

    if (multiplier === 500) {
        return (m1 - m2) * multiplier;
    }

    if (multiplier === 15) {
        return (d1 - d2) * multiplier;
    }
}
