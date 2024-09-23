2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
let index = shoppingCart.indexOf('Tea')
if (index !== -1){
    shoppingCart[index] = 'Green Tea'
}
console.log(shoppingCart)

4
let indexEthiopia = countries.indexOf('Ethiopia')
if (indexEthiopia != -1){
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

5
let indexSass = webTechs.indexOf('Sass')
if (indexSass != -1){
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)