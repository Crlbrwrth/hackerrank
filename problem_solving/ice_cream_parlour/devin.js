function icecreamParlor(m, arr) {
    let flavourIndex = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] + arr[j] === m) {
                flavourIndex.push(i + 1);
                flavourIndex.push(j + 1);
                return flavourIndex.sort();
            }
        }
    }
}

//  Failed test case 2
