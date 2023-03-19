function generateRandomArray(arrLength, minNumber, maxNumber) {
  const arr = []
  for (let i = 0; i < arrLength; i++) {
    let randNum = getRandomNumber(minNumber, maxNumber)
    arr.push(randNum)
  }
  return arr
}
const arrayWithRandomNumbers = generateRandomArray(30, 1, 50)
const arrayWithRandomNumbers2 = Array.from(arrayWithRandomNumbers)
const arrayWithRandomNumbers3 = Array.from(arrayWithRandomNumbers)

function generateRandomTable(rowsQuantity, columnsQuantity, minNumber, maxNumber) {
  const randTable = []
  for (let i = 0; i < rowsQuantity; i++) {
    const randRow = generateRandomArray(columnsQuantity, minNumber, maxNumber)
    randTable.push(randRow)
  }
  return randTable
}
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

// ** 0 **
// Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування бульбашкою

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо масив з випадковими числами
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
// Алгоритм сортування бульбашкою

function bubbleSort(array) {
  let changed
  let count = 0
  do {
    changed = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        ;[array[i - 1], array[i]] = [array[i], array[i - 1]]
        //   console.log(array)
        changed = true
        count++
      }
    }
  } while (changed)
  return count
}
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const changesBubbleQuantity = bubbleSort(arrayWithRandomNumbers)

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
console.log(changesBubbleQuantity)

// ** 1 **
// Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування змішуванням.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
// Алгоритм сортування змішуванням
function coctailSort(array) {
  let leftIndex = 0
  let rightIndex = array.length - 1
  let countLeft = 0
  let countRight = 0
  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (array[i] > array[i + 1]) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        //   console.log(array)
        countLeft++
      }
    }

    rightIndex--

    for (let i = rightIndex; i > leftIndex; i--) {
      if (array[i] < array[i - 1]) {
        ;[array[i], array[i - 1]] = [array[i - 1], array[i]]
        //   console.log('reverse', array)
        countRight++
      }
    }
    leftIndex++
  }
  return countLeft + countRight
}
const changesCoctailQuantity = coctailSort(arrayWithRandomNumbers2)
console.log(changesCoctailQuantity)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **

// ** 2 **
//  Дано масив 30 випадкових цілих чисел.
// Підрахувати скільки було обмінів під час сортування включеннями.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
// Алгоритм сортування включенням
function insertionSort(array) {
  let key, i
  let count = 0
  for (let k = 1; k < array.length; k++) {
    key = array[k]
    i = k - 1
    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i]
      i = i - 1
      count++
      // console.log(array)
    }
    array[i + 1] = key
  }
  return count
}
const changesInsertionSort = insertionSort(arrayWithRandomNumbers3)
console.log(changesInsertionSort)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **

// ** 3 **
// Дана задача виконана в кожному алгоритмі сортування, закоментований консоль лог

// ** 4 **
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
// чи є у масиві ім’я «Olga» і під яким індексом.
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
const userNames = ["Adam", "Bob", "David", "Emily", "Frank", "Gina", "Henry", "Isabelle", "Jack", "Katie", "Liam", "Mia", "Nancy", "Oliver", "Penny", "Quincy", "Rachel", "Samantha", "Thomas", "Uma", "Victoria", "Wyatt", "Xavier", "Yara", "Zoe", "Olga", "Charlie"]
const userNames2 = Array.from(userNames)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
// сортування

function insertionSort2(array) {
  let key, i
  for (let k = 1; k < array.length; k++) {
    key = array[k]
    i = k - 1
    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i]
      i = i - 1
    }
    array[i + 1] = key
  }
  return array
}

const sortedUserNames = insertionSort2(userNames)
console.log(sortedUserNames)
// лгоритм бінарного пошуку
function binarySearch(array, searchElement) {
  let start = 0
  let end = array.length - 1
  let arr = []
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (array[middle] === searchElement) {
      arr.push(true)
      arr.push(middle)
      return arr
    }
    if (array[middle] < searchElement) start = middle + 1
    if (array[middle] > searchElement) end = middle - 1
  }
  return false
}

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const isNameInArray = binarySearch(sortedUserNames, "Olga")
console.log(isNameInArray)

// ** 5 **
// Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити,
// чи є у масиві ім’я довжиною 5 символів і під яким індексом.
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Створити масив імен
// Написати алгоритм сортування(використав тут бульбашкове, не вийшло в сортування вставкою зробити сортування по довжині стрінги)
// Написати функцію бінарного пошуку
// Відсортувати масив з іменами за кількість символів в імені
// За допомогою бінарного пошуку визначити, чи є імена в яких 5 символів та їх індекси
// дописати бінарний пощук так, щоб знаходив більше 1 входження

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function bubbleSort2(array) {
  let changed
  do {
    changed = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1].length > array[i].length) {
        ;[array[i - 1], array[i]] = [array[i], array[i - 1]]
        changed = true
      }
    }
  } while (changed)
  return array
}

const sortedUserNames3 = bubbleSort2(userNames2)
console.log(sortedUserNames3)

function binarySearch2(array, searchLength) {
  let start = 0
  let end = array.length - 1
  let arr = []
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (array[middle].length === searchLength) {
      arr.push([true, middle])
      // Задача ускладнилася тим, що в моєму масиві більше 1 імені з 5 символами.
      let left = middle - 1
      let right = middle + 1
      while (array[left] && array[left].length === searchLength) {
        arr.push([true, left])
        left--
      }
      while (array[right] && array[right].length === searchLength) {
        arr.push([true, right])
        right++
      }
      return arr
    }
    if (array[middle].length < searchLength) start = middle + 1
    if (array[middle].length > searchLength) end = middle - 1
  }
  return false
}

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const isNameGreaterFiveLetter = binarySearch2(sortedUserNames3, 5)
console.log(isNameGreaterFiveLetter)
