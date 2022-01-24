describe('Array.prototype.find', () => {
  describe('find things', () => {
    let names

    beforeEach(() => {
      names = ['Melia Hooks', 'Jamal Velez', 'Marion Gibbs', 'Aaron Swartz'];
    })
    // TODO it should find names that start with 'A'
    it('should find names that start with A', () => {

      const res = names.find(item => item === 'Aaron Swartz')

      expect(res).toBe('Aaron Swartz')
    })
  })
})
