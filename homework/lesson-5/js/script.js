/*
// ** 0 **
// Отримуємо дані
const userNumbersQuantity = parseInt(prompt("Скільки випадкових чисел хочете вивести на екран? 1-100"), "")
for (let i = 0; i < userNumbersQuantity; i++) {
  const minNumber = 1,
    maxNumber = 100
  let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
  document.write(`<ul>`)
  document.write(`<li>${randomNumber}</li>`)
  document.write(`</ul>`)
}
*/
/*
// ** 1 **
// Отримуємо дані
for (let i = 1; i <= 10; i++) {
  document.write(`
	Product #${i} <input style="margin-bottom: 10px;margin-left: 10px;"><br>
	`);
}
*/
/*
// ** 2 **
// Отримуємо дані
document.write(`<table style="border: 3px solid #000; padding: 1px;">`);
document.write(`<tr>`);
for (let i = 1; i <= 7; i++) {
	document.write(`<td style="border: 2px solid #000; padding: 15px;">${i}</td>`)
}
document.write(`</tr>`);
document.write(`</table>`);
*/
/*
// ** 3 **
// Отримуємо дані
document.write(`<table style="border: 3px solid #000; padding: 1px;">`);
for (let i = 0; i < 3; i++) {
  document.write(`<tr>`);
  for (let j = 1; j <= 7; j++) {
    document.write(`<td style="border: 2px solid #000; padding: 15px;">${j}</td>`);
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
*/
/*
// ** 4 **
// Отримуємо дані
let counter = 1;
document.write(`<table style="border: 3px solid #000; padding: 1px;">`);
for (let i = 1; i <= 3; i++) {
  document.write(`<tr>`);
  for (let j = 1; j <= 3; j++) {
    document.write(`<td style="border: 2px solid #000; padding: 15px;">${counter}</td>`);
	 counter++
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
*/
/*
// ** 5 **
// Отримуємо дані
let counter = 1;
for (let i = 1; i <= 3; i++) {
  document.write(`<table style="border: 3px solid #000; padding: 1px;">`);
  for (let j = 1; j <= 3; j++) {
    document.write(`<tr>`);
    for (let k = 1; k <= 3; k++) {
      document.write(`<td style="border: 2px solid #000; padding: 15px;">${counter}</td>`);
      counter++;
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
}
*/
/*
// ** 6 **
// Отримуємо дані
const quantityOfArticles = parseInt(prompt("Скільки абзаців вивести?", ""));
for (let i = 1; i <= quantityOfArticles; i++) {
  document.write(`<h1>Заголовок ${i}</h1>`);
  for (let j = 1; j <= i; j++) {
    document.write(`<p>Розділ ${i}, параграф ${j}</p>`);
  }
}
*/
/*
// ** 7 **
// Отримуємо дані
const userNumber = parseInt(prompt("Загадайте число від 1 до 10", ""));
const minNumber = 1,
  maxNumber = 10;

for (let i = 0; i < 3; i++) {
  let computerNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  let userAnswer = window.confirm(`Ви загадали число ${computerNumber}?`);
  if (userAnswer) {
    document.write("Я вгадав!");
    break;
  }
  if (i === 2) {
    document.write("Я не вгадав!");
  }
}
*/
/*
// ** 8 **
// Отримуємо дані
const userNumber = parseInt(prompt("Загадайте число від 1 до 10", ""))
const minNumber = 1,
  maxNumber = 10
let userAnswer = 0
while (!userAnswer) {
  let computerNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
  userAnswer = confirm(`Ви загадали число ${computerNumber}?`)
  if (userAnswer) {
    document.write("Я вгадав!")
  }
}
*/
/*
// ** 9 **
// Отримуємо дані
let userNumberOne = parseInt(prompt("Введіть перше число", "")),
  userNumberTwo = parseInt(prompt("Введіть друге число", "")),
  result = 0;
if (userNumberOne > userNumberTwo) {
  let userNumberCache = userNumberOne;
  userNumberOne = userNumberTwo;
  userNumberTwo = userNumberCache;
}

for (let i = userNumberOne + 1; i < userNumberTwo; i++) {
  if (i % 2) {
    result += i;
  }
}

document.write(`
Сума всіх непарних чисел в заданому діапазоні дорівнює ${result}
Результат обчислення не включає введені числа. 
`);
*/
/*
// ** 10 **
// Отримуємо дані

let userNumberOne = parseInt(prompt("Введіть перше число", "")),
  userNumberTwo = parseInt(prompt("Введіть друге число", "")),
  result = 0,
  oddCounter = 0;
if (userNumberOne > userNumberTwo) {
  let userNumberCache = userNumberOne;
  userNumberOne = userNumberTwo;
  userNumberTwo = userNumberCache;
}

for (let i = userNumberOne + 1; i < userNumberTwo && oddCounter < 5; i++) {
  if (i % 2) {
    result += i;
    oddCounter++;
  }
}

document.write(`
Сума 5 перших непарних чисел в заданому діапазоні дорівнює ${result}
Результат обчислення не включає введені числа. 
`);
*/
/*
// ** 11 **
// Отримуємо дані
const minSlotColumn = 1,
  maxSlotColumn = 4,
  firstSlotNumber = Math.floor(Math.random() * (maxSlotColumn - minSlotColumn + 1)) + minSlotColumn,
  secondSlotNumber = Math.floor(Math.random() * (maxSlotColumn - minSlotColumn + 1)) + minSlotColumn,
  thirdSlotNumber = Math.floor(Math.random() * (maxSlotColumn - minSlotColumn + 1)) + minSlotColumn;
let userWin = 0,
  imagesToShow = ``;
for (let i = 0; i < 3; i++) {
  let imageNumber;
  switch (i) {
    case 0:
      imageNumber = firstSlotNumber;
      break;
    case 1:
      imageNumber = secondSlotNumber;
      break;
    case 2:
      imageNumber = thirdSlotNumber;
      break;
  }
  imagesToShow += `<div style="flex: 0 0 33.333% height: 150px;"><img src="./img/${imageNumber}.png" style="object-fit: contain; width: 100%; height: 100%;" alt="slot image"></div>`;
}

if (firstSlotNumber === secondSlotNumber && firstSlotNumber === thirdSlotNumber) {
  switch (firstSlotNumber) {
    case 1:
      userWin = "Ви виграли 100 гривень";
      break;
    case 2:
      userWin = "Ви виграли 200 гривень";
      break;
    case 3:
      userWin = "Ви виграли 500 гривень";
      break;
    case 4:
      userWin = "Ви виграли 1000 гривень";
      break;
  }
} else {
	userWin = 'Ви не виграли нічого!'
}
document.write(`
  
    <div style="display: flex; column-gap: 20px; width: 800px; margin: 0px auto; margin-bottom: 20px;">${imagesToShow}</div>
	 <div style="color: red; text-align: center; font-size: 32px;">${userWin}</div>
 
  `);
*/

