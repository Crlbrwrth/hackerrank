function encryption(s) {
    s = s.split(" ").join("");
    let substrLength = Math.ceil(Math.sqrt(s.length));
    let rowsArr = [];
    for (let i = 0; i < s.length; i++) {
        if (!(i % substrLength)) {
            rowsArr.push(s.slice(i, i + substrLength));
        }
    }
    let encryptedArr = [];
    let firstRow = rowsArr[0].split("");
    firstRow.forEach((e, i) => {
        let row = "";
        rowsArr.forEach(f => {
            if (f[i]) row += f[i];
        });
        encryptedArr.push(row);
    });
    return encryptedArr.join(" ");
}

console.log(encryption("chillout"));