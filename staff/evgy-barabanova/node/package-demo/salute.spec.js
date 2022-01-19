const salute = require('./salute')

describe('salute', () => {
  it('should succeed on correct string name', () => {
    expect(salute('Evgy')).toBe('Hello, Evgy!')
  })
})
