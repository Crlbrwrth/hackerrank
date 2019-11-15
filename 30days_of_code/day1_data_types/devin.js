let array = [1, 0, -1];
function percentages(a) {
    let array = a;
    let total = array.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    array.forEach(e => {
        if (e > 0) {
            positive;
        } else if (e < 0) {
            negative++;
        } else {
            zero++;
        }
    });

    return [positive / total, negative / total, zero / total];
}

console.log(percentages(array));
