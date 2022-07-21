var peter = {
    name: 'Peter',
    surname: 'Pan',
    age: 15
}

var wendy = {
    name: 'Wendy',
    surname: 'Pan',
    age: 15
}

var james = {
    name: 'James',
    surname: 'Hook',
    age: 45
}

var people = [
    peter, 
    wendy,
    james
]
debugger
for (var i = 0; i < people.length; i++) {
    var person = people[i]

    console.log(person.name + ' ' + person.surname + ' (' + person.age + ')')
}
// VM12277:28 Peter Pan (15)
// VM12277:28 Wendy Pan (15)
// VM12277:28 James Hook (45)