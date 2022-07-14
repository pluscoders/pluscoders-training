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
// undefined
people
// (3) [{…}, {…}, {…}]0: {name: 'Peter', surname: 'Pan', age: 15}1: {name: 'Wendy', surname: 'Pan', age: 15}2: {name: 'James', surname: 'Hook', age: 45}length: 3[[Prototype]]: Array(0)
people[2]
// {name: 'James', surname: 'Hook', age: 45}
people.2
// VM10082:1 Uncaught SyntaxError: Unexpected number
people[2].age
// 45
people[2]['age']
// 45