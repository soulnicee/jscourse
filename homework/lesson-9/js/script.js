/*
// ** 0 **
//// Користувач вводить кількість елементів. Створити масив,
//// що складається з вказаної кількості елементів заповнених нулями.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо вхідні дані від користувача, для цього створюємо функцію
// створюємо масив та заповнюємо нулями, також використовуючи функцію
// Виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
// Отримуємо кількість елементів
function getUserElementsQuantity() {
  return parseInt(prompt("Введіть кількість елементів", ""))
}
const userElementQuantity = getUserElementsQuantity()
// Отримуємо сам елемент, має бути число
//в умові вказано, що число 0 - зробив так, так буде універсальніше, 0 можна ввести з клавіатури
function getUserElement() {
  return parseInt(prompt("Введіть елемент, має бути цілим числом", ""))
}
const userElement = getUserElement()
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// Створюємо новий масив, заповнюємо його елементами і ретурнимо
function getArrayWithFilledElements(numQuantity, element) {
  return new Array(numQuantity).fill(element)
}
const userFilledArray = getArrayWithFilledElements(userElementQuantity, userElement)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
// виводимо результат
document.write(`Ось ваш масив ${userFilledArray} з ${userElementQuantity} елементів та заповнений ${userElement}`)
*/
/*
// ** 1 **
//// Користувач вводить кількість елементів. Створити масив,
//// у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо вхідні дані від користувача, для цього створюємо функцію
// створюємо масив та заповнюємо одиницями, створюємо константу для визначення половини масиву. заповнюємо
// другу половину масиву 7
// Виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
// Отримуємо кількість елементів
function getUserElementsQuantity() {
  return parseInt(prompt("Введіть кількість елементів", ""))
}
const userElementQuantity = getUserElementsQuantity()
//
function getUserFirstElement() {
  return parseInt(prompt("Введіть елемент для першої половини масиву, має бути цілим числом", ""))
}
const userFirstElement = getUserFirstElement()
//
function getUserSecondElement() {
  return parseInt(prompt("Введіть елемент для другої половини масиву, має бути цілим числом", ""))
}
const userSecondElement = getUserSecondElement()
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// Створюємо новий масив, заповнюємо його елементами №1, потім половину масиву змінюємо на елемент 2 і ретурнимо новий масив
function getArrayWithFilledElements(numQuantity, elementOne, elementTwo) {
  const array =  new Array(numQuantity).fill(elementOne)
  const arrayHalf = Math.floor(array.length / 2)
  array.fill(elementTwo, arrayHalf)
  return array
}
const userFilledArray = getArrayWithFilledElements(userElementQuantity, userFirstElement, userSecondElement)

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`Ось ваш масив ${userFilledArray}`)
*/
/*
// ** 2 **
//// Користувач вводить кількість елементів. Створити масив,
//// у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо вхідні дані від користувача, для цього створюємо функцію
// створюємо масив та заповнюємо одиницями перші 5 елементів, . заповнюємо
// масив до кінця 7
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function getUserElementsQuantity() {
  return parseInt(prompt("Введіть кількість елементів", ""))
}
const userElementQuantity = getUserElementsQuantity()
//
function getUserSeparator() {
  return parseInt(prompt("Скільки елементів заповнити першим числом, має бути цілим числом", ""))
}
const userSeparator = getUserSeparator()
//
function getUserFirstElement() {
  return parseInt(prompt(`Введіть значення для перших ${userSeparator} елементів масиву, має бути цілим числом`, ""))
}
const userFirstElement = getUserFirstElement()
//
function getUserSecondElement() {
  return parseInt(prompt("Введіть значення для всіх інших елементів масиву, має бути цілим числом", ""))
}
const userSecondElement = getUserSecondElement()
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// Пробую використати інший підхід до створення та заповнення масиву. 
function getArrayWithFilledElements(numQuantity, separator, elementOne, elementTwo) {
  const array = Array.from({ length: numQuantity }, () => elementOne)
  return array.fill(elementTwo, separator)
}
const userFilledArray = getArrayWithFilledElements(userElementQuantity, userSeparator, userFirstElement, userSecondElement)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`Ось ваш масив ${userFilledArray}`)
*/
/*
// ** 3 **
//// Дано масив елементів. Вивести на
//// екран елементи, що більші за 100

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо масив з елементами
// за дпопомогою циклу відбираємо потрібні елементи
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
// всі дані можна отримати від користувача, можна ввести вручну
function getArrayWithNumbers(minNum, maxNum, quantityNum) {
  let array = []
  for (let i = 0; i < quantityNum; i++) {
    array.push(getRandomNumber(minNum, maxNum))
  }
  return array
}
const arrayWithRandomNumbers = getArrayWithNumbers(1, 200, 50) // ввів дані вручну, щоб не писати промти
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getNumbersMore(arrayNumbers, numberMore) {
  let newArr = []
  for (const element of arrayNumbers) {
    if (element > numberMore) {
      newArr.push(element)
    }
  }
  return newArr
}
const userMoreNumbers = getNumbersMore(arrayWithRandomNumbers, 100)

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`${userMoreNumbers}`)
*/
/*
// ** 4 **
//// Дано масив елементів.
//// Знайти добуток додатних елементів

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо масив з елементами
// за допомогую циклу відбираємо підходящі елементи і сумуємо їх
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

function getArrayWithNumbers(minNum, maxNum, quantityNum) {
  let array = []
  for (let i = 0; i < quantityNum; i++) {
    array.push(getRandomNumber(minNum, maxNum))
  }
  return array
}
const arrayWithRandomNumbers = getArrayWithNumbers(1, 200, 50)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getEvenNumbersSum(arrayNumbers) {
  let evenNumSum = 0
  for (const element of arrayNumbers) {
    if (!(element % 2)) {
      evenNumSum += element
      console.log(element)
    }
  }
  return evenNumSum
}
const evenNumbersSum = getEvenNumbersSum(arrayWithRandomNumbers)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`${evenNumbersSum}`)
*/
/*
// ** 5 **
//// Дано масив елементів. Усі елементи,
//// які більші за перший елемент помножити на 2

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо масив з елементами
// переівряємо кожен елемент в масиві
// якщо елемент більший за перший елемент множимо на 2
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

function getArrayWithNumbers(minNum, maxNum, quantityNum) {
  let array = []
  for (let i = 0; i < quantityNum; i++) {
    array.push(getRandomNumber(minNum, maxNum))
  }
  return array
}
const arrayWithRandomNumbers = getArrayWithNumbers(1, 200, 10)
document.write(`${arrayWithRandomNumbers} - `)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function multipleNumbers(arrayNumbers) {
  arrayNumbers.forEach((element, index, baseArray) => {
    if (element > baseArray[0]) {
      baseArray[index] = baseArray[index] * 2
    }
  })
  return arrayNumbers
}
const multipledNumbers = multipleNumbers(arrayWithRandomNumbers)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`${multipledNumbers}`)
*/
/*
// ** 6 **
//// Дано масив цін. Змінити цей масив так,
//// що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо масив з цінами
// записуємо по якій формулі буде рахуватися знижка
// створюємо функцію для зміни цін з урахуванням дисконту
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

function getArrayWithNumbers(minNum, maxNum, quantityNum) {
  let array = []
  for (let i = 0; i < quantityNum; i++) {
    array.push(getRandomNumber(minNum, maxNum))
  }
  return array
}
const arrayWithRandomNumbers = getArrayWithNumbers(800, 1500, 30)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getPriceWithDiscount(prices) {
  const discountRate = 30 / 100
  prices.forEach((element, index, baseArr) => {
    if (element > 1000) {
      baseArr[index] -= Math.floor(baseArr[index] * discountRate)
    }
  })
  return prices
}
const discountedProducrsPrice = getPriceWithDiscount(arrayWithRandomNumbers)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`${discountedProducrsPrice}`)
*/

// ** 7 **

// function rowSumOddNumbers(n) {
//   // TODO
//   let num = 1
//   let sum = 0
//   for (let i = 0; i < n; i++) {
//     num += 2
//     sum = 
//   }
// }

// function rowSumOddNumbers(n) {
//   let firstNum = n * (n - 1) + 1; // calculate the first number in the row
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += firstNum + 2 * i; // add each odd number in the row to the sum
//   }
//   return sum;
// }

// const odd = rowSumOddNumbers(5)
// console.log(odd)