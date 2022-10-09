import States from './standart.json' assert {type: 'json'};
class human {
  constructor(firstName, secondName, age) {
    this.name = {
      firstName,
      secondName
    }
    this.age = age
    this.level = States.__standartLevel__
    this.state = {
      strange: States.__standartStateStange__,
      sleight: States.__standartStateSleight__
    }
  }
}
let Vladimir = new human("Vladimir", "Mohov", 16)
console.log(Vladimir.state)

try {
  "use strict"
  var o = {p:1, p:2}
} catch (error) {
  console.log(`Error ${error}`)
}