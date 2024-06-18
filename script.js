const template = document.querySelector('.template')
const input = document.querySelector('.input')
const button = document.querySelector('.check')

const getRandomInRange = (min = 0, max = 20) => {
  return Math.floor(min + Math.random() * (max - min + 1))
}

let firstRandomNumber = getRandomInRange()
let secondRandomNumber = getRandomInRange()

template.textContent = `${firstRandomNumber} * ${secondRandomNumber}`

button.addEventListener('click', () => {
  if (Number(input.value) === firstRandomNumber * secondRandomNumber) {
    alert('Поздравляю, вы дали верный ответ')
    firstRandomNumber = getRandomInRange()
    secondRandomNumber = getRandomInRange()
    template.textContent = `${firstRandomNumber} *  ${secondRandomNumber}`
  }
  else {
    alert('К сожалению, ответ неверный. Попробуйте еще раз')
  }

  input.value = ''
  input.focus()
})
