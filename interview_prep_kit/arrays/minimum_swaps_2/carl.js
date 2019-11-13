// function minimumSwaps(arr) {
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//
//         }
//     }
// }

let array = ["a", "b", "c", "d", "e"];

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

console.log("after: ", array);

swap(array, 0, 2);

console.log("before: ", array);
