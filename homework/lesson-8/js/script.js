/*
// ** 0 **
//// Дано масив, який містить оцінки з К предметів.
//// Знайти середній бал і з’ясувати до якої категорії він відноситься
//// (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно),
//// трійочник(є хоча би одна трійка)).

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Дано масив - створюємо масив з необхідними даними.
// Кількість предметів = К, може бути різною
// створюємо функцію з циклом в середені для знаходження середнього балу,функція буде приймати масив з оцінками
// створюємо функцію, яка буде перевіряти, до якої категорії успішності відносить студент, також приймає масив за оцінками
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
const studentMarks = []
for (let i = 0; i < 20; i++) {
  studentMarks.push(getRandomNumber(1, 12))
}
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getAvarageMarksRate(marks) {
  let avarageRate = 0
  for (let i = 0; i < marks.length; i++) {
    avarageRate += marks[i]
  }
  return avarageRate / marks.length
}
// Я в чаті запитував ,ви сказали що такие варіант працювати не буде, але все ж таки він працює)))
//результат однаковий, якби я масив не змінював. Згіден, що ваш варіант більш практичний підхід має))))
// function getStudentPerformance(marks) {
//   let studentSuccess = ""
//   for (let i = 0; i < marks.length; i++) {
//     if (marks[i] >= 10) {
//       studentSuccess = "Відмінник"
//     } else if (marks[i] >= 7) {
//       studentSuccess = "Хорошист"
//     } else if (marks[i] >= 4) {
//       studentSuccess = "Трійочник"
//     } else {
//       studentSuccess = "Двійочник"
//     }
//   }
//   return studentSuccess
// }
function getStudentPerformance(marks) {
  let minMark = marks[0]
  for (let i = 1; i < marks.length; i++) {
    if (minMark > marks[i]) {
      minMark = marks[i]
    }
  }
  return minMark
}
let minimalLevel = getStudentPerformance(studentMarks)
console.log(minimalLevel)
let studentSuccess = ""
if (minimalLevel < 4) {
  studentSuccess = "Двійочник"
} else if (minimalLevel < 7) {
  studentSuccess = "Трійочник"
} else if (minimalLevel < 10) {
  studentSuccess = "Хорошист"
} else {
  studentSuccess = "Відмінник"
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const studentAvarageMarkRate = getAvarageMarksRate(studentMarks)
alert(`Ваше середній бал ${studentAvarageMarkRate.toFixed(1)} і ви ${studentSuccess}`)
*/
//========================================================================================================================================================

