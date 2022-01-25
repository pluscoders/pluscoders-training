describe('Array.prototype.forEach', () => {
  describe('print things', () => {
    let nums

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5]
    })

    it('should loop for all nums and print each num', () => {
      let times = 0

      nums.forEach(num => {
        console.log(num)

        times++
      })

      expect(times).toBe(5)
    })
  })
})