/*
// ** 12 **
// Отримуємо дані
alert("Вітаємо. Це морський бій. Вам потрібно ввести висоту та ширину ігрового поля. За замовчуванням 10 * 10. На полі всього один однопалубний корабль. Ви маєте 10 пострілів. Щоб продовжити натисніть ОК");
const fieldRowsNumber = parseInt(prompt("Введіть висоту ігрового поля", "10"));
const fieldColumnsNumber = parseInt(prompt("Введіть ширину ігрового поля", "10"));
const shipRowPlace = Math.floor(Math.random() * (fieldRowsNumber - 1 + 1)) + 1;
const shipColumnPlace = Math.floor(Math.random() * (fieldColumnsNumber - 1 + 1)) + 1;
const quantityOfShots = 10;
let result = ``;

for (let i = 1; i <= quantityOfShots; i++) {
  let userShotRow = parseInt(prompt(`Постріл ${i}! Введіть координати корабля по осі Х, від 1 до ${fieldRowsNumber}`, ""));
  let userShotColumn = parseInt(prompt(`Постріл ${i}! Введіть координати корабля по осі Y, від 1 до ${fieldColumnsNumber}`, ""));
  if (shipRowPlace === userShotRow && shipColumnPlace === userShotColumn) {
    result = `Вітаємо. Ви потопили корабель з ${i} спроби.`;
    break;
  }
  if (i === 10) {
    result = `Ви використали всі спроби. Корабель втік`;
  }
}

document.write(`${result}`);
*/
/*
// ** 13 **
// Отримуємо дані
const productPrice = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let userPay, result;
alert(`Вам потрібно сплатити ${productPrice}$`);
let userAnswer = 0
userPay = userAnswer;
while (userPay < productPrice) {
  let moneyNeed = productPrice - userPay;
  userAnswer = parseInt(prompt(`Скільки можете оплатити? Ще залишилось до сплати ${moneyNeed}`, ""));
  userPay += userAnswer;
}
if (userPay > productPrice) {
  let moneyBack = userPay - productPrice;
  result = `Покупка оплачена. Здача - ${moneyBack}`;
} else result = `Покупка оплачена.`;
document.write(`${result}`);
*/
/*
// ** 14 **
// Отримуємо дані
let summaryTemperatures = 0;
const userTemperatureIndex = parseInt(prompt("Скільки показників температури хочете ввести?", ""));
for (let i = 1; i <= userTemperatureIndex; i++) {
  let userTemperature = parseFloat(prompt(`Введіть температуру.`, ""));
  summaryTemperatures += userTemperature
}
let averageTemperature = summaryTemperatures / userTemperatureIndex
document.write(`${averageTemperature.toFixed(1)}`);
*/
/*
// ** 15 **
// Отримуємо дані
const userWeeksQuantity = parseInt(prompt("Введіть кількість тижнів", ""));
let summaryUserProfit = 0;
let summaryProfitPerWeek = 0;

for (let i = 1; i <= userWeeksQuantity; i++) {
  for (let j = 1; j <= 7; j++) {
    let userProfitPerDay = parseFloat(prompt(`Введіть скільки коштів ви заробили за ${i} тиждень ${j} день`, ""));
    summaryProfitPerWeek += userProfitPerDay;
  }
  document.write(`Сумарно заробили за ${i} тиждень ${summaryProfitPerWeek} гривень </br>`);
  summaryUserProfit += summaryProfitPerWeek;
  summaryProfitPerWeek -= summaryProfitPerWeek;
}
document.write(`Сумарно заробили ${summaryUserProfit} гривень за ${userWeeksQuantity} тижнів або за ${userWeeksQuantity * 7} днів`);
*/

