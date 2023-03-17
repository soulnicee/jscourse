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
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

/*
// ** 0 **
// Знайти суми елементів у вказаній області

const someArray = generateRandomTable(4, 4, 1, 20)
function getRowSum(array, startR, startC) {
  let sum = 0
  const startRow = startR - 1
  const startColumn = startC - 1
  const endRow = startRow + 2
  const endColumn = startColumn + 2
  for (let i = startRow; i < endRow; i++) {
    for (let j = startColumn; j < endColumn; j++) {
      sum += array[i][j]
    }
  }
  return sum
}
const firstPartSum = getRowSum(someArray, 1, 1)
const secondPartSum = getRowSum(someArray, 1, 3)
const thirdPartSum = getRowSum(someArray, 3, 1)
const fourthPartSum = getRowSum(someArray, 3, 3)

// 5) Суму парних рядків
const someArray2 = generateRandomTable(4, 7, 1, 2)
function getSumEvenRows(array) {
  let sum = 0
  for (let i = 1; i <= array.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < array[i - 1].length; j++) {
        sum += array[i - 1][j]
      }
    }
  }
  return sum
}
const sumEvenRows = getSumEvenRows(someArray2)

// 6) Суму непарних стовпців
const someArray3 = generateRandomTable(4, 7, 1, 2)
function getSumOddColumns(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= array[i].length; j++) {
      if (j % 2 === 1) {
        sum += array[i][j - 1]
      }
    }
  }
  return sum
}
const sumOddColumns = getSumOddColumns(someArray3)

// У парних рядках – непарні стовпці, у непарних – парні.
const someArray4 = generateRandomTable(4, 7, 1, 2)
function getSumSomething(array) {
  let sumEvenRowOddColumns = 0
  let sumOddRowsEvenColumns = 0
  for (let i = 1; i <= array.length; i++) {
    if (i % 2 === 0) {
      for (let j = 1; j <= array[i - 1].length; j++) {
        if (j % 2 === 1) {
          sumEvenRowOddColumns += array[i - 1][j - 1]
        }
      }
    }
  }
  for (let i = 1; i <= array.length; i++) {
    if (i % 2 === 1) {
      for (let j = 1; j <= array[i - 1].length; j++) {
        if (j % 2 === 0) {
          sumOddRowsEvenColumns += array[i - 1][j - 1]
        }
      }
    }
  }
  return sumEvenRowOddColumns + sumOddRowsEvenColumns
}
const sumSomething = getSumSomething(someArray4)
*/
/*
// ** 1 **
//Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
const shopsQuantity = getRandomNumber(1, 5)
const shopsProfit = generateRandomTable(3, 7, 1, 5)
console.log(shopsProfit)

function getShopSummaryProfitPerWeek(array) {
  let sum = 0
  let profit = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j]
    }
    profit.push(sum)
    sum = 0
  }
  return profit
}
const summaryProfitPerWeek = getShopSummaryProfitPerWeek(shopsProfit)
console.log(summaryProfitPerWeek)
// загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
function getShopsSummaryProfitPerDay(array) {
  let daySum = 0
  let arr = []
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      daySum += array[j][i]
    }
    arr.push(daySum)
    daySum = 0
  }
  return arr
}
const shopsSummaryProfitPerDay = getShopsSummaryProfitPerDay(shopsProfit)
console.log(shopsSummaryProfitPerDay)

//загальний прибуток за робочі дні (вважаємо що 0 - це понеділок)
function getShopsSummaryProfitPerWorkDays(array) {
  // якщо потрібен прибуток кожного магазину окремо, розкоментувати код і вивовдити масив
  let workDaySum = 0
  //   let arr = []
  const workDayQuantity = 5
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < workDayQuantity; j++) {
      workDaySum += array[i][j]
    }
    //  arr.push(workDaySum)
    //  workDaySum = 0
  }
  return workDaySum
}
const shopsSummaryProfitPerWorkDays = getShopsSummaryProfitPerWorkDays(shopsProfit)
console.log(shopsSummaryProfitPerWorkDays)

//загальний прибуток за вихідні дні

function getShopsSummaryProfitPerOffDays(array) {
  // якщо потрібен прибуток кожного магазину окремо, розкоментувати код і вивовдити масив
  let offDaySum = 0
  //   let arr = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 5; j < array[i].length; j++) {
      offDaySum += array[i][j]
    }
    //  arr.push(offDaySum)
    //  offDaySum = 0
  }
  return offDaySum
}
const shopsSummaryProfitPerOffDays = getShopsSummaryProfitPerOffDays(shopsProfit)
console.log(shopsSummaryProfitPerOffDays)

//максимальний прибуток за середу
function getMaxDayProfit(array, userDay) {
  let dayNum = userDay - 1
  let maxProfit = array[0][dayNum]
  for (let i = 1; i < array.length; i++) {
    for (let j = dayNum; j < userDay; j++) {
      if (maxProfit < array[i][j]) maxProfit = array[i][j]
    }
  }
  return maxProfit
}
const maxDayProfit = getMaxDayProfit(shopsProfit, 3)
console.log(maxDayProfit)

// сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
function getProfitMore200(array) {
  const profit = 200
  let arr = []
  //   for (let i = 1; i < array.length; i++) {
  //     for (let j = 0; j < array[i].length; j++) {
  //       if (profit < array[i][j]) arr.push(array[i][j])
  //     }
  //   }
  for (const shops of array) {
    for (const dayProfit of shops) {
      if (profit < dayProfit) arr.push(dayProfit)
    }
  }
  return arr
}
const profitMore200 = getProfitMore200(shopsProfit)
console.log(profitMore200)

// відсортувати кожен тиждень за зростанням
function getSortedArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].sort((el1, el2) => el1 - el2)
  }

  return array
}
const sortedArray = getSortedArray(shopsProfit)
console.log(sortedArray)

//відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку),
//тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
function getSortedRowsArray(array) {
  return array.sort((el1, el2) => {
    let el1Max = Math.max(...el1)
    let el2Max = Math.max(...el2)
    return el2Max - el1Max
  })
}
const sortedRowsArray = getSortedRowsArray(shopsProfit)
console.log(sortedRowsArray)

// упорядкувати тижні (рядки) за спаданням суми елементів у рядку
// (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми,
// на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

function getSortedRowsSumArray(array) {
  return array.sort((el1, el2) => {
    let sumOne = el1.reduce((sum, element) => sum + element, 0)
    let sumTwo = el2.reduce((sum, element) => sum + element, 0)
    return sumTwo - sumOne
  })
}
const sortedRowsSumArray = getSortedRowsSumArray(shopsProfit)
console.log(sortedRowsSumArray)
*/
/*
// ** 2 **

function getGameField(rowsQuantity, columnsQuantity, shipsQuantity) {
  const randTable = Array.from({ length: rowsQuantity }, () => new Array(columnsQuantity).fill(0))
  let shipsPlaced = 0
  while (shipsPlaced < shipsQuantity) {
    let randRow = getRandomNumber(0, rowsQuantity - 1)
    let randColumn = getRandomNumber(0, columnsQuantity - 1)
    if (randTable[randRow][randColumn] === 0) {
      randTable[randRow][randColumn] = 1
      shipsPlaced++
    }
  }
  return randTable
}
const gameField = getGameField(6, 6, 5)
console.log(gameField)

function navalBattleCreate(field) {
  let shoot = 10
  let liveShips = 5
  let emotion = ""
  alert("Вітаю! Це гра морський бій! Ігрове поле 6*6. На полі 5 однопалубних кораблів. Для продовження натисніть ОК")
  do {
    const positionX = parseInt(prompt("Вкажіть координати корабля по осі X", "")) - 1
    const positionY = parseInt(prompt("Вкажіть координати корабля по осі Y", "")) - 1
    shoot--
    if (field[positionX][positionY] === 1) {
      field[positionX][positionY] = 0
      liveShips--
      alert(`Корабель вбитий! Залишилось ${liveShips} кораблів! У вас ${shoot} пострілів!`)
    } else {
      alert(`Не попали! Залишилось ${liveShips} кораблів! У вас ${shoot} пострілів!`)
    }
    if (shoot === 0 && liveShips > 0) {
      alert("Гру закінчено! Ви програли!")
      emotion = "Sad"
    }
    if (shoot >= 0 && liveShips === 0) {
      alert("Гру закінчено! Ви виграли!")
      emotion = "Smile"
    }
  } while (shoot > 0 && liveShips > 0)
  return emotion
}

const navalBattle = navalBattleCreate(gameField)
console.log(navalBattle)
*/