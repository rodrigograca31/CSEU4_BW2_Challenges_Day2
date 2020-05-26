/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //  set() doesnt work because they ask us for the keys not the values
  diff = {};

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i] - target) in diff) {
      return [diff[Math.abs(nums[i] - target)], i];
    } else {
      diff[nums[i]] = i;
    }
  }
  return [];
};

console.log(twoSum([3, 5, 8, 2, 13, 6], 7));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([], 9));
