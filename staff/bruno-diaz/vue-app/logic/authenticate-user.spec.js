describe('authenticateUser', function () {

  xit('should succeed on valid instance with data', function () {
    var userIndex = Math.floor(Math.random() * users.length)

    var email = users[userIndex].email
    var password = users[userIndex].password

    authenticateUser(email, password, (error, token) => {
        console.log("Error 1 : " + error)
        console.log("Token 1 : " + token)
        expect(error).toBe(false);
        expect(token).toBeDefined();
        expect(token).toEqual('string');
    });
  })

  xit('should fail on valid instance but is not in data', function () {
    var email = getRandomString() + '@' + getRandomString() + '.com'
    var password = getRandomString('password')

    //   expect(function() {
    //       authenticateUser(email, password)
    //   }).toThrowError(Error, 'There is no registered user with those credentials')
  })

  xit('should fail on valid instance but email is not in data', function () {
      var userIndex = Math.floor(Math.random() * users.length)

      var email = getRandomString() + '@' + getRandomString() + '.com'
      var password = users[userIndex].password

      // APPLY & TEST

      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(Error, 'There is no registered user with those credentials')
  })

  it('should fail on valid email but wrong password', function () {
    var userIndex = Math.floor(Math.random() * users.length)

    var email = users[userIndex].email
    var password = getRandomString('password')

    authenticateUser(email, password, expect(function() {
        return error.message
    }).toThrowError(Error, 'username and/or password wrong'))

    // authenticateUser(email, password, (error, token) => {
    //     expect(error.message).toEqual('username and/or password wrong')
    //     expect(typeof toke).toEqual('undefined')
    // });
  })

  xit('should fail on valid instance but user.email and user.password are from differents users', function () {
      var userIndex1 = Math.floor(Math.random() * users.length * 1/2)
      var userIndex2 = Math.floor(Math.random() * users.length * 1/2) + Math.floor(users.length * 1/2)
      
      var email = users[userIndex1].email
      var password = users[userIndex2].password

      // APPLY & TEST

      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(Error, 'There is no registered user with those credentials')
  })

  xit('should fail on valid instance but password is diferent', function () {
      var userIndex = Math.floor(Math.random() * users.length)

      var email = getRandomString() + '@' + getRandomString() + '.com'
      var password = users[userIndex].password

      var email = getRandomString() + '@' + getRandomString() + '.com'
      var password = getRandomString('password')


      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(Error, 'There is no registered user with those credentials')
  })

  it('should fail on invalid email format: no email', function () {
      var email
      var password = getRandomString('password')

      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(TypeError, email + ' is not a string')
  })

  it('should fail on invalid email format: no @', function () {
      var email = getRandomString() + getRandomString() + '.com'
      var password = getRandomString('password')

      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(Error, email + ' is not an e-mail')
  })

  it('should fail on invalid email format: wrong username', function () {
      var email = '@' + getRandomString() + '.com'
      var password = getRandomString('password')

      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(Error, email + ' is not an e-mail')
  })

  it('should fail on invalid email instance: no organitation domain', function () {
      var email = getRandomString() + '@' + '.com'
      var password = getRandomString('password')

      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(Error, email + ' is not an e-mail')
  })

  it('should fail on invalid email instance: no extention domain', function () {
      var email = getRandomString() + '@' + getRandomString()
      var password = getRandomString('password')

      expect(function() {
          authenticateUser(email, password)
      }).toThrowError(Error, email + ' is not an e-mail')
  })
})