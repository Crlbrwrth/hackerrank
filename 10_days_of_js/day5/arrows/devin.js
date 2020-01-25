function modifyArray(nums) {
    let mapped = nums.map(e => {
        if (e % 2 === 0) {
            return e * 2;
        } else {
            return e * 3;
        }
    });

    return mapped;
}
