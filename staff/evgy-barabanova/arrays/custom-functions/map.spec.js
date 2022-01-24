const map = require('./map')

describe('map', () => {
  describe('map nums', () => {
    let nums

    beforeEach(() => {
      nums = [1, 2, 3, 4, 5]
    })

    it('should loop for all nums, multiple by 10, and return a new array', () => {
      const res = map(nums, num => num * 10)

      expect(res).toHaveLength(nums.length)
      expect(res).toContain(10, 20, 30, 40, 50)
    })
  })

  describe('map', () => {
    describe('map first letter in word in upper case ', () => {
      let words
  
      beforeEach(() => {
        words = ['evgy','manu','anton','masha','eugenia','manuel']
      })
  
      it('should change first letter in word in upper case and return a new array', () => {
        const res = map(words, word => word[0].toUpperCase() + word.substring(1,word.length).toLowerCase())
       
        expect(res).toHaveLength(words.length)
        expect(res).toContain('Evgy','Manu','Anton','Masha','Eugenia','Manuel')
      })
    })
  })
})
