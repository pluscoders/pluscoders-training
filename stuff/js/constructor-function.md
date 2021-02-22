```js
function Human(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

var m = new Human('Mauri', 42, 'male')
var o = new Human('Octavio', 44, 'male')
var a = new Human('Ana', 29, 'female')

var people = [m, o, a]

undefined
people
(3) [Human, Human, Human]
for (var i = 0; i < people.length; i++) {
    var person = people[i]

    if (person.gender === 'female')
        console.log(person)
}

VM5299:5 Human {name: "Ana", age: 29, gender: "female"}
```