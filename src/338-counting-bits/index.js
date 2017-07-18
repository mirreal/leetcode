/**
 * https://leetcode.com/problems/counting-bits/
 *
 * Created by mirreal on 16/5/27.
 */

var countOneBits = function(num) {
    var count = 0

    while (num > 0) {
        if (num & (1 !== 0)) {
            count += 1
        }

        num >>= 1
    }

    return count
}

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var arr = []
    for (var i = 0; i <= num; i++) {
        arr.push(countOneBits(i))
    }
    return arr
}

module.exports = {
    countBits
}
