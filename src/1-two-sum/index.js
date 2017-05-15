/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

var twoSumUseMap = function(nums, target) {
    var map = {}
    var len = nums.length

    for (var i = 0; i < len; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i
    }
}

module.exports = {
    twoSum,
    twoSumUseMap
}
