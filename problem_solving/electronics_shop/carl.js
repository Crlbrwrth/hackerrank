function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let total = 0;
    keyboards.forEach(k =>
        drives.forEach(d => {
            if (d + k <= b && d + k > total) total = k + d;
        })
    );
    return total ? total : -1;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
