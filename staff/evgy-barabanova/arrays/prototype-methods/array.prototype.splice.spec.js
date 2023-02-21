describe('Array.prototype.splice', () => {
  describe('splice numbers', () => {
    let nums

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5];
    })

    it('should new array with splice number ', () => {
      const res = nums.splice(3, 1)

      expect(res).toHaveLength(1)
      expect(res).toContain(4)
      expect(nums).toContain(1, 2, 3, 5)
    })

    it('should add element into array', () => {
      const res = nums.splice(5, 0, 6)

      expect(res).toHaveLength(0)
      expect(nums).toContain(1, 2, 3, 4, 5, 6)
    })
  })

  describe('splice months', () => {
    let months

    beforeEach(() => {
      months = ['jan', 'mar', 'apr', 'jun']
    })

    it('should insert feb between jan and mar', () => {
      const res = months.splice(1, 0, 'feb')

      expect(res).toHaveLength(0)
      expect(months).toHaveLength(5)
      expect(months).toContain('jan', 'feb', 'mar', 'apr', 'jun')
    })

    it('should replace jun with may', () => {
      const res = months.splice(3, 1, 'may')

      expect(res).toHaveLength(1)
      expect(res).toContain('jun')
      expect(months).toHaveLength(4)
      expect(months).toContain('jan', 'mar', 'apr', 'may')
    })
  })
})
