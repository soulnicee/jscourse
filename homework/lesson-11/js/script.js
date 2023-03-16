function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

function generateRandomArray(arrLength, minNumber, maxNumber) {
  const arr = []
  for (let i = 0; i < arrLength; i++) {
    let randNum = getRandomNumber(minNumber, maxNumber)
    arr.push(randNum)
  }
  return arr
}

function generateRandomTable(rowsQuantity, columnsQuantity, minNumber, maxNumber) {
  const randTable = []
  for (let i = 0; i < rowsQuantity; i++) {
    const randRow = generateRandomArray(columnsQuantity, minNumber, maxNumber)
    randTable.push(randRow)
  }
  return randTable
}

// ** 0 **
// Знайти суми елементів у вказаній області

const someArray = generateRandomTable(4, 7, 1, 20)
console.log(someArray)

function getArraySum(array, arrayRowNum) {
  let sum = 0
  for (let i = 0; i <= arrayRowNum; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j]
    }
  }
  return sum
}
const firstPartSum = getArraySum(someArray, 0)
console.log(firstPartSum)