//========================================================================================================================================================
// Extra task
/*
// ** 0 **
// Отримуємо дані
let userNumber = parseInt(prompt("Введіть числа для підрахунку суми. Щоб закінчити - введіть 0", ""))
let userNumbersSum = userNumber
while (userNumber !== 0) {
  userNumber = parseInt(prompt("Введіть число", ""))
  userNumbersSum += userNumber
}

document.write(`Сума введених чисел ${userNumbersSum}`)
*/
/*
// ** 1 **
// Отримуємо дані
let userNumber = parseInt(prompt("Введіть числа для підрахунку добутка. Щоб закінчити - введіть 0", ""))
let userNumbersMult = userNumber
while (userNumber !== 0) {
  userNumber = parseInt(prompt("Введіть число", ""))
  if (userNumber === 0) {
    break
  }
  userNumbersMult *= userNumber
}

document.write(`добуток введених чисел ${userNumbersMult}`)
*/
/*
// ** 2 **
// Отримуємо дані
let userLetter = prompt('Введіть літеру. Щоб закінчити - введіть "a". Використовуйте латинську розкладку клавіатури.','')
let userWord = userLetter
while (userLetter !== 'a') {
	userLetter = prompt('Введіть літеру. Щоб закінчити - введіть "a". Використовуйте латинську розкладку клавіатури.', "")
	userWord += userLetter
}
userWord = userWord.split('').reverse().join('')
document.write(`${userWord}`)
*/
/*
// ** 3 **
// Отримуємо дані
let startNumber = parseInt(prompt('Введіть початкове значення суми чисел', ''))
let numbersSum = startNumber
while (numbersSum < 100) {
	startNumber = parseInt(prompt("Введіть числа які хочете додати до початкового", ""))
	numbersSum += startNumber
}
document.write(`${numbersSum}`)
*/
/*
// ** 4 **
// #0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// З клавіатури поступово вводяться числа. Знайти суму перших N парних чисел.
// Введення чисел
// Введення N - скільки парних чисел потрібно додавати
// Знаходження суми парних чисел

// #1 ** Designation of values ** Позначення величин ** Обозначение значений **

// №2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
const userQuantityOfSummNumbers = parseInt(prompt("Суму скількох парних чисел хочете знайти?", ""))
const userNumbersQuantity = parseInt(prompt("Скільки чисел хочете ввести?", ""))
let evenNumbersSumm = 0
let evenNumbersCounter = 0
let numbersCounter = 0
// №3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
while (numbersCounter < userNumbersQuantity) {
  let userNumbers = parseInt(prompt("Введіть числа, які хочете додавати. Можна вводити і парні числа, і не парні. Щоб закнчити - натисніть відміна", ""))
  if (userNumbers % 2 !== 0 && evenNumbersCounter < userQuantityOfSummNumbers) {
    evenNumbersSumm += userNumbers
    evenNumbersCounter++
  }
  numbersCounter++
}
// №4 ** Display the result ** Виведення результату ** Вывод результата **
document.write(`Сума перших ${userQuantityOfSummNumbers} парних чисел становить ${evenNumbersSumm}`)
*/
/*
// ** 5 **
//  З клавіатури вводяться два числа N i M (N<M). Вивести а екран числа
// N---M
// N+1 --- M-1
// N+2 --- M-2
// N+3 --- M-3
// . . . . . . 
// Виведення завершити коли число справа стане меншим за число зліва.

// #0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Введеня чисел N i M
// Виконуємо операції
// Порівнюємо числа
// Використовуємо цикл ду вайл
// #1 ** Designation of values ** Позначення величин ** Обозначение значений **

// №2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
let userNumberOne = parseInt(prompt("Введіть перше число (має бути меншим за друге)", ""))
let userNumberTwo = parseInt(prompt("Введіть друге число (має бути більшим за перше)", ""))
if (userNumberOne > userNumberTwo) {
  let temp = userNumberOne
  userNumberOne = userNumberTwo
  userNumberTwo = temp
}
// №3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
do {
	document.write(`${userNumberOne} --- ${userNumberTwo}<br>`)
	userNumberOne++
	userNumberTwo--
} while (userNumberOne < userNumberTwo)
// №4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 6 **
// На екрані виводиться меню:
// 1. Сказати «Привіт».
// 2. Сказати «Зачекай».
// 3. Сказати «До побачення».
// 4. Вихід.
// Шляхом вибору пунктів меню виводити відповідні повідомлення, поки не буде вибрано пункт номер 4.

// #0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Вивести меню
// Запропонувати користувачу вибір і виводити відповідне повідомлення
// #1 ** Designation of values ** Позначення величин ** Обозначение значений **

// №2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
let menuAsk = 0
// №3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
while (menuAsk < 4) {
  menuAsk = parseInt(prompt("1.Сказати Привіт. 2.Сказати Зачекай. 3.Сказати До побачення. 4.Вихід", ""))
  let menuAnswer
  switch (menuAsk) {
    case 1:
      menuAnswer = confirm("Привіт!")
      break
    case 2:
      menuAnswer = confirm("Зачекай!")
      break
    case 3:
      menuAnswer = confirm("До побачення!")
      break
    case 4:
      menuAnswer = confirm("Вихід здійснено!")
      break
  }
}

// №4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 7 **

// На екрані виводиться меню:
// 	1.Ініціалізація (сума=0)
// 	2.Додати 2
// 	3.Додати 3
// 	4.Відняти 2
// 	5.Відняти 3.
// 	6.Вивести суму
// 	7.Вихід.
// Шляхом поступового вибору відповідних пунктів спробувати отримати число N, яке вводиться з клавіатури.
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
//* Вивести меню на екран
//*Отримати від користувача значення N
//*
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
let numbersSum = 0
const userNumber = parseInt(prompt("Введіть число, яке будете отримувати в результаті математичних операцій", ""))
let loopFinish = false
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
while (!loopFinish) {
  const userChoice = prompt(
    `
    1. Ініціалізувати (сума = 0)
    2. Додати 2
    3. Додати 3
    4. Відняти 2
    5. Відняти 3
    6. Вивести суму
    7. Вийти
  `,
    ""
  )

  switch (userChoice) {
    case "1":
      numbersSum = 0
      break

    case "2":
      numbersSum += 2
      break

    case "3":
      numbersSum += 3
      break

    case "4":
      numbersSum -= 2
      break

    case "5":
      numbersSum -= 3
      break

    case "6":
      alert(`Поточна сума: ${numbersSum}`)
      break

    case "7":
      alert("Дякуємо за використання програми!")
		loopFinish = true
      break

    default:
      alert("Вибачте, такого варіанту не існує.")
      break
  }
  if (numbersSum === userNumber) {
    alert(`Ви отримали число ${userNumber}!`)
    break
  }
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/
/*
// ** 7 **
// Користувач загадує натуральне число від 1 до N. Шляхом задавання мінімальної кількості запитань знайти вказане число (застосувати бінарний пошук, на кожному кроці якого інтервал пошуку зменшується на 2 шляхом порівняння з елементом, який знаходиться у центрі поточного інтервалу).
// ##0 ** Decomposition ** Декомпозиція ** Декомпозиция **
// Вводими мінімальне значення
// ВВодимо значення користувача
// Позначаємо середину
// З використанням циклу задаємо користувачу уточнюючі запитання для пошуку числа
// Виводимо результат
// ##1 ** Designation of values ** Позначення величин ** Обозначение значений **

// ##2 ** Enter the necessary arguments ** Введення необхідних аргументів ** Ввод необходимых аргументов **
let startIntervalNumber = 0
let finishIntervalNumber = 1000000000
let userIntervalNumber = parseInt(prompt("Загадайте число від до до 1000000000", ""))
let result
// ##3 ** Calculate the result ** Обчислення результату ** Вычисление результата **
while (startIntervalNumber <= finishIntervalNumber) {
  let intervalCenter = Math.floor((startIntervalNumber + finishIntervalNumber) / 2)
  if (intervalCenter === userIntervalNumber) {
    document.write(`${intervalCenter}`)
    break
  } else {
    userIntervalNumber = confirm(`Загадане число менше ${intervalCenter}`)
  }
  if (!userIntervalNumber) {
    startIntervalNumber = intervalCenter + 1
  } else {
    finishIntervalNumber = intervalCenter - 1
  }
}
// ##4 ** Display the result ** Виведення результату ** Вывод результата **
*/