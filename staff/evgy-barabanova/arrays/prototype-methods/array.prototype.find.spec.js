describe('Array.prototype.find', () => {
  describe('find a name', () => {
    let names

    beforeEach(() => {
      names = ['Melia Hooks', 'Jamal Velez', 'Alison', 'Marion Gibbs', 'Aaron Swartz'];
    })

    it('should find the first name that start with A', () => {
      const res = names.find(name => name.startsWith('A'))

      expect(res).toBe('Alison')
    })
  })

  describe('find a number', () => {
    let nums

    beforeEach(() => {
      nums = [7, 8, 3, 4, 1, 2, 5, 9, 10];
    })

    it('should find the first num that is smaller than 4.5', () => {
      const res = nums.find(num => num < 4.5)

      expect(res).toBe(3)
    })
  })
})
