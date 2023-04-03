
describe('Array.prototype.push', () => {
    let animals

    beforeEach(() => animals = ['pigs', 'goats', 'sheep'])

    it('pushes one element into the array', () => {
        const length = animals.push('cows')

        expect(length).toBe(4)
        expect(animals).toHaveLength(4)
        expect(animals).toContain('cows')
    })

    it('pushes more than one element into the array', () => {
        // const value = animals.push('chickens', 'cats', 'dogs')

        // expect(value).toBe(6)
        // expect(animals).toHaveLength(6)
        // expect(animals).toContain('dogs')
        // console.log(animals, 'animals');
    })
})