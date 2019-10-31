function modifyArray(nums) {
    return nums.map(e => (e % 2 ? e + e + e : e + e));
}
