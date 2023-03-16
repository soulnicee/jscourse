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
  const array = new Array(numQuantity)
  const arrayHalf = Math.floor(array.length / 2)
  array.fill(elementOne, 0, arrayHalf).fill(elementTwo, arrayHalf)
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
  const array = new Array(numQuantity).fill(elementOne, 0, separator).fill(elementTwo, separator)
  return array
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
const arrayWithRandomNumbers = getArrayWithNumbers(-5, 5, 50)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const positiveNumbers = arrayWithRandomNumbers.filter((element) => element > 0)
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getNumbersMult(arrayNumbers) {
  let mult = 1
  for (const element of arrayNumbers) {
    mult *= element
  }
  return mult
}
const evenNumbersSum = getNumbersMult(positiveNumbers)
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
/*
// ** 7 **

//// Дано масив номерів авто. 
//// Сформувати новий масив тих, які починаються на «А»

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
const possibleSeriesNumbers = ["АК", "КК", "ТК", "МК", "АА", "КА", "ТТ", "ТА", "АВ", "КВ", "ММ", "ОК", "АС", "КС", "СМ", "ТС", "АЕ", "КЕ", "РР", "МІ", "АН", "КН", "ТН", "МН", "АІ", "КІ", "ТІ", "МЕ", "АМ", "КМ", "ТМ", "МВ", "АО", "КО", "МТ", "МО", "АР", "КР", "ТР", "МР", "АТ", "КТ", "ТО", "ХС", "ВА", "НА", "ХА", "ЕА", "ВВ", "НВ", "ЕЕ", "ЕВ", "ВС", "НС", "СС", "ЕС", "ВЕ", "НЕ", "ХЕ", "ХН", "ВН", "НН", "ОО", "ЕН", "ВІ", "НІ", "ХІ", "ЕІ", "ВК", "НК", "ХК", "ЕК", "ВМ", "НМ", "ХМ", "ЕМ", "ВО", "НО", "ХО", "ЕО", "АХ", "КХ", "ХХ", "ЕХ", "ВТ", "НТ", "ХТ", "ЕТ", "ВХ", "НХ", "ОХ", "РХ", "СА", "ІА", "ОА", "РА", "СВ", "ІВ", "ОВ", "РВ", "СЕ", "ІЕ", "ОЕ", "РЕ", "СН", "ІН", "ОН", "РН"]
const ukraineAlphabet = ["А", "Б", "В", "Г", "Д", "Е", "З", "І", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ю", "Я"]
const userNumbersQuantity = parseInt(prompt("Скільки автомобільних номерів хочете згенерувати?", "1000"))
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
// функція для отримання випадкових серій номерів в кількості вказаній користувачем
function getRandomSeriesNumber(quantity, seriesNumbers) {
  serNum = []
  for (let i = 0; i < quantity; i++) {
    let randomNumSer = getRandomNumber(1, seriesNumbers.length - 1)
    serNum.push(seriesNumbers[randomNumSer])
  }
  return serNum
}
// функція для отримання цифр в номері
function getRandomMiddleNumber(quantity) {
  let numbers = []
  for (let i = 0; i < quantity; i++) {
    let randNum = getRandomNumber(1, 9999)
    numbers.push(randNum)
  }
  return numbers
}
// функція для отримання додаткових 2 літер в кінці номера
function getLastTwoLetter(quantity, lastSymbols) {
  lastLetter = []
  for (let i = 0; i < quantity; i++) {
    let randomLett1 = getRandomNumber(1, lastSymbols.length - 1)
    let randomLett2 = getRandomNumber(1, lastSymbols.length - 1)
    lastLetter.push(lastSymbols[randomLett1] + lastSymbols[randomLett2])
  }
  return lastLetter
}
//Функція для отримання рандомних номерів автомобілів
function getVehicleNumbers(quantity) {
  const randomSeriesNumbers = getRandomSeriesNumber(quantity, possibleSeriesNumbers)
  const randomMiddleNumbers = getRandomMiddleNumber(quantity)
  const randomLastTwoLetters = getLastTwoLetter(quantity, ukraineAlphabet)
  let result = []
  for (let i = 0; i < quantity; i++) {
    result.push(randomSeriesNumbers[i] + randomMiddleNumbers[i] + randomLastTwoLetters[i])
  }
  return result
}
const vehicleNumbers = getVehicleNumbers(userNumbersQuantity)
console.log(vehicleNumbers)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
const vehicleNumbersWithFirstLetterA = vehicleNumbers.filter((element) => element[0] === "А")
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`Номера автомобілів, які починаються на букву "А" - ${vehicleNumbersWithFirstLetterA}`)

*/
/*
// ** 8 **
//// Дано масив імен.
//// Сформувати масив з перших літер цих імен.
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Беремо масив з іменами
// формуємо масив за допомогою мар новий масив з першими літерами імен
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
const userNames = ["Adam", "Bob", "Charlie", "David", "Emily", "Frank", "Gina", "Henry", "Isabelle", "Jack", "Katie", "Liam", "Mia", "Nancy", "Oliver", "Penny", "Quincy", "Rachel", "Samantha", "Thomas", "Uma", "Victoria", "Wyatt", "Xavier", "Yara", "Zoe"]
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
const firstLatterOfNames = userNames.map((element) => element[0])
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`Перші букві імен - ${firstLatterOfNames}`)
*/
/*
// ** 9 **
//// Дано масив цін у грн. Податок складає 20%.
//// Сформувати масив, який буде містити величину сплаченого податку у грн.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо масив цін
// створюємо константу яка містить рейт податку
// створюємо масив з сумарним податком і за допомогою редьюсу обчислюємо сумарну кількість сплаченого податку
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
function getArrayWithPrices(quantity, minNum, maxNum) {
  const prices = []
  for (let i = 0; i < quantity; i++) {
    prices.push(getRandomNumber(minNum, maxNum))
  }
  return prices
}

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const productPrices = getArrayWithPrices(25, 100, 500)
const currentTax = 0.2
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
const summaryTax = productPrices.reduce((prevVal, element) => {
  prevVal += element * currentTax
  return Math.floor(prevVal)
}, 0)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`Сумарно сплачено податку ${summaryTax} гривень`)
*/
