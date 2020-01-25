// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     let samsHousePosition = [];
//     let applesHitHouse = 0;
//     let orangesHitHouse = 0;
//
//     for (let i = s; i <= t; i++) {
//         samsHousePosition.push(i);
//     }
//
//     apples.forEach(e => {
//         if (samsHousePosition.includes(a + e)) {
//             return applesHitHouse++;
//         }
//     });
//
//     oranges.forEach(e => {
//         if (samsHousePosition.includes(b + e)) {
//             return orangesHitHouse++;
//         }
//     });
//
//     console.log(applesHitHouse);
//     console.log(orangesHitHouse);
// }

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter(e => e + a >= s && e + a <= t).length);
    console.log(oranges.filter(e => e + b >= s && e + b <= t).length);
}
countApplesAndOranges(9, 11, 5, 14, [1, 2, 3, 4], [-2, -3, -4]);
