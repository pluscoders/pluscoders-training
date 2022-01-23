describe('Array.prototype.reduce', () => {
  describe('reduce things', () => {
  let num

    beforeEach(() => {
       num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    })

    it('should sum element of array ', () => {

      const res = num.reduce((accum, item) => accum + item, 0)

      expect(res).toBe(55)
    })
  })
})
