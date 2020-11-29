// 1 Функции
//Function Declaration
// function greet(name) {
//   console.log('Привет - ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лёня')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции

// let counter = 0
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции

// function greet(name) {
//   console.log('Привет - ', name)
// }

// const arrow = (name) => {
//   console.log('Привет - ', name)
// }
// const arrow2 = (name) => console.log('Привет -', name)
// arrow('Лена')
// arrow2('Инна')

// const pow2 = (num) => num ** 2

// console.log(pow2(6))

// 4 Параметры по умолчанию

// const sum = (a, b) => a + b
// const sum = (a, b = 1) => a + b
// console.log(sum(40, 2))

// function sumAll(...all) {
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res)

// 5 Замыкание

function creatMember(name) {
  return function (lastName) {
    console.log(name + lastName)
  }
}

const logWithLastName = creatMember('Leonid')
console.log(logWithLastName(' Minin'))
console.log(logWithLastName(' Petrov'))
