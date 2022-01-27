describe('reduce', () => {
  describe('reduce nums to sum of all them', () => {
    let num

    beforeEach(() => {
      num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    })

    it('should sum element of array ', () => {
      const res = num.reduce((accum, item) => accum + item, 0)

      expect(res).toBe(55)
    })
  })

  describe('reduce shopping cart total price of items', () => {
    let cart

    beforeEach(() => {
      cart = []

      const socks = { brand: 'Benetton', size: 'm', price: 10, quantity: 3 }
      const pants = { brand: 'Levis', size: 'l', price: 100, quantity: 2 }
      const shoes = { brand: 'Nike', size: 40, price: 60, quantity: 1 }
      const tshirt = { brand: 'H&M', size: 's', price: 20, quantity: 5 }

      cart.push(socks)
      cart.push(pants)
      cart.push(shoes)
      cart.push(tshirt)
    })

    it('reduce the total cart price', () => {
      const total = cart.reduce((sum, el) => sum + el.price * el.quantity, 0)

      expect(total).toBe(10 * 3 + 100 * 2 + 60 + 20 * 5)
    })
  })
})
