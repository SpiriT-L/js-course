// Объекты
const person = {
  name: 'Leonid',
  age: '41',
  isProgrammer: true,
  languages: ['ru', 'en', 'de'],
  // 'complex key': 'Complex Value',
  // ['key_' + (1 + 3)]: 'Computed Key', //key_4
  greet() {
    console.log('greet from person')
  },
  info() {
    console.info('Информация про человека по имени:', this.name)
  },
}

// console.log(person.name)
// console.log(person.age)
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person)
// person.greet()

// person.age++
// person.languages.push('by', 'uc')
// //person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages

// const { name, age, languages } = person

// console.log(name, age, languages)

// console.log(person)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key)
//     console.log('value:', person[key])
//   }
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//   console.log('key:', key)
//   console.log('value:', person[key])
// })

// Object.keys(person).forEach((key) => {
//   console.log('key:', key)
//   console.log('value', person[key])
// })

// Context

// person.info()

const logger = {
  keys() {
    console.log('Object Keys:', Object.keys(this))
  },

  keysAndValues() {
    // "key": value
    // Object.keys(this).forEach((key) => {
    //   console.log(`"${key}": ${this[key]}`)
    // })
    // const self = this
    Object.keys(this).forEach(
      function (key) {
        console.log(`"${key}": ${this[key]}`)
      }.bind(this)
    )
  },
  withParams(top = false, bitwin = false, bottom = false) {
    if (top) {
      console.log('---Start---')
    }
    Object.keys(this).forEach((key, index, arrey) => {
      console.log(`"${key}": ${this[key]}`)
      if (bitwin && index !== arrey.length - 1) {
        console.log('------')
      }
    })
    if (bottom) {
      console.log('---End---')
    }
  },
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])
