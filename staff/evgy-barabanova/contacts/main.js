function randomInteger(limit) {
  return Math.floor(Math.random() * limit)
}

class Person {
  constructor(name, surname, age, gender, email) {
    this.name = name
    this.surname = surname
    this.age = age
    this.gender = gender
    this.email = email
  }
}

const names = ['Peter', 'John', 'Jack', 'Mike', 'Anna', 'Jessica', 'Laura', 'Tiffany', 'Britney']
const surnames = ['Parker', 'Malcovich', 'Nicolson', 'Jackson', 'Vintour', 'Pidarras', 'Maricon', 'Posh', 'Pussy', 'Dicky']
const domains = ['yandex.ru', 'gmail.com', 'yahoo.com', 'rambler.ru', 'mail.ru', 'space.com', 'porn.com', 'happy-flower.com']
const genders = ['male', 'female', 'other']

const people = new Array(100) // [] same as: new Array()

for (let i = 0; i < people.length; i++) {
  const name = names[randomInteger(names.length)]
  const surname = surnames[randomInteger(surnames.length)]
  const age = randomInteger(120)
  const domain = domains[randomInteger(domains.length)]
  const email = `${name.toLowerCase()}.${surname.toLocaleLowerCase()}@${domain}`
  const gender = genders[randomInteger(genders.length)]

  const person = new Person(name, surname, age, gender, email)
  people[i] = person
}

// TODO print the name and surname of all the people using forEach

people.forEach(person => console.log(person.name, person.surname))

// TODO create a new array with all the names of the people in upper case (which method would you use for that?)

const namesUppercase = people.map(person, index)




