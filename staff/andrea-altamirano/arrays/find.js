// HINT Array.prototype.find
function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var aux = array[i]

        var result = callback(aux)

        if (result === true)
            return aux
    }
}

// tests

//case 1
var array1 = [5, 12, 8, 130, 44];
var found = find(array1, element => element > 10)
console.log(found);
// 12

// case 2
var names = ['Josefina', 'Matias','Eguzkiñe','Maider','Aritz']
var found = find(names, element => element === 'Maider')
console.log(found)
// 'Maider'

// case 3
var people = [
    { name: 'Peter Pan', age: 15 },
    { name: 'Wendy Darling', age: 14 },
    { name: 'James Hook', age: 40 },
    { name: 'Pepito Grillo', age: 60 }
]
var found = find(people, function(person) {
    return person.age > 17
})
console.log(found)
// { name: 'James Hook', age: 40 }