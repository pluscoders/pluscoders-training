describe('Array.prototype.every', () => {
  describe('check array for current value', () => {
    let array

    beforeEach(() => {
       array = [1, 30, 39, 29, 10, 13];
    })
    
    it('check array for current value', () => {
      const isBelowThreshold = (currentValue) => currentValue < 40;
      let check = array.every(isBelowThreshold)

      expect(check).toBeTruthy()
    })
  })
})