/*
// ** 1 **
//// Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
//// номери днів, протягом яких кількість відвідувачів була меншою за 20;
//// номери днів, коли кількість відвідувачів була мінімальною;
//// номери днів, коли кількість відвідувачів була максимальною;
//// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо масив з кількістю відвідувачів за тиждень
// створюємо функцію для для отримання днів, коли клієнтів було менше 20
// створюємо функції для отримання дня з мінімальними і максимальними клієнтами
// створюємо функцію для підрахунку клієнтів в робочі і вихідні

// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
const visitorsWeekList = []
for (let i = 0; i < 7; i++) {
  visitorsWeekList.push(getRandomNumber(1, 40))
}
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// Функція для знаходження кількості днів, коли клієнтів було менше 20
function getDayWhenVisitorsLessTwenty(visitorsList) {
  let lessVisitors = []
  for (let i = 0; i < visitorsList.length; i++) {
    if (visitorsList[i] < 20) {
      lessVisitors.push(i + 1)
    }
  }
  return lessVisitors
}
// Функція для знаходження дня, коли клієнтів було найменше
function getMinVisitorsDay(visitorsList) {
  let minCounter = Infinity
  for (let i = 0; i < visitorsList.length; i++) {
    if (minCounter > visitorsList[i]) {
      minCounter = visitorsList[i]
    }
  }
  return minCounter
}
const minOneDay = getMinVisitorsDay(visitorsWeekList)
// Функція для знаходження кількості днів, коли клієнтів було найменше
function getMinVisitorsDaysAll(visitorsList, minUserDay) {
  let minDay = []
  for (let i = 0; i < visitorsList.length; i++) {
    if (minUserDay === visitorsList[i]) {
      minDay.push(i + 1)
    }
  }
  return minDay
}
// Функція для знаходження дня, коли клієнтів було найбільше
function getMaxVisitorsDay(visitorsList) {
  let maxCounter = -Infinity
  for (let i = 0; i < visitorsList.length; i++) {
    if (maxCounter < visitorsList[i]) {
      maxCounter = visitorsList[i]
    }
  }
  return maxCounter
}

const maxOneDay = getMaxVisitorsDay(visitorsWeekList)
// Функція для знаходження кількості днів, коли клієнтів було ннайбільше
function getMinVisitorsDaysAll(visitorsList, maxUserDay) {
  let maxDay = []
  for (let i = 0; i < visitorsList.length; i++) {
    if (maxUserDay === visitorsList[i]) {
      maxDay.push(i + 1)
    }
  }
  return maxDay
}

// Функція для знаходження сумарної кількості клієнтів в робочі дня
function getSumaryVisitorsWorkDay(visitorsList) {
  getSum = 0
  for (let i = 0; i < 5; i++) {
    getSum += visitorsList[i]
  }
  return getSum
}
// Функція для знаходження сумарної кількості клієнтів в вихідні дня
function getSumaryVisitorsOffDay(visitorsList) {
  getSum = 0
  for (let i = 5; i < 7; i++) {
    getSum += visitorsList[i]
  }
  return getSum
}

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const dayWhenVisitorsLessTwenty = getDayWhenVisitorsLessTwenty(visitorsWeekList)
const minimumVisitorsDay = getMinVisitorsDaysAll(visitorsWeekList, minOneDay)
const maximumVisitorsDay = getMinVisitorsDaysAll(visitorsWeekList, maxOneDay)
const workDayVisitorsSummary = getSumaryVisitorsWorkDay(visitorsWeekList)
const offDayVisitorsSummary = getSumaryVisitorsOffDay(visitorsWeekList)
alert(`
1. Кількість клієнтів була меншою за 20 в такі дні: ${dayWhenVisitorsLessTwenty}
2. Мінімальна кількість клієнтів була в такий день: ${minimumVisitorsDay}
3. Максимальна кількість клієнтів була в такий день: ${maximumVisitorsDay}
4. Загальна кількість клієнтів у робочі дні: ${workDayVisitorsSummary}
5. Загальна кількість клієнтів у вихідні дні: ${offDayVisitorsSummary}
`)
*/
//========================================================================================================================================================

/*
// ** 2 **
//// Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Створюємо масив, наповнюємо його іменами.
// створюємо функцію яка буде знаходити задане імя в масиві
// лічильник буде збільшуватися при кожному успішному входженні
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const quantityOfUserNames = parseInt(prompt("Скільки імен хочете ввести?", ""))
const needName = "Іван"
function getUserNames(quantity) {
  const names = []
  for (let i = 0; i < quantity; i++) {
    names.push(prompt("Введіть імена українською мовобю з великої літери", ""))
  }
  return names
}
const userNames = getUserNames(quantityOfUserNames)

function getSomeNameQuantity(names, name) {
  let nameQuantity = 0
  for (let i = 0; i < names.length; i++) {
    if (name === names[i]) {
      nameQuantity += 1
    }
  }
  return nameQuantity
}
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
const quantityOfNeedName = getSomeNameQuantity(userNames, needName)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
alert(`Вказане імя зустрічається ${quantityOfNeedName} разів`)
*/
//========================================================================================================================================================

