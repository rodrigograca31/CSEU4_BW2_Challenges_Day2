class Solution():
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        # set() doesnt work because they ask us for the keys not the values
        diff = dict()

        for i, num in enumerate(nums):
            # print(i, ":",  num, abs(num-target))

            if abs(num-target) in diff:
                return [diff[abs(num-target)], i]
            else:
                diff[num] = i

        return []


print()
print(Solution().twoSum([3, 5, 8, 2, 13, 6], 7))
print(Solution().twoSum([2, 7, 11, 15], 9))
print(Solution().twoSum([], 9))
