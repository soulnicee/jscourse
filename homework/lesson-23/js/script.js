/*
// ** 0 **

// Задача  1. Користувач іде у відпустку на 56 днів. Визначити дату на момент його повернення.

const currentDate = new Date()
function vacationEndsDate(currentDate, vacationDaysQuantity) {
  currentDate.setDate(currentDate.getDate() + vacationDaysQuantity)
  let currentWeekDay = currentDate.getDay()
  if (currentWeekDay === 0) currentDate.setDate(currentDate.getDate() + 1)
  if (currentWeekDay === 6) currentDate.setDate(currentDate.getDate() + 2)
  return currentDate.toLocaleDateString("uk-UA")
}
const vacEnds = vacationEndsDate(currentDate, 56)
console.log(vacEnds)

// ** 1 **

// Задача 2 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.

function isYogurtGood(producedYear, producedMonth, producedDay, daysOfExpiration) {
  const currentDate = new Date()
  const yogurtProducedDate = new Date(producedYear, producedMonth - 1, producedDay)
  const experationDate = yogurtProducedDate.setDate(yogurtProducedDate.getDate() + daysOfExpiration)
  let message = ""
  currentDate <= experationDate ? (message = "Йогурт можна вживати") : (message = "Йогурт не можна вживати")
  return message
}

let myYogurt = isYogurtGood(2023, 5, 20, 7)
console.log(myYogurt)

// ** 2 **

// Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.

function getRandomNumber(minNum, maxNum) {
  return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
}
function getArray(arrLength, minNum, maxNum) {
  let arr = []
  for (let i = 0; i < arrLength; i++) {
    arr.push(getRandomNumber(minNum, maxNum))
  }
  return arr
}

let myArr = getArray(1000, 1, 800)
let myArr1 = getArray(1000, 1, 800)

function bubbleSort(array) {
  let changed
  const length = array.length
  let start = Date.now()
  do {
    changed = false
    for (let i = 1; i < length; i++) {
      if (array[i - 1] > array[i]) {
        ;[array[i - 1], array[i]] = [array[i], array[i - 1]]
        changed = true
      }
    }
  } while (changed)
  let finish = Date.now()
  let workTime = (finish - start) / 1000
  return workTime + "sec"
}

console.log(bubbleSort(myArr))

function insertionSort(array) {
  let key, i
  const length = array.length
  let start = Date.now()
  for (let k = 1; k < length; k++) {
    key = array[k]
    i = k - 1
    while (i >= 0 && array[i] > key) {
      array[i + 1] = array[i]
      i = i - 1
    }
    array[i + 1] = key
  }
  let finish = Date.now()
  let workTime = (finish - start) / 1000
  return workTime + "sec"
}
console.log(insertionSort(myArr1))

// ** 3 **
function addNumbersTime() {
  let firstNum = getRandomNumber(1, 100)
  let secondNum = getRandomNumber(1, 100)
  let correctAnswer = firstNum + secondNum
  let start = Date.now()
  let userSum = parseInt(prompt(`${firstNum} + ${secondNum} = ?`))
  let finish = Date.now()

  let userAddTime = (finish - start) / 1000
  if (parseInt(userSum) === correctAnswer) alert(`Вірно. Витратили ${userAddTime} секунд`)
  if (parseInt(userSum) !== correctAnswer) alert(`Не вірно. Витратили ${userAddTime} секунд`)
  return userAddTime + "sec"
}

let myAnswer = addNumbersTime()
console.log(myAnswer)

const stringsArr = ["10 псів", "пес та кіт", "чайка і голуб", "99%", "1 пес з'їв 3 голобув і 1 кота", "пес Тор і ворон Сюнін", "36.6т", "10 псів напали на 13 голубів. Загинуло 3 пса і 12 голубів.", "Елітні пси: Тор і Арнольд", "17 псів, 4 кішки, 9 білок і 11 їжак пішли на полювання. Хотіли вполювати бобра Норберта. Бобер був дуже хитрий та мав першокласну боброву зброю, а мисливці на озброєнні мали лише свої лапи, гілки, кігті та хвости. І видатний розум! В результаті бобра з'їли."]
//Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
let stringsWithNum = []
for (const str of stringsArr) {
  if (/[0-9]/.test(str)) stringsWithNum.push(str)
}
console.log(stringsWithNum)
// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
let stringsWithOutNum = []
for (const str of stringsArr) {
  if (!/[0-9]/.test(str)) stringsWithOutNum.push(str)
}
console.log(stringsWithOutNum)
// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
let stringsWithVowels = []
for (const str of stringsArr) {
  if (/[аеиіоуяюєї]/.test(str)) stringsWithVowels.push(str)
}
console.log(stringsWithVowels)

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
let stringsWithOutVowels = []
for (const str of stringsArr) {
  if (!/[аеиіоуяюєї]/.test(str)) stringsWithOutVowels.push(str)
}
console.log(stringsWithOutVowels)
// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
let stringsWith1or3 = []
for (const str of stringsArr) {
  if (/(1|3)/.test(str)) stringsWith1or3.push(str)
}
console.log(stringsWith1or3)
// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
let oneString = stringsArr[9]
let allStr9Digits = oneString.match(/[0-9]/g)
console.log(allStr9Digits)
// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
let allPunctDigit = oneString.match(/[.,!?:;-]/g)
console.log(allPunctDigit)
// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
let someNewString = oneString.split(/[.,!?:;-]+/)
console.log(someNewString)
// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
let oneStrNew = oneString + "22.05.2023"
if (/\d{2}.\d{2}.\d{4}/.test(oneStrNew)) console.log("yes, its here")
// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
function counterNumbers(string) {
  let count = 0
  let fintChapter = string.match(/\b\d{2}\b/g)
  if (fintChapter) {
    for (const item of fintChapter) {
      count++
    }
  }
  return count
}

console.log(counterNumbers(oneStrNew))
// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
let bankInfo = "Привіт. Твоя карта 3575-7858-5523-0044 готова. Відділення працює з 8 до 17"
function serchCardNumbers(string) {
  let cardFormat = /\b\d{4}-\d{4}-\d{4}-\d{4}\b/
  if (cardFormat.test(string)) console.log(string.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g))
  else console.log("Карта не готова")
}
serchCardNumbers(bankInfo)
// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)

let url = "www.sovistinet.gov"
if (url.endsWith("gov")) console.log("Не довіряйте інформації на цьому сайті!")
else console.log("Це безпечний сайт!")

// Задача 13. Вибрати усі роки після 2021 року з отриманого повідомлення
let article = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem amet nobis quae 2023 ipsa, magnam rerum eveniet quis debitis? Laborum eaque, sint 2021 tempore maxime excepturi beatae esse 2030 obcaecati alias quia? Lorem ipsum dolor sit amet 2039 consectetur adipisicing elit. Cupiditate corrupti deleniti non dignissimos neque! Sequi earum sapiente fugiat totam architecto numquam, quod, qui laboriosam eaque at vitae distinctio odio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate voluptates temporibus nostrum nisi, autem aliquam iste ad minima, 2040 debitis eveniet harum eligendi pariatur nobis, accusamus rerum quasi vel quod veniam?"
function searchYearsInArticles(article, year) {
  let findYears = article.match(/\d{4}/gm)
  let nededYears = findYears.filter((item) => item > year)
  return nededYears
}
console.log(searchYearsInArticles(article, 2021))
// Задача 14. Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+380»)
let telephoneNumber = "+380986969236"
function phoneNumChecker(num) {
  let expr = /\+380+\d{9}/gm
  let res = ""
  expr.test(num) ? (res = "ukr") : (res = "not ukr")
  return res
}
console.log(phoneNumChecker(telephoneNumber))
// Задача 15. Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
let userName = "Ivan Shustriy"
let newUserName = userName.split(" ").join("-")
console.log(newUserName)
// Задача 16. Користувач вводить дату у форматі «день.місяць.рік». Отримати рядкове представлення дати у форматі «день/місяць/рік»
let userDate = "22.05.2023"
let newUserDate = userDate.replaceAll(".", "/")
console.log(newUserDate)
// Задача 17. Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»). Визначити, чи  є це день вихідним
let userDay = "mon"
let expr = /sun|sat|0|6/i
if (expr.test(userDay)) console.log("Вихідний")
else console.log("Йди працюй")
*/

