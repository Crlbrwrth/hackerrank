//  nmuber of moves to ensure the array is equal, can be one number

function equalizeArray(arr) {
    let mode = null;
    let frequency = null;
    let highestFrequency = 0;
    let currentNumber = null;

    let sorted = arr.sort((min, max) => {
        return max - min;
    });

    for (let i = 0; i < sorted.length; i++) {
        if (currentNumber === sorted[i]) {
            frequency++;
            if (frequency > highestFrequency) {
                highestFrequency = frequency;
                mode = currentNumber;
            }
        } else {
            frequency = 0;
            currentNumber = sorted[i];
        }
    }

    return sorted.length - (highestFrequency + 1);
}

console.log(equalizeArray([3, 3, 2, 1, 3, 3]));
