// solution 1
function getSecondLargest(nums) {
    nums = [...new Set(nums)];
    nums = nums.sort((a, b) => a - b);
    return nums[nums.length - 2];
}
//
// // solution 2
function getSecondLargest(nums) {
    nums = nums.sort((a, b) => a - b).filter((e, i) => nums.indexOf(e) === i);
    return nums[nums.length - 2];
}
