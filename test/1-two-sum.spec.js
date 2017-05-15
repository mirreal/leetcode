const expect = require('chai').expect

const { twoSum, twoSumUseMap } = require('../src/1-two-sum/')

describe('two sum', () => {
    it('two sum', () => {
        expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1])
        expect(twoSum([11, 7, 2, 15], 9)).to.deep.equal([1, 2])
        expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2])
    })

    it('two sum: use map', () => {
        expect(twoSumUseMap([2, 7, 11, 15], 9)).to.deep.equal([0, 1])
        expect(twoSumUseMap([11, 7, 2, 15], 9)).to.deep.equal([1, 2])
        expect(twoSumUseMap([3, 2, 4], 6)).to.deep.equal([1, 2])
    })
})
