describe('Array.prototype.splice', () => {
  describe('splice things', () => {
    let nums
    let arr = []

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5];
    })

    it('should new array with splice number ', () => {
      const res = nums.splice(3, 1)
      arr = res

      expect(res).toBe(arr)
    })

    it('should add element into array', () => {
      const respon = nums.splice(4, 0, 6)

      arr = respon

      expect(respon).toBe(arr)
    })
  })
})
