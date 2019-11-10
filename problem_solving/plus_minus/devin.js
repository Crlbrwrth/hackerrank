function plusMinus(arr) {
    let total = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach(e => {
        if (e > 0) {
            positive++;
        } else if (e < 0) {
            negative++;
        } else {
            zero++;
        }
    });

    console.log(positive / total);
    console.log(negative / total);
    console.log(zero / total);
}
