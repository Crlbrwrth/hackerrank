function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter(e => e + a >= s && e + a <= t).length);
    console.log(oranges.filter(e => e + b >= s && e + b <= t).length);
}
