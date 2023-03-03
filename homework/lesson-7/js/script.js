/*
// ** 0 **
//// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Задаємо користувачу питання і отримуємо номер місяця
// Створюємо функцію 
// Порівнюємо отриману відповідь з номерами місяців
// Виводимо користувачу відповідну пору року
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const userMonthNumber = parseInt(prompt('Введіть номер місяця',''))
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getSeasonName(monthNumber) {
  let seasonName = ""
  if (monthNumber <= 2 || monthNumber === 12) {
    seasonName = "Winter"
  } else if (monthNumber <= 5) {
    seasonName = "Spring"
  } else if (monthNumber <= 8) {
    seasonName = "Summer"
  } else {
    seasonName = "Autumn"
  }
  return seasonName
}
let userSeasonNameShow = getSeasonName(userMonthNumber)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
confirm(`It's ${userSeasonNameShow} now`)
// document.write(`It's ${userSeasonName} now`)
*/
/*
// ** 1 **
//// Створити функцію, яка за номером місяця повертає його назву.
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо від користувача номер місяця
// Створюємо функцію
// Перевіряємо вказаний користувачем номер місяця і присвоюємо назву місяця змінній
// Виводимо користувачу назву місяця
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const userMonthNumber = parseInt(prompt("Введіть номер місяця", ""))

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getMonthName(monthNumber) {
  let monthName = ""
  switch (monthNumber) {
    case 1:
      monthName = "January"
      break
    case 2:
      monthName = "February"
      break
    case 3:
      monthName = "March"
      break
    case 4:
      monthName = "April"
      break
    case 5:
      monthName = "May"
      break
    case 6:
      monthName = "June"
      break
    case 7:
      monthName = "July"
      break
    case 8:
      monthName = "August"
      break
    case 9:
      monthName = "September"
      break
    case 10:
      monthName = "October"
      break
    case 11:
      monthName = "November"
      break
    case 12:
      monthName = "December"
      break
    default:
      monthName = "You wrote incorrect month number"
      break
  }
  return monthName
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
let userMonthNameShow = getMonthName(userMonthNumber)
confirm(`${userMonthNameShow} now`)
// document.write(`It's ${userMonthNameShow} now`)
*/
/*
// ** 2 **
//// Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// отримуємо від користувача номер дня
// створюємо функцію
// перевіряємо введений користувачем день
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const userDayNumber = parseInt(prompt("Введіть номер дня", ""))
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getDayName(dayNumber) {
  let dayName = ""
  switch (dayNumber) {
    case 1:
      dayName = "Sunday. It's a day off"
      break
    case 2:
      dayName = "Monday. It's a working day"
      break
    case 3:
      dayName = "Tuesday. It's a working day"
      break
    case 4:
      dayName = "Wednesday. It's a working day"
      break
    case 5:
      dayName = "Thursday. It's a working day"
      break
    case 6:
      dayName = "Friday. It's a working day"
      break
    case 7:
      dayName = "Saturday. It's a day off"
      break
    default:
		dayName = "You wrote incorrect day number. Please, try again"
      break
  }
  return dayName
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
let userDayNameShow = getDayName(userDayNumber)
confirm(`${userDayNameShow}`)
*/
/*
// ** 3 **
////Створити окремі функції, які для 4 чисел знаходять:
//// 1)суму;
//// 2)добуток;
//// 3)середнє арифметичне;
//// 4)мінімальне значення.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо від користувача 4 числа за допомогою циклу
// Створюємо 4 функції
// Записуємо обчислення кожної математичної дії
// Повертаємо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
let userNum1, userNum2, userNum3, userNum4
for (let i = 1; i <= 4; i++) {
  switch (i) {
    case 1:
      userNum1 = parseFloat(prompt(`Введіть число ${i}`, ""))
      break
    case 2:
      userNum2 = parseFloat(prompt(`Введіть число ${i}`, ""))
      break
    case 3:
      userNum3 = parseFloat(prompt(`Введіть число ${i}`, ""))
      break
    case 4:
      userNum4 = parseFloat(prompt(`Введіть число ${i}`, ""))
      break
  }
}
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getSum(a, b, c, d) {
  return a + b + c + d
}
function getMultiple(a, b, c, d) {
  return a * b * c * d
}
function getAvarageNum(a, b, c, d) {
  return (a + b + c + d) / arguments.length
}
function getMinNumber(a, b, c, d) {
  let minNum = arguments[0]
  for (let i = 0; i < arguments.length; i++) {
    if (minNum > arguments[i]) {
      minNum = arguments[i]
    }
  }
  return minNum
}
const sumNumbers = getSum(userNum1, userNum2, userNum3, userNum4)
const multipleNumbers = getMultiple(userNum1, userNum2, userNum3, userNum4)
const avarageNumber = getAvarageNum(userNum1, userNum2, userNum3, userNum4)
const minNumber = getMinNumber(userNum1, userNum2, userNum3, userNum4)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
confirm(`
1)сума = ${sumNumbers}
2)добуток = ${multipleNumbers}
3)середнє арифметичне = ${avarageNumber.toFixed(2)}
4)мінімальне значення = ${minNumber}
`)
*/
/*
// ** 4 **
//// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних,
//// кількість додатних, кількість більших за 100.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо від користувача числа за допомогою циклу
// Створюємо відвовідні функції
// виконуємо в функціях дії над числами
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
let userNum1, userNum2, userNum3
for (let i = 1; i <= 3; i++) {
  switch (i) {
    case 1:
      userNum1 = parseFloat(prompt(`Введіть число ${i}`, ""))
      break
    case 2:
      userNum2 = parseFloat(prompt(`Введіть число ${i}`, ""))
      break
    case 3:
      userNum3 = parseFloat(prompt(`Введіть число ${i}`, ""))
      break
  }
}
function getSomeOperations(a, b, c) {
  let evenNumCounter = 0
  let positiveNumCounter = 0
  let numMoreHundred = 0
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      evenNumCounter += 1
    }
    if (arguments[i] > 0) {
      positiveNumCounter += 1
    }
    if (arguments[i] > 100) {
      numMoreHundred += 1
    }
  }

  return [evenNumCounter, positiveNumCounter, numMoreHundred]
}
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
const [summaryEvenNumbers, summaryPositiveNumbers, summaryMoreHundredNumbers] = getSomeOperations(userNum1, userNum2, userNum3)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
confirm(`
1. Кількість парних = ${summaryEvenNumbers}
2. Кількість додатних = ${summaryPositiveNumbers}
3. Кількість більших за 100 = ${summaryMoreHundredNumbers}
`)
*/
/*
// ** 5 **
////  Створити окремі функції, які переводять:
//// 1)	Сантиметри у дюйми;
//// 2)	Кілограми у фунти;
//// 3)	Кілометри у милі.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо від користувача вхідні дані
// Створюємо функції
// Проводимо перетворення отриманих даних в потрібні
// Виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **



const userSantimeters = parseFloat(prompt('Скільки сантиметрів ви хочете перевести в дюйми?', ''))
const userKilograms = parseFloat(prompt('Скільки кілограм ви хочете перевести в фунти?', ''))
const userKilometers = parseFloat(prompt('Скільки кілометрів ви хочете перевести в милі?', ''))
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function santimetersToInch(santimeters) {
	const oneSantimInOneInch = 2.54
	return santimeters / oneSantimInOneInch
}
function kilogramsToPounds(kilograms) {
	const kilogramInPound = 2.205
  return kilograms * kilogramInPound
}
function kilometersToMiles(kilometers) {
	const kilometersInMile = 1.609
  return kilometers / kilometersInMile
}
const santimetersInInch = santimetersToInch(userSantimeters)
const kilogramsInPounds = kilogramsToPounds(userKilograms)
const kilometersInMiles = kilometersToMiles(userKilometers)
// ##4 ** Display the result ** Виведення результату ** Вывод результата **

document.write(`
1. Ви ввели ${userSantimeters} сантиметрів - це ${santimetersInInch.toFixed(2)} дюймів
2. Ви ввели ${userKilograms} кілограм - це ${kilogramsInPounds.toFixed(3)} фунтів
3. Ви ввели ${userKilometers} кілометрів - це ${kilometersInMiles.toFixed(3)} миль
`)
*/
/*
// ** 6 **
//// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців
//// (таблиця заповнюється заданим фіксованим повідомленням).
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Створюємо функцію
// створюємо цикли
// Будуємо таблицю
// показуємо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function tableCreate(rows, columns) {
  document.write(`<table style="border: 3px solid #fff; padding: 1px;">`)
  for (let i = 0; i < rows; i++) {
    document.write(`<tr>`)
    for (let j = 1; j <= columns; j++) {
      document.write(`<td style="border: 2px solid #fff; padding: 15px;"></td>`)
    }
    document.write(`</tr>`)
  }
  document.write(`</table>`)
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
tableCreate(80, 80)
*/
/*
// ** 7 **
//// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень
//// (шляхи до зображень передаються у функцію)

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Створюємо функцію, аргумент - шлях до зображень
// генеруємо рандомне число
// виводимо результат з розміткою і шляхом до картинку через аргумент функції
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getRandomImage(imgFolder) {
  let randomNumber = Math.floor(Math.random() * 4) + 1
  let randomImage = document.write(`
  <div style="display: flex; align-items: center; justify-content: center;">
  <img style="max-width: 700px; max-height: 700px;" src="${imgFolder}${randomNumber}.png" alt="picture">
  </div>
  `)
  return randomImage
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const userRandomImage = getRandomImage('../img/')
*/
/*
// ** 8 **
//// Створити функцію, яка виводить банер (у функцію передаються: зображення, 
//// заголовок та посилання, куди переходимо при кліку на зображення (тег img 
//// повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// створюємо функцію з потрібними аргументами
// створюємо розмітку для відображення банера
// заповнюємо розмітку аргументами з функції
// виводими банер
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function showBanner(img, title, link) {
	let banner = document.write(`
	
	<div style="display: flex; align-items: center; justify-content: center; row-gap: 15px; flex-direction: column;">
<a href="${link}" target="_blank">
	<img style="max-width: 700px; max-height: 700px;" src="${img}" alt="banner">
</a>
<h1 style="font-size: 22px; color: #fff;">${title}</h1>
</div>
	`)
	return banner
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const userBanner = showBanner('../img/1.png','Its your banner','https://www.google.com')
*/
/*
// ** 9 **
//// Дано покази температур (довільна кількість).
//// Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо від користувача температури, використовуємо цикл
// Створюємо функцію, яка приймає ці показники
// Рахуємо відємні
// виводимо відємні
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const quantityOfTemparatures = parseInt(prompt("Скільки показників температури хочете ввести?", ""))

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getQuantityNegativeTemperatures(temperAmount) {
  let negativeCounter = 0
  for (let i = 1; i <= temperAmount; i++) {
    let userTemperature = parseInt(prompt(`Введіть ${i} показник температури`, ""))
    if (userTemperature < 0) {
      negativeCounter += 1
    }
  }
  return negativeCounter
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const userNegativeTempShow = getQuantityNegativeTemperatures(quantityOfTemparatures)
confirm(`Температура менше нуля була ${userNegativeTempShow} разів!брррр`)
*/
/*
// ** 10 **
//// Дано покази температур (довільна кількість).
//// Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Отримуємо від користувача температури, використовуємо цикл
// Створюємо функцію, яка приймає ці показники
// Рахуємо додатні та обчислюємо середнє значення
// виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const quantityOfTemparatures = parseInt(prompt("Скільки показників температури хочете ввести?", ""))

// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
function getQuantityNegativeTemperatures(temperAmount) {
  let positiveCounter = 0
  let summaryPositiveTemperature = 0
  for (let i = 1; i <= temperAmount; i++) {
    let userTemperature = parseInt(prompt(`Введіть ${i} показник температури`, ""))
    if (userTemperature > 0) {
      positiveCounter += 1
      summaryPositiveTemperature += userTemperature
    }
  }
  let avaragePositiveTemperature = summaryPositiveTemperature / positiveCounter
  return avaragePositiveTemperature
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const useravaragePositiveTemperatureShow = getQuantityNegativeTemperatures(quantityOfTemparatures)
confirm(`Середня плюсова температура ${useravaragePositiveTemperatureShow.toFixed(1)}`)
*/
