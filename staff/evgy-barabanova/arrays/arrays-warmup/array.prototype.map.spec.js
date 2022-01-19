describe('Array.prototype.map', () => {
  describe('calculate things', () => {
    let nums

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5]
    })

    it('should loop for all nums, multiple by 10, and return a new array', () => {
      const res = nums.map(num => num * 10)

      expect(res).toContain(10, 20, 30, 40, 50)
    })
  })
})
