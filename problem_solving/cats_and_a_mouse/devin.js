// function catAndMouse(x, y, z) {
//     let answer = "";
//
//     if (Math.abs(x - z) === Math.abs(y - z)) {
//         answer = "Mouse C";
//     }
//
//     if (Math.abs(x - z) < Math.abs(y - z)) {
//         answer = "Cat A";
//     }
//
//     if (Math.abs(x - z) > Math.abs(y - z)) {
//         answer = "Cat B";
//     }
//
//     return answer;
// }

function catAndMouse(x, y, z) {
    let answer =
        Math.abs(x - z) < Math.abs(y - z)
            ? "Cat A"
            : Math.abs(x - z) > Math.abs(y - z)
            ? "Cat B"
            : "Mouse C";
    return answer;
}