/*
// ** 3 **
//// Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
//// •	починаються на букву «А»;
//// •	перша і остання літери співпадають;
//// •	складаються з більше ніш 5 символів;

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Створення вхідних даних
// створюємо функцію для знаходження і підрахунку номерів які починаються з букви А
// створюємо функцію для знаходження і підрахунку номерів в яких перша і остання літери співпадають
// створюємо функцію для знаходження і підрахунку номерів які складаються більше ніж з 5 символів
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **
const possibleSeriesNumbers = ["АК", "КК", "ТК", "МК", "АА", "КА", "ТТ", "ТА", "АВ", "КВ", "ММ", "ОК", "АС", "КС", "СМ", "ТС", "АЕ", "КЕ", "РР", "МІ", "АН", "КН", "ТН", "МН", "АІ", "КІ", "ТІ", "МЕ", "АМ", "КМ", "ТМ", "МВ", "АО", "КО", "МТ", "МО", "АР", "КР", "ТР", "МР", "АТ", "КТ", "ТО", "ХС", "ВА", "НА", "ХА", "ЕА", "ВВ", "НВ", "ЕЕ", "ЕВ", "ВС", "НС", "СС", "ЕС", "ВЕ", "НЕ", "ХЕ", "ХН", "ВН", "НН", "ОО", "ЕН", "ВІ", "НІ", "ХІ", "ЕІ", "ВК", "НК", "ХК", "ЕК", "ВМ", "НМ", "ХМ", "ЕМ", "ВО", "НО", "ХО", "ЕО", "АХ", "КХ", "ХХ", "ЕХ", "ВТ", "НТ", "ХТ", "ЕТ", "ВХ", "НХ", "ОХ", "РХ", "СА", "ІА", "ОА", "РА", "СВ", "ІВ", "ОВ", "РВ", "СЕ", "ІЕ", "ОЕ", "РЕ", "СН", "ІН", "ОН", "РН"]
const ukraineAlphabet = ["А", "Б", "В", "Г", "Д", "Е", "З", "І", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ю", "Я"]
// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
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

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// функція для зноходження номерів автомобілів з першою літерою А
function getVehicleNumbersBeginLatterA(numbers) {
  let vehWithACounter = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i][0] === "А") {
      vehWithACounter += 1
    }
  }
  return vehWithACounter
}
const vehicleNumbersBeginLatterAQuantity = getVehicleNumbersBeginLatterA(vehicleNumbers)

// функція для зноходження номерів автомобілів в яких перша і остання літери співпадають
function getVehicleNumbersWithSameLetters(numbers) {
  let sameLetter = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i][0] === numbers[i][numbers[i].length - 1]) {
      sameLetter += 1
    }
  }
  return sameLetter
}
const vehicleNumbersWithSameLetters = getVehicleNumbersWithSameLetters(vehicleNumbers)

// функція для знаходження і підрахунку номерів які складаються більше ніж з 5 символів
function getVehicleNumbersLengthMoreFive(numbers) {
	let moreFive = 0
	for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].length > 5) {
		moreFive += 1
    }
  }
  return moreFive
}
const vehicleNumbersLengthMoreFive = getVehicleNumbersLengthMoreFive(vehicleNumbers)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
alert(`
1. Кількість номерів, які починаються на літеру 'A' = ${vehicleNumbersBeginLatterAQuantity}
1. Кількість номерів, в яких перша і остання літера однакові = ${vehicleNumbersWithSameLetters}
1. Кількість номерів, в яких символів більше за 5 = ${vehicleNumbersLengthMoreFive}
`)
*/
//========================================================================================================================================================
/*
// ** 4 **
//// Дано послідовність оцінок учня. Підрахувати кількість:
//// 1)	двійок
//// 2)	кількість хороших оцінок (добре, відмінно);
//// 3)	кількість оцінок, які нижче середнього.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо массив з оцінками учня
// створюємо функцію для обчислення середньої оцінки
// створюємо функцію для знаходження кількості оцінок нижче середнього
// створюємо функцію для знаходження кількості двійок
// створюємо функцію для знаходження кількості хороших оцінок (добре, відмінно)
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const userMarksQuantity = parseInt(prompt("Скільки учень має оцінок?", "30"))
// генератор рандомних чисел в функції
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
// отримання масиву з оцінками
function getStudentMarks(marksQuantity) {
  let marks = []
  for (let i = 0; i < marksQuantity; i++) {
    marks.push(getRandomNumber(1, 12))
  }
  return marks
}
const studentMarks = getStudentMarks(userMarksQuantity)
console.log(studentMarks)
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// функція для обчислення середньої оцінки
function getAvarageMark(marks) {
  let avarageMark = 0
  for (let i = 0; i < marks.length; i++) {
    avarageMark += marks[i]
  }
  return Math.round(avarageMark / marks.length)
}
const studentAvarageMark = getAvarageMark(studentMarks)

//функція для знаходження кількості оцінок нижче середнього
function getMarksLessAvarage(avrgMark, marks) {
  let marksLessCounter = 0
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < avrgMark) {
      marksLessCounter += 1
    }
  }
  return marksLessCounter
}
const quantityMarksLessAvarage = getMarksLessAvarage(studentAvarageMark, studentMarks)

//функція для знаходження кількості двійок
function getBadMarks(marks) {
  let badMarksCounter = 0
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 4) {
      badMarksCounter += 1
    }
  }
  return badMarksCounter
}
const badMarksQuantity = getBadMarks(studentMarks)

//функція для знаходження кількості хороших оцінок (добре, відмінно)
function getGoodMarks(marks) {
  let goodMarksCounter = 0
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 6) {
      goodMarksCounter += 1
    }
  }
  return goodMarksCounter
}
const goodMarksQuantity = getGoodMarks(studentMarks)

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
alert(`
1. Кількість двійок ${badMarksQuantity}
2. Кількість хороших оцінок (добре і відмінно) ${goodMarksQuantity}
3. Ваша середня оцінка ${studentAvarageMark}
4. Кількість оцінок нижче середного ${quantityMarksLessAvarage}
`)
*/

