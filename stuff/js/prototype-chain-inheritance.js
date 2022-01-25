// demo 1

function Person(name) {
    this.name = name
}

Person.prototype.talk = function() { return this.name + ': blah bla blah' }
Person.prototype.fart = function() { return this.name + ': 💨' }

function Woman(name) {
    Person.call(this, name)
}

Woman.prototype = Object.create(Person.prototype)
Woman.prototype.constructor = Woman

Woman.prototype.giveBirth = function() { return this.name + ': 👶🏻' }

function Man(name) {
    Person.call(this, name)
}

Man.prototype = Object.create(Person.prototype)
Man.prototype.constructor = Man

Man.prototype.giveSperm = function() { return this.name + ': 💦' }

var yulia = new Woman('Yulia')

console.log(yulia.talk())
console.log(yulia.giveBirth())
console.log('woman?', yulia instanceof Woman)
console.log('man?', yulia instanceof Man)
console.log('person?', yulia instanceof Person)
console.log(yulia.fart())

var peter = new Man('Peter')

console.log(peter.talk())
console.log(peter.giveSperm())
console.log('woman?', peter instanceof Woman)
console.log('man?', peter instanceof Man)
console.log('person?', peter instanceof Person)
console.log(peter.fart())
//Yulia: blah bla blah
//Yulia: 👶🏻
//woman? true
//man? false
//person? true
//Yulia: 💨
//Peter: blah bla blah
//Peter: 💦
//woman? false
//man? true
//person? true
//Peter: 💨

// demo 2

function FormatError(message) {
    Error.call(this, message)

    if (Error.captureStackTrace)
        Error.captureStackTrace(this, FormatError)

    this.name = FormatError.name    
}

FormatError.prototype = Object.create(Error.prototype)
FormatError.prototype.constructor = FormatError

var error = new Error('this is a normal error')
var formatError = new FormatError('this is a format error')

var log = console.log

log('error')
log(error instanceof Error)
log(error instanceof FormatError)

log('format error')
log(formatError instanceof Error)
log(formatError instanceof FormatError)