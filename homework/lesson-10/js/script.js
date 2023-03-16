/*
// ** 0 **
//// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
////       1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
////       2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
////       3)Сформувати список з тих цін, які більші за попереднє значення
////       4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
////       5)Підрахувати кількість змін цін
////       6)Визначити, чи є ціна, що менше 1000
////       7)Визначати, чи усі ціни більше за 1000
////       8)Підрахувати кількість цін, що більше за 1000
////       9)Підрахувати суму цін, що більше за 1000
////       10)Знайти першу ціну, що більше за 1000
////       11)Знайти індекс першої ціни, що більше за 1000
////       12)Знайти останню ціну, що більше за 1000
////       13)Знайти індекс останньої ціни, що більше за 1000

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
function getArrayWithPrices(period, minNum, maxNum) {
  const prices = []
  for (let i = 0; i < period; i++) {
    prices.push(getRandomNumber(minNum, maxNum))
  }
  return prices
}
const securitiesPrices = getArrayWithPrices(10, 1, 10000)
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
const securitiesPricesGreater1000 = securitiesPrices.filter((element) => element > 1000)
document.write(`(1) ${securitiesPricesGreater1000} <br>`)

// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
const securitiesIndexPricesGreater1000 = securitiesPrices.reduce((prevValue, element, index) => {
  if (element > 1000) {
    return [...prevValue, index]
  }
  return prevValue
}, [])
document.write(`(2) ${securitiesIndexPricesGreater1000} <br>`)

// 3)Сформувати список з тих цін, які більші за попереднє значення
const securitiesPricesGreaterPrevious = securitiesPrices.reduce((accumulator, element, index, array) => {
  if (element > array[index - 1]) {
    return [...accumulator, element]
  }
  return accumulator
}, [])
document.write(`(3) ${securitiesPricesGreaterPrevious} <br>`)

// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
let maxProductPrice = Math.max(...securitiesPrices)
const pricesInPercent = securitiesPrices.map((value) => (value / maxProductPrice) * 100)
document.write(`(4) ${pricesInPercent} <br>`)

// 5)Підрахувати кількість змін цін
const securitiesNextPriceDiference = securitiesPrices.reduce((priceChanges, element, index, array) => {
  const nextElement = array[index + 1]
  if (nextElement !== element) priceChanges += 1
  return priceChanges
}, 0)
document.write(`(5) ${securitiesNextPriceDiference} <br>`)

// 6)Визначити, чи є ціна, що менше 1000
let priceLess1000 = securitiesPrices.some((price) => price < 1000)
priceLess1000 ? (priceLess1000 = "Є ціна менша за 1000") : (priceLess1000 = "Немає меншої за 1000")
document.write(`(6) ${priceLess1000} <br>`)

// 7)Визначати, чи усі ціни більше за 1000
let priceGreater1000 = securitiesPrices.every((price) => price > 1000)
priceGreater1000 ? (priceGreater1000 = "Усі ціни більші за 1000") : (priceGreater1000 = "Є ціна менша за 1000")
document.write(`(7) ${priceGreater1000} <br>`)

// 8)Підрахувати кількість цін, що більше за 1000
const priceQuantityGreater1000 = securitiesPrices.reduce((priceCount, element) => {
  if (element > 1000) priceCount += 1
  return priceCount
}, 0)
document.write(`(8) ${priceQuantityGreater1000} <br>`)

// 9)Підрахувати суму цін, що більше за 1000
const priceSumGreater1000 = securitiesPrices.reduce((priceSum, element) => {
  if (element > 1000) priceSum += element
  return priceSum
}, 0)
document.write(`(9) ${priceSumGreater1000} <br>`)

//10)Знайти першу ціну, що більше за 1000
const firstPriceGreater1000 = securitiesPrices.find((price) => price > 1000)
document.write(`(10) ${firstPriceGreater1000} <br>`)

//11)Знайти індекс першої ціни, що більше за 1000
const indexFirstPriceGreater1000 = securitiesPrices.findIndex((price) => price > 1000)
document.write(`(11) ${indexFirstPriceGreater1000} <br>`)

// 12)Знайти останню ціну, що більше за 1000
const lastPriceGreater1000 = securitiesPrices.findLast((price) => price > 1000)
document.write(`(12) ${lastPriceGreater1000} <br>`)

//13)Знайти індекс останньої ціни, що більше за 1000
const indexLastPriceGreater1000 = securitiesPrices.findLastIndex((price) => price > 1000)
document.write(`(11) ${indexLastPriceGreater1000} <br>`)

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/

// EXTRA TASKS **** ---- ****
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
function getArray(arrayLength) {
  return new Array(arrayLength)
}
/*
// ** 0 **
// 1.	Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
const arrayWithZeroAndTwoOne = new Array(20).fill(1, 0, 1).fill(0,1)
arrayWithZeroAndTwoOne[arrayWithZeroAndTwoOne.length-1] = 1
console.log(arrayWithZeroAndTwoOne)
*/
/*
// ** 1 **
// 2.	Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
const arrayZeroAndOne = getArray(20)
for (let i = 0; i < arrayZeroAndOne.length; i++) {
  arrayZeroAndOne[i] = i % 2
}
console.log(arrayZeroAndOne)
*/
/*
// ** 2 **
function getOddNumbers(arrayLength) {
  const array = getArray(arrayLength)
  let oddNum = 1
  for (let i = 0; i < array.length; i++) {
    array[i] = oddNum
    oddNum += 2
  }
  return array
}
const oddArray = getOddNumbers(20)
console.log(oddArray)
*/
/*
// ** 3 **
// 4.	Сформировать массив из элементов арифметической прогрессии с заданным первым элементом x и разностью d.
function getArithmeticProgression(firstElement, diff, quantityNumbers) {
  let arr = []
  let nextItem = firstElement
  for (let i = 0; i < quantityNumbers; i++) {
    arr.push(nextItem)
	 nextItem += diff
  }
  return arr
}
const arithmeticProgression = getArithmeticProgression(1, 4, 10)
console.log(arithmeticProgression)
*/
/*
// ** 4 **
// 5.	Сформировать возрастающий массив из четных чисел.
function getEvenNumbers(quantity) {
  let evenNum = 2
  let arr = []
  for (let i = 0; i < quantity; i++) {
    arr[i] = evenNum
    evenNum += 2
  }
  return arr
}
const evenNumbers = getEvenNumbers(20)
console.log(evenNumbers)

const evenNumbersV2 = new Array(20).fill(0)
const newEvenNumbersV2 = evenNumbersV2.map((element, index) => element + index * 2)
console.log(newEvenNumbersV2)
*/
/*
// ** 5 **
const oldArray = new Array(50)
for (let i = 0; i < 50; i++) {
  oldArray[i] = getRandomNumber(3, 100)
}
const arrayDiff3 = oldArray.map((element) => {
  if (!(element % 3)) {
    return element
  }
}).filter(Boolean).sort().reverse()
console.log(arrayDiff3)
*/
/*
// ** 6 **
// 7.	Создать массив из n первых чисел Фибоначчи.
const arrayFib = Array.from({length: 20}).reduce((acc, _, index) => {
  acc = [...acc, index < 2 ? index : acc[index - 1] + acc[index - 2]]
  return acc
}, [])
console.log(arrayFib)
*/
/*
// ** 7 **
// 8.	Заполнить массив заданной длины различными простыми числами.
// Натуральное число, большее единицы, называется простым, если оно делится только на себя и на единицу.
function isSimple(numQuantity) {
  for (let i = 2; i < Math.sqrt(numQuantity); i++) {
    if (numQuantity % i === 0) return false

    return true
  }
}

const simpleNumbers = Array.from({ length: 200 }).reduce((acc, element, index) => (isSimple(index) ? [...acc, index] : acc), [])
console.log(simpleNumbers)
*/
/*
// ** 8 **
// 9.	Создать массив, каждый элемент которого равен квадрату своего номера.
const powArray = Array.from({ length: 20 }).map((element, index) => (element = Math.pow(index, 2)))
console.log(powArray)
*/
/*
// ** 9 **
// 10.Создать массив, на четных местах в котором стоят единицы, а на нечетных местах - числа,
// равные остатку от деления своего номера на 5.
const someArray = Array.from({ length: 20 }).map((element, index) => {
  if (!(index % 2)) {
    return (element = 1)
  } else {
    return index % 5
  }
})
console.log(someArray)
*/
/*
// ** 10 **

//11.	Создать массив, состоящий из троек подряд идущих одинаковых элементов.
const someArray = Array.from({ length: 20 }).reduce((acc, element, index) => {
  for (let i = 0; i < 3; i++) {
    acc = [...acc, index]
  }
  return acc
}, [])
console.log(someArray)
*/
/*
// ** 11 **
// 12.	Создать массив, который одинаково читается как слева направо, так и справа налево.
const arrayLeft = Array.from({ length: 10 }).map((element, index) => (element = index + 1))
const arrayRight = Array.from(arrayLeft).reverse()
const someArray = arrayLeft.concat(arrayRight)
*/


