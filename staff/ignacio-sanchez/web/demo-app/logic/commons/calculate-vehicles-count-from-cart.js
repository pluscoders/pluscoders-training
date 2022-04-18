function calculateVehiclesCountFromCart(cart) {
    validateArray(cart, 'cart')

    return cart.reduce((counter, item) => counter + item.qty, 0)
}