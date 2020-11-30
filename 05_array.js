//
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//   {    name:'Leonid', budget:4200  },
//   {    name:'Elena', budget:3500  },
//   {    name:'Victoria', budget:1700  },
// ]
const fib = [1, 1, 2, 3, 5, 8, 13, 21]

//Function
function addItemToEnd() {}

// Метод
// cars.push('Persche')
// cars.unshift('Рено')
// const firstCar = cars.shift()
// const lastCar = cars.pop()

// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars)
// console.log(cars.reverse())

// const index = cars.indexOf('БМВ')
// const index = cars.findIndex('БМВ')
// cars[index] = 'Рено'
// console.log(cars)

// const people = [
//   { name: 'Leonid', budget: 4200 },
//   { name: 'Elena', budget: 3500 },
//   { name: 'Victoria', budget: 1700 },
// ]

// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson)

// const index = people.findIndex(function (person) {
//   return person.budget === 3500
// })
// const person = people.find(function (person) {
//   return person.budget === 3500
// })

// const person = people.find((person) => person.budget === 3500)
// console.log(person)

// console.log(people[index])

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map((car) => {
//   return car.toUpperCase()
// })
// console.log(upperCaseCars)

// const numkv = fib.map((num) => num ** 2)
// console.log(numkv)

// const pow2 = (num) => num ** 2
// const numkv2 = fib.map(pow2)
// console.log(numkv2)

// const sqrt = (num) => Math.sqrt(num)
// const pow2Fib = fib.map(pow2).map(sqrt) // (Math.sqrt)
// console.log(pow2Fib)

// const pow2 = (num) => num ** 2
// const numkv2 = fib.map(pow2)
// const fiNsum2 = numkv2.filter((num) => num > 20)
// console.log(fiNsum2)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse('').join('')
// console.log(text)
// console.log(reverseText)

const people = [
  { name: 'Leonid', budget: 4200 },
  { name: 'Elena', budget: 3500 },
  { name: 'Victoria', budget: 1700 },
]

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget

    return acc
  }, 0)

console.log(allBudget)
