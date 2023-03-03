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
const studentMarks = [10, 11, 12, 8, 9, 3]
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

function getDayWhenVisitorsLessTwenty(visitorsList) {
  let lessVisitors = []
  for (let i = 0; i < visitorsList.length; i++) {
    if (visitorsList[i] < 20) {
      lessVisitors.push(i + 1)
    }
  }
  return lessVisitors
}

function getMinVisitorsDay(visitorsList) {
  let minCounter = visitorsList[0]
  let minDay = 0
  for (let i = 1; i < visitorsList.length; i++) {
    if (minCounter > visitorsList[i]) {
      minCounter = visitorsList[i]
      minDay = i + 1
    }
  }
  return minDay
}

function getMaxVisitorsDay(visitorsList) {
  let maxCounter = visitorsList[0]
  let maxDay = 0
  for (let i = 1; i < visitorsList.length; i++) {
    if (maxCounter < visitorsList[i]) {
      maxCounter = visitorsList[i]
      maxDay = i + 1
    }
  }
  return maxDay
}

function getSumaryVisitorsWorkDay(visitorsList) {
  getSum = 0
  for (let i = 0; i < 5; i++) {
    getSum += visitorsList[i]
  }
  return getSum
}

function getSumaryVisitorsOffDay(visitorsList) {
  getSum = 0
  for (let i = 5; i < 7; i++) {
    getSum += visitorsList[i]
  }
  return getSum
}

// ##4 ** Display the result ** Виведення результату ** Вывод результата **
const dayWhenVisitorsLessTwenty = getDayWhenVisitorsLessTwenty(visitorsWeekList)
const minimumVisitorsDay = getMinVisitorsDay(visitorsWeekList)
const maximumVisitorsDay = getMaxVisitorsDay(visitorsWeekList)
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

// ** 2 **
