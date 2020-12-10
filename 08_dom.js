// Работа с DOM
const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hollo')
const heading2 = document.querySelector('h2')
console.log(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

setTimeout(() => {
  addStylesTo(heading, 'Уроки JavaScript')
}, 1500)

setTimeout(() => {
  addStylesTo(heading2, 'У меня начинает получаться', 'blue', '3rem')
}, 3000)

const linck = heading3.querySelector('a')
linck.addEventListener('click', () => {
  event.preventDefault()
  console.log('Click on linck', event.target.getAttribute('href'))
  const url = event.target.getAttribute('href')

  window.location = url
})

setTimeout(() => {
  addStylesTo(linck, 'у это ваще огонь!', 'orange', '2rem')
}, 5000)

function addStylesTo(node, text, color = 'red', fontSize = '1rem') {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = 'center'
  node.style.backgroundColor = 'black'
  node.style.padding = '2rem'
  node.style.display = 'block'
  node.style.width = '100%'
  // falsy:'', undefined, null, 0, falce
  if (fontSize) {
    node.style.fontSize = fontSize
  }
}

heading.onclick = () => {
  if (heading.style.color === 'red') {
    heading.style.color = '#000'
    heading.style.background = '#fff'
  } else {
    heading.style.color = 'red'
    heading.style.background = '#000'
  }
}
// heading2.onclick = () => {
//   if (heading2.style.fontSize === '3rem') {
//     heading2.style.fontSize = '2rem'
//     heading2.style.color = '#fff'
//     heading2.style.background = 'blue'
//   } else {
//     heading2.style.fontSize = '3rem'
//     heading2.style.color = 'blue'
//     heading2.style.background = '#000'
//   }
// }
heading2.addEventListener('dblclick', () => {
  if (heading2.style.fontSize === '3rem') {
    heading2.style.fontSize = '2rem'
    heading2.style.color = '#fff'
    heading2.style.background = 'blue'
  } else {
    heading2.style.fontSize = '3rem'
    heading2.style.color = 'blue'
    heading2.style.background = '#000'
  }
})
