// TOO SLOW!

// function squares(a, b) {
//     let arr = [];
//     for (let i = a; i <= b; i++) {
//         if (Math.sqrt(i) % 1 === 0) {
//             arr.push(i);
//         }
//     }
//
//     return arr.length;
// }
//
// console.log(squares(1, 10000000));

function squares(a, b) {
    let currentSquare = 0,
        i = 0,
        perfectSquares = 0;

    while (currentSquare < b) {
        currentSquare = i * i;

        if (currentSquare >= a && currentSquare <= b) {
            perfectSquares++;
        }
        i++;
    }

    return perfectSquares;
}
