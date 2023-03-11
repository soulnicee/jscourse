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
