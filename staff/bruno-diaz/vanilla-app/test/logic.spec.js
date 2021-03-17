describe('logic', function () {
    describe('registerUser', function () {
        it('should succeed on valid instance with data', function () {
            debugger
            var users = {}
            var fullname = Math.random().toString(36).substring(7)
            var email = Math.random().toString(36).substring(7) + '@' + Math.random().toString(36).substring(7) + '.com'
            var password = Math.random().toString(36).substring(7)

            registerUser(fullname, email, password)

            expect(users.length).toEqual(1)

        })

        it('should fail on invalid email format', function() {

        })
    })
})  