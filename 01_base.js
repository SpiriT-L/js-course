// 1 блок примечание
//variablу

// const firstName = 'Leonid' // string
// //const lastName = 'Matskevich' // string
// //const age = 41 // namber
// const isProgrammer = true // boolean

// const _ = 'private'
// // const $ = 'some value'

//const if = 'mkef' // err
// const withNum5 = '5'
//const 5withNum = '5' //err

// 2 Блок мутирование

//console.log('Имя Человека: ' + firstName + ', а возраст человека: ' + age)

//alert('Имя Человека: ' + firstName + ', а возраст человека: ' + age)

//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

//3 Блок Операторы

// const currentYear = 2020
// const birthYear = 1979
// const age = currentYear - birthYear
// console.log(age)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Leonid'
// const age = 41
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов

// const fullAge = 41
// const birthYear = 1979
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)

// 6 Условные операторы

// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else {
//   console.log('Курс не получился')
// }

// 7 Булевая логика

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Логические_операторы

// 8 Функции

// function calculateAge(year) {
//   return 2020 - year
// }

// // const myAge = calculateAge(1979)
// // console.log(calculateAge(1979))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// }

// logInfoAbout('Leonid', 1979)

//9 Масивы

// const cars = ['Mazda', 'Marsedes', 'Ford']

// const cars = new Array('Mazda', 'Marsedes', 'Ford')

// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[2])
// console.log(cars[1])

//10 Циклы

// const cars = new Array('Mazda', 'Marsedes', 'Ford', 'Porsche')
// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

//11 Объекты

const person = {
  firstName: 'Leonid',
  lastName: 'Matskevich',
  year: 1979,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function () {
    console.log('greet')
  },
}

console.log(person)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()
