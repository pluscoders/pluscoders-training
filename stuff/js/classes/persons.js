class Person {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }

    salute(who) {
        if (!(who instanceof Person)) throw new Error(`${who} is not a Person`)
        
        console.log(`${this.name}: Hello, ${who.name}!`)
    }
}

class Man extends Person {
    constructor(name) {
        super(name, 'male')
    }
}

class Woman extends Person {
    constructor(name) {
        super(name, 'female')
    }
}

var eugeni = new Man('Eugeni')
var iñaki = new Man('Iñaki')
var maria = new Woman('Maria')

eugeni.salute(iñaki)
iñaki.salute(eugeni)
maria.salute(eugeni)
maria.salute(iñaki)

var workers = [eugeni, iñaki, maria]

var stats = workers.reduce((accum, elem) => {
    if (elem instanceof Man)
        accum.males++
    else if (elem instanceof Woman)
        accum.females++

    return accum
    
}, { males: 0, females: 0 })

console.log(stats)
// VM5634:10 Eugeni: Hello, Iñaki!
// VM5634:10 Iñaki: Hello, Eugeni!
// VM5634:10 Maria: Hello, Eugeni!
// VM5634:10 Maria: Hello, Iñaki!
// VM5634:47 {males: 2, females: 1}
// undefined