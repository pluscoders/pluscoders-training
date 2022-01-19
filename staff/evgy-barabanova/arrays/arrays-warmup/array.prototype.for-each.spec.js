describe('Array.prototype.forEach', () => {
  describe('calculate things', () => {
    let nums

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5]
    })

    it('should loop for all nums, multiple by 10, and put results in new array', () => {
      const res = []

      nums.forEach((num, index) => res[index] = num * 10)

      expect(res).toContain(10, 20, 30, 40, 50)
    })
  })
})
