describe('array.prototype.findIndex', () => {
  describe('findIndex things', () => {
    let names

    beforeEach(() => {
      names = ['Adena Kunz', 'Woodrow Murphy', 'Lee Carson', 'Ralph Williams', 'Cedrick Mckay', 'Tom Brady']
    })

    it('should return index element of array', () => {
      const res = names.findIndex(item => item === 'Woodrow Murphy')

      expect(res).toBe(1)
    })
  })
})
