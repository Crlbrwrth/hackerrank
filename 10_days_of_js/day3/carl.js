// ******ARRAYS************
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

// *********  TRY CATCH ************
function reverseString(s) {
    try {
        s = s
            .split("")
            .reverse()
            .join("");
    } catch (e) {
        console.log(e.message);
    }
    console.log(s);
}

// ***********THROW ERRORS****************
function isPositive(a) {
    if (a > 0) return "YES";
    if (a == 0) throw new Error("Zero Error");
    if (a < 0) throw new Error("Negative Error");
}
