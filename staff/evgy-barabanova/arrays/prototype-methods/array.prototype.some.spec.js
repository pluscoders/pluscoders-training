describe('Array.prototype.some', () => {
  describe('Checks whether an element is even', () => {
    let array

    beforeEach(() => {
      array = [1, 2, 3, 4, 5];
    })
    
    it('Checks whether an element is even', () => {
      const even = (element) => element % 2 === 0;
      let check = array.some(even)

      expect(check).toBeTruthy()
    })
  })
})

