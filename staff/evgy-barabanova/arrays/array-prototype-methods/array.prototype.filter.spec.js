describe('Array.prototype.filter', () => {
  describe('filter things', () => {
    let nums

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })

    it('should filter numbers that are bigger than 2.5', () => {
      const res = nums.filter(num => num > 2.5)

      expect(res).toHaveLength(8)
      expect(res).toContain(3, 4, 5, 6, 7, 8, 9, 10)
    })
  })
})
