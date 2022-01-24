const filter = require('./filter')

describe('filter', () => {
  describe('filter nums', () => {
    let nums

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })

    it('should filter numbers that are bigger than 2.5', () => {
      //const res = filter(nums, num => num > 2.5)
      const res = filter(nums, function(num) { return num > 2.5 })

      expect(res).toHaveLength(8)
      expect(res).toContain(3, 4, 5, 6, 7, 8, 9, 10)
    })
  })

  describe('filter words', () => {
    let words

    beforeEach(() => {
      words = ['evgy', 'manu', 'anton', 'masha']
    })

    it('should filter words that start with m', () => {
      const res = filter(words, word => word.startsWith('m'))

      expect(res).toHaveLength(2)
      expect(res).toContain('manu', 'masha')
    })
  })

  describe('filter booleans', () => {
    let booleans

    beforeEach(() => {
      booleans = [true, false, false, true, true, true, false]
    })

    it('should filter elements that are true', () => {
      const res = filter(booleans, item => item)

      expect(res).toHaveLength(4)
      expect(res).toContain(true, true, true, true)
    })
  })
})
