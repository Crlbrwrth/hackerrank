// function getMoneySpent(keyboards, drives, b) {
//     let maxSpend = null;
//
//     let sortKey = keyboards.sort((min, max) => {
//         return max - min;
//     });
//
//     let sortDrive = drives.sort((min, max) => {
//         return max - min;
//     });
//
//     if (sortKey.length >= sortDrive.length) {
//         for (let i = 0; i < sortKey.length; i++) {
//             for (let j = 0; j < sortDrive.length; j++) {
//                 if (
//                     b - (sortKey[i] + sortDrive[j]) >= 0 &&
//                     sortDrive[i] + sortKey[j] > maxSpend
//                 ) {
//                     maxSpend = sortDrive[i] + sortKey[j];
//                 }
//             }
//         }
//     } else {
//         for (let i = 0; i < sortDrive.length; i++) {
//             for (let j = 0; j < sortKey.length; j++) {
//                 if (
//                     b - (sortDrive[i] + sortKey[j]) >= 0 &&
//                     sortDrive[i] + sortKey[j] > maxSpend
//                 ) {
//                     maxSpend = sortDrive[i] + sortKey[j];
//                 }
//             }
//         }
//     }
//
//     return maxSpend !== null ? maxSpend : -1;
// }
console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
