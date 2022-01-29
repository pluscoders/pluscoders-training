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

  // DONE create a method getFullName that returns the full name of the person
  getFullName() {
    //return this.name + ' ' + this.surname
    return `${this.name} ${this.surname}`
  }

  // DONE create a method for saluting a person from one person.
  /**
   * Salutes a person with 'Hello'.
   * 
   * @param to {Person} The person *to* salute.
   * 
   * @returns {string} The salutation (example: 'Peter: Hello, Wendy!')
   */
  salute(to) {
    return `${this.name}: Hello, ${to.name}!`
  }

  // DONE create a method for a person to present her/him self
  /**
   * Presents the person.
   * 
   * @returns {string} The person presentation (example: 'I am Peter Pan, a male of 33, and my e-mail is peter@pan.com.')
   */

  present() {
    return `I am ${this.name}, a ${this.gender} of 33, and my e-mail is ${this.email}`
  }

}

const names = ['Peter', 'John', 'Jack', 'Mike', 'Anna', 'Jessica', 'Laura', 'Tiffany', 'Britney', 'Maria', 'Micky']
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

// DONE print the name and surname of all the people using forEach

people.forEach(person => console.log(person.name, person.surname))

// DONE create a new array with all the names of the people in upper case 
//(which method would you use for that?) and print each name in uppercase in 
//the console log

people.map(person => console.log(person.name.toUpperCase(), person.surname.toUpperCase()))

// DONE filter names that start with 'M' and return them in a new array

people.filter(person => person.name.startsWith('M')).forEach(person => console.log(person.name))

// DONE print all people full name

people.forEach(person => console.log(person.getFullName()))

// DONE make peter to salute all the people, one each time

const peter = new Person('Peter', 'Pan', 33, 'male', 'peter@pan.com')

people.forEach(person => console.log(peter.salute(person)))

// DONE print all people presentations

people.forEach(person => console.log(person.present()))
