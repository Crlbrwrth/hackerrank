function plusMinus(arr) {
    let plus = 0;
    let minus = 0;
    let zero = 0;
    arr.forEach(e => {
        if (e > 0) {
            plus++;
        }
        if (e < 0) {
            minus++;
        }
        if (e == 0) {
            zero++;
        }
    });
    console.log(plus / arr.length);
    console.log(minus / arr.length);
    console.log(zero / arr.length);
}
