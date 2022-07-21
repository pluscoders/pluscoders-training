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

var eugeni = new Person('Eugeni', 'male')
var iñaki = new Person('Iñaki', 'male')
var maria = new Person('Maria', 'female')

eugeni.salute(iñaki)
iñaki.salute(eugeni)
maria.salute(eugeni)
maria.salute(iñaki)

var workers = [eugeni, iñaki, maria]

var stats = workers.reduce((accum, elem) => {
    if (elem.gender === 'male')
        accum.males++
    else if (elem.gender === 'female')
        accum.females++

    return accum
    
}, { males: 0, females: 0 })

console.log(stats)
// Eugeni: Hello, Iñaki!
// VM4787:10 Iñaki: Hello, Eugeni!
// VM4787:10 Maria: Hello, Eugeni!
// VM4787:10 Maria: Hello, Iñaki!
// VM4787:35 {males: 2, females: 1}