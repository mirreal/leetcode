const expect = require('chai').expect

const { countBits } = require('../src/338-counting-bits/')

describe('Counting Bits', () => {
    it('Counting Bits', () => {
        expect(countBits(5)).to.deep.equal([0, 1, 1, 2, 1, 2])
    })
})
