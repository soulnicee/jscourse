/*
// ** 0 **
// Нехай x_0=1,x_i=x_(i-1)+2i, де i=1,2,.... Визначити x_10. 
// Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Спочатку вивожу формулу, за якою буду обчислювати X_i = X_i-1 + 2i
// Х_0 рівне 1
// i нам приходить в функцію від користувача ( за умовою задачі це 10)
// Послідовність починається від 1 до i з кроком +1 на кожній ітерації(або -1)
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const userNumber = 10
function something(i) {
  if (i === 0) return 1
  else return something(i - 1) + 2 * i
}
let recursionVariant = something(userNumber)
console.log(recursionVariant)

function something2(i) {
  let res = 1
  for (let k = 1; k <= i; k++) {
    res += 2 * k
  }
  return res
}
let loopVariant = something2(userNumber)
console.log(loopVariant)

function something3(i) {
  let X = 0
  let X_0 = 1
  for (let k = 1; k <= i; k++) {
    X = X_0 + 2 * k
    X_0 = X
  }
  return X
}
let loopVariant2 = something3(userNumber)
console.log(loopVariant2)
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 1 **
// Нехай x_0=x_1=1,x_i=x_(i-1)+2x_(i-2), де i=2,3,.... Визначити x_n.
// Розв’язати з використанням рекурсивних і нерекурсивних алгоритмів

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Спочатку вивожу формулу, за якою буду обчислювати X_i = X_i-1 + 2X_i-2
// Х_0, X_1  рівне 1
// i нам приходить в функцію від користувача ( за умовою задачі це 10)
// Послідовність починається від 2 до i з кроком +1 на кожній ітерації(або -1)
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const userNumber = 10
function something(i) {
  if (i < 2) return 1
  else return something(i - 1) + 2 * something(i - 2)
}
let recursionVariant = something(userNumber)
console.log(recursionVariant)



function something2(i) {
  let X = 0
  let X_0 = X_1 = 1
  if (i < 2) return 1
  for (let k = 2; k <= i; k++) {
    X = X_0 + 2 * X_1
	 X_1 = X_0
	 X_0 = X
  }
  return X
}
let loopVariant = something2(userNumber)
console.log(loopVariant)
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 2 **
// З використанням замикань розробити ітератор,
// тобто функцію, що буде поступово за окремими викликами видавати по одне значення
// від заданого мінімального до заданого максимального. Якщо значення досягне максимального,
// то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function monthLoop(minNum, maxNum) {
  let startCountMonth = minNum-1
  function month() {
    if (startCountMonth === maxNum) {
      startCountMonth = minNum-1
    }
    startCountMonth++
    return startCountMonth
  }
  return month
}
const monthIterator = monthLoop(3, 12)
// console.log(monthIterator())
for (let i = 0; i < 12; i++) {
  console.log(monthIterator())
}
function findNum(numQuantity) {
  let arr = []
  for (let i = 0; i < numQuantity; i++) {
    arr.push(monthIterator())
  }
  return arr
}
const numnerFinded = findNum(12)
console.log(numnerFinded)
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 3 **

/// З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими
/// викликами видавати по одну букву наперед заданого слова. З використанням нього розробити
/// гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить
/// переклад цього слова. Підрахувати кількість вгаданих букв.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function wordsGame(word) {
  let letter
  let letterCounter = 0
  const wordEnd = word.length
  function getLetter() {
    if (wordEnd === letterCounter) {
      return "Game Over"
    }
    letter = word[letterCounter]
    letterCounter++
    return letter
  }
  return getLetter
}
const startGame = wordsGame("Hello")
console.log(startGame())
console.log(startGame())
console.log(startGame())
console.log(startGame())
console.log(startGame())

function playWithUser(word) {
  let letter
  let letterCounter = 0
  let userLetter
  let userAnswerCount = 0
  const wordEnd = word.length
  function getLetter() {
    if (wordEnd === letterCounter) {
      return "Game Over"
    }
    userLetter = prompt("Вгадайте слово. Це овоч зеленого кольору, 6 букв. Вводьте по одній літері, починаючи з великої.")
    letter = word[letterCounter]
    letterCounter++
    if (userLetter === letter) {
      userAnswerCount++
    }
    return userAnswerCount
  }
  return getLetter
}
const word1 = "Огірок"
const userPlay = playWithUser(word1)
for (let i = 0; i < word1.length; i++) {
  console.log(userPlay())
}

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 4 **
// Тренажер додавання. Кожні 10 секунд користувачу задають
// випадковий приклад з додавання двох цифр і робиться перевірка.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
function mathSumGame(minNum, maxNum, gamesQuantity) {
  let timeOut = 10000
  let gameCounter = 0

  function game() {
    const firstNumber = getRandomNumber(minNum, maxNum)
    const secondNumber = getRandomNumber(minNum, maxNum)
    setTimeout(() => {
      let userAnswer = parseInt(prompt(`Скільки буде ${firstNumber} + ${secondNumber}?`))
      if (userAnswer === firstNumber + secondNumber) {
        alert("Правильно!")
      } else {
        alert("Не правильно!")
      }
      gameCounter++
      if (gamesQuantity > gameCounter) {
        game()
      } else {
			alert('Game Over')
		}
    }, timeOut)
    return gameCounter
  }
  return game
}
const newUserGame = mathSumGame(1, 100, 3)
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 5 **
// Через 20 секунд перейти на сайт ukr.net. Для цього через
// 20 секунд після відкриття треба виконати команду
let redirectURL = "https://www.ukr.net/"
function userRedirect(link, delay) {
  setTimeout(() => window.location.href = link, delay)
}
const someRedirect1 = userRedirect(redirectURL, 20000)

// const someRedirect = setTimeout(() => {
//   window.location.href = "https://www.ukr.net/"
// }, 2000)
*/