//========================================================================================================================================================
/*
// ** 5 **
//// Дано послідовність цін товарів та назв (у окремих масивах).
//// Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
//// Приклад збереження даних
//// let productsPrices = [1000, 20, 31]
//// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// создаєм масиви з товарами
// дізнаємося скільки грошиків має користувач
// створюєму функцію для порівняння коштів користувачів із цінами товарів
// виводимо ті, які може купити
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const popularProducts = ["iPhone 13", "Samsung Galaxy S21", "PlayStation 5", "Nintendo Switch", "AirPods Pro", "Bose QuietComfort 35 II", "Fitbit Charge 5", "Instant Pot Duo Crisp", "Roomba i7+", "TCL 6-Series 4K TV", "Anker PowerCore 10000", "Kindle Paperwhite", "Lululemon Align Leggings", "Le Creuset Dutch Oven", "Yeti Rambler Tumbler", "Hydro Flask Water Bottle", "Nespresso Vertuo Coffee Maker", "Casper Original Mattress", "Allbirds Wool Runners", "Patagonia Better Sweater", "Ugg Classic II Boots", "Calvin Klein Underwear", "Ray-Ban Classic Aviator Sunglasses", "Dr. Martens 1460 Boots", "S'well Stainless Steel Water Bottle", "Apple Watch Series 7", "Fitbit Sense", "Dyson V11 Absolute", "Philips Sonicare DiamondClean Toothbrush", "Fjallraven Kanken Backpack"]
const productPrices = [999, 799, 499, 299, 249, 299, 179, 149, 799, 699, 19.99, 129.99, 98, 375, 34.99, 29.95, 199, 1095, 95, 149, 170, 40, 154, 150, 399, 299, 699, 199, 90]
const userMoneyHas = parseFloat(prompt('Скільки доларів маєте?', ''))

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getProductsCanUserBuy(products, prices, money) {
  let canBuy = []
  for (let i = 0; i < prices.length; i++) {
    if (money >= prices[i]) {
      canBuy.push(products[i])
    }
  }
  return canBuy
}
const userCanBuyIt = getProductsCanUserBuy(popularProducts, productPrices, userMoneyHas)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
alert(`Маючи ${userMoneyHas} ви можете купити: ${userCanBuyIt}`)
*/

//========================================================================================================================================================

// ** 6 **
////  Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
//// 1)	за весь рік;
//// 2)	у першій половині року;
//// 3)	у другій половині року;
//// 4)	за літо;
//// 5)	за ІІ квартал;
//// 6)	за парні місяці (з парними номерами);
//// 7)	за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо функцію для генерації платіжок помісячно
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
// функція для генерації платіжок помісячно
function getMonthlyPayment() {
  let monthPay = []
  for (let i = 0; i < 12; i++) {
    monthPay.push(getRandomNumber(50, 150))
  }
  return monthPay
}
const yearsPayment = getMonthlyPayment()

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
// функція для підрахунку сумарного річного платежу
// також річний платіж можна було знайти додавши платежі за 1 и 2 півріччя
function getSummaryPaymentPerYears(payments) {
  let sumPay = 0
  for (let i = 0; i < payments.length; i++) {
    sumPay += payments[i]
  }
  return sumPay
}
const summaryPaymentPerYears = getSummaryPaymentPerYears(yearsPayment)
// функція для підрахунку платежу у першій половині року
function getFirstHalfPayment(payments) {
  let halfCounter = 0
  for (let i = 0; i < 6; i++) {
    halfCounter += payments[i]
  }
  return halfCounter
}
const firstHalfPayment = getFirstHalfPayment(yearsPayment)
// функція для підрахунку платежу у другій половині року
function getSecondHalfPayment(payments) {
  let halfCounter = 0
  for (let i = 6; i > 5 && i < payments.length; i++) {
    halfCounter += payments[i]
  }
  return halfCounter
}
const secondHalfPayment = getSecondHalfPayment(yearsPayment)

// функція для підрахунку платежу за літо
function getSummerPayments(payments) {
  let summerCounter = 0
  for (let i = 5; i < 8; i++) {
    summerCounter += payments[i]
  }
  return summerCounter
}
const summerPayments = getSummerPayments(yearsPayment)
// функція для підрахунку платежу за ІІ квартал
function getSecondQuaterPayment(payments) {
  let queterCounter = 0
  for (let i = 3; i < 6; i++) {
    queterCounter += payments[i]
  }
  return queterCounter
}
const secondQuaterPayment = getSecondQuaterPayment(yearsPayment)

// функція для підрахунку платежу за парні місяці (з парними номерами)
function getEvenMonthPayment(payments) {
  let evenCounter = 0
  for (let i = 1; i <= payments.length; i++) {
    if (i % 2 === 0) {
      evenCounter += payments[i - 1]
    }
  }
  return evenCounter
}
const evenMonthPayment = getEvenMonthPayment(yearsPayment)
// функція для підрахунку платежу місяці які є початковими у сезоні (весна, літо, осінь, зима)
function getFirstFromQuarterPayment(payments) {
  let firstQuarterCounter = 0
  for (let i = 0; i < payments.length; i++) {
    switch (i) {
      case 2:
        firstQuarterCounter += payments[i]
        break
      case 5:
        firstQuarterCounter += payments[i]
        break
      case 8:
        firstQuarterCounter += payments[i]
        break
      case 11:
        firstQuarterCounter += payments[i]
        break
    }
  }
  return firstQuarterCounter
}
const firstFromQuarterPayment = getFirstFromQuarterPayment(yearsPayment)




// function getSummYearsPayments(payments, startMonth, finishMonth, monthQuantity) {
// 	let sumForEverything = 0
// 	for (let i = 0; i < payments.length; i++) {
//     sumForEverything += payments[i]
//   }
//   return sumForEverything
// }

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
// alert(`
// 1. Ви сплатили за весь рік ${summaryPaymentPerYears}
// 2. Ви сплатили у першій половині року ${firstHalfPayment}
// 3. Ви сплатили у другій половині року ${secondHalfPayment}
// 4. Ви сплатили за літо ${summerPayments}
// 5. Ви сплатили за ІІ квартал ${secondQuaterPayment}
// 6. Ви сплатили за парні місяці (з парними номерами) ${evenMonthPayment}
// 7. Ви сплатили за місяці, які є початковими у сезоні (весна, літо, осінь, зима) ${firstFromQuarterPayment}

// `)
