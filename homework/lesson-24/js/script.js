// ** 0 **

// Дано масив рядкових представлень чисел (тобто масив чисел у лапках (string).
// З використанням перевірки за допомогою регулярних виразів і
// груп підрахувати кількість тих, у яких перша і остання літери однакові.
const someStrNum = "02540 06654864 4536547889654 553124 327569 345689 7564967 736600213 3266954 556311475 3265893"
console.log(someStrNum.match(/\b(\d)(\d*?)\1\b/gm).length)

// ** 1 **
// Замінити номер розділяючи послідовності цифр дефісом згідно з форматом
// 0504546626   =>  +380-50-45-466-26
let number = "0504546626"
let result = number.replace(/(\d)(\d{2})(\d{2})(\d{3})(\d{2})/, "+38$1-$2-$3-$4-$5")
console.log(result)

// ** 2 **

// Після кожного значення року після 2000 року додати «р.»
// «Я народився 1996, а в школі пішов 2007»  «Я народився 2001р., а в школі пішов 2007р.»

let str = "Я народився 1996, а в школі пішов 2007»"
let result1 = str.replace(/(\b2\d{3}\b)/g, "$1p.")
console.log(result1)

// ** 3 **

// Вводиться велике число. Кожні 3 розряди відділяти пробілом.
// 7457896524  7 457 896 524

let bigNum = "7457896524"
let result2 = bigNum.replace(/(\b\d)/, "$1 ").replace(/\d{3}/g, "$& ")
console.log(result2)

// ** 4 **
// Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.

function getRandomNumber(minNum, maxNum) {
  return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
}
let pupilAgesList = []
for (let i = 0; i < 20; i++) {
  pupilAgesList.push(getRandomNumber(6, 18))
}

let pupilAgesFilteredList = new Map()

for (const age of pupilAgesList) {
  let res = pupilAgesFilteredList.get(age) || 0
  pupilAgesFilteredList.set(age, res + 1)
}
console.log(pupilAgesFilteredList)

// ** 5 **
// Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.

const bookArray = [
  { title: "somebook1", publishYear: 2005, author: "author1" },
  { title: "somebook2", publishYear: 2005, author: "author2" },
  { title: "somebook3", publishYear: 2005, author: "author3" },
  { title: "somebook4", publishYear: 2005, author: "author4" },
  { title: "somebook5", publishYear: 2005, author: "author2" },
  { title: "somebook6", publishYear: 2005, author: "author2" },
  { title: "somebook7", publishYear: 2005, author: "author1" },
  { title: "somebook8", publishYear: 2005, author: "author3" },
]
let bookAuthorQuantity = new Map()

for (const auth of bookArray) {
  let res = bookAuthorQuantity.get(auth.author) || 0
  bookAuthorQuantity.set(auth.author, res + 1)
}
console.log(bookAuthorQuantity)

// ** 6 **
// Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.

const userLogins = ["johnsmith", "janedoe", "mikebrown", "emmajohnson", "davidwilson", "sarahdavis", "alexthomas", "laurawilson", "ryanjones", "olivertaylor", "johnsmith", "janedoe", "mikebrown", "emmajohnson", "davidwilson", "sarahdavis", "alexthomas", "laurawilson", "ryanjones", "olivertaylor", "matthewwilliams", "emilyjones", "chrismartin", "ashleybrown", "jameslee", "meganmiller", "robertdavis", "amandasmith", "samrobinson", "hannahharris", "matthewwilliams", "emilyjones", "chrismartin", "ashleybrown", "jameslee", "meganmiller", "robertdavis", "amandasmith", "samrobinson", "hannahharris", "williamthompson", "nataliewilson", "danielgreen", "gracelee", "andrewroberts", "jessicamartin", "christopherbrown", "oliviamiller", "jacksonwilson", "sophiasmith"]
let uniqUserLoginsRepaeted = new Map()

for (const login of userLogins) {
  let res = uniqUserLoginsRepaeted.get(login) || 0
  uniqUserLoginsRepaeted.set(login, res + 1)
}
console.log(uniqUserLoginsRepaeted)

// ** 7 **
// Дано масив студентів (піб, курс, факультет).
// Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const studenstList = [
  { studentName: "John Smith", course: 3, faculty: "Math" },
  { studentName: "Emma Johnson", course: 2, faculty: "Physics" },
  { studentName: "Michael Brown", course: 4, faculty: "Chemistry" },
  { studentName: "Sarah Davis", course: 1, faculty: "Biology" },
  { studentName: "Daniel Wilson", course: 5, faculty: "Math" },
  { studentName: "Emily Taylor", course: 2, faculty: "Physics" },
  { studentName: "Christopher Lee", course: 3, faculty: "Chemistry" },
  { studentName: "Olivia Harris", course: 4, faculty: "Biology" },
  { studentName: "William Johnson", course: 2, faculty: "Math" },
  { studentName: "Sophia Wilson", course: 5, faculty: "Physics" },
  { studentName: "Matthew Martin", course: 3, faculty: "Chemistry" },
  { studentName: "Ava Brown", course: 1, faculty: "Biology" },
  { studentName: "James Miller", course: 4, faculty: "Math" },
  { studentName: "Isabella Davis", course: 2, faculty: "Physics" },
  { studentName: "Alexander Thompson", course: 3, faculty: "Chemistry" },
  { studentName: "Grace Harris", course: 5, faculty: "Biology" },
  { studentName: "Benjamin Smith", course: 2, faculty: "Math" },
  { studentName: "Sofia Wilson", course: 4, faculty: "Physics" },
  { studentName: "David Martin", course: 3, faculty: "Chemistry" },
  { studentName: "Charlotte Johnson", course: 1, faculty: "Biology" },
  { studentName: "Joseph Miller", course: 5, faculty: "Math" },
  { studentName: "Mia Davis", course: 2, faculty: "Physics" },
  { studentName: "Andrew Wilson", course: 3, faculty: "Chemistry" },
  { studentName: "Abigail Harris", course: 4, faculty: "Biology" },
  { studentName: "Daniel Johnson", course: 2, faculty: "Math" },
  { studentName: "Madison Wilson", course: 5, faculty: "Physics" },
  { studentName: "Anthony Martin", course: 3, faculty: "Chemistry" },
  { studentName: "Elizabeth Brown", course: 1, faculty: "Biology" },
  { studentName: "Joshua Miller", course: 4, faculty: "Math" },
  { studentName: "Chloe Davis", course: 2, faculty: "Physics" },
]
let differentFaculty = new Set()
let stentsOnCourse = new Map()
for (const student of studenstList) {
  let studentCourseResult = stentsOnCourse.get(student.course) || 0
  stentsOnCourse.set(student.course, studentCourseResult + 1)

  differentFaculty.add(student.faculty)
}

console.log(`Є ${differentFaculty.size} різні факультeти`)
console.log(differentFaculty)
console.log(stentsOnCourse)

// ** 8 **
// . Дано масив показів температур. Підрахувати кількість входжень кожного із показів
let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

let sameTempQuantity = new Map()
for (const temp of temperatures) {
  let res = sameTempQuantity.get(Math.ceil(temp)) || 0
  sameTempQuantity.set(Math.ceil(temp), res + 1)
}
console.log(sameTempQuantity)

// ** 9 **
// Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики.
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const hisoryPupilList = ["Vova", "Andrew", "Vasya", "Roman", "Anton", "Dmitro", "Oleg"]
const mathPupilList = ["Vova", "Darja", "Vasya", "Roman", "Lisa", "Galina", "Elvira"]

let diffHistory = new Set()
for (const pupil of hisoryPupilList) {
  diffHistory.add(pupil)
}
let diffMath = new Set()
for (const pupil of mathPupilList) {
  diffMath.add(pupil)
}

let counter = 0
for (const pupil of hisoryPupilList) {
  if (diffMath.has(pupil)) counter++
}

console.log(counter)
let totalUniqSdunet = new Set([...hisoryPupilList].concat([...mathPupilList]))
console.log(totalUniqSdunet)

// ** 10 **

/// Користувач може змінювати колір фону, що вибирає користувач з використанням
/// <input type="color">.
/// Зберігати цей колір і відновлювати при наступному відкритті.
/// Також зберігати і відображати кількість змін протягом одного сеансу.
/*
function changeAndSaveColorData(item, color) {
	item.style.backgroundColor = color
	localStorage.setItem("backgroundColor", color)
}
window.onload = function () {
  let savedBgColor = localStorage.getItem("backgroundColor")
  console.log(savedBgColor)
  let container = document.querySelector(".user-color")
  if (savedBgColor) {
    container.style.backgroundColor = savedBgColor
  }

  let colorChanger = document.getElementById("color-change")
  let changeColorCounter = 0
  colorChanger.addEventListener("change", () => {
    savedBgColor = colorChanger.value
	 changeAndSaveColorData(container, savedBgColor)
    changeColorCounter++
    sessionStorage.setItem("changes", changeColorCounter)
  })
}
*/
// ** 11 **

// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу.
/*
const toDoList = ["Позвонити мамі", "Пообідати", "Вчити Джава Скріпт"]
localStorage.setItem("toDoList", JSON.stringify(toDoList))

function getRandomIndex(item) {
  return Math.floor(Math.random() * item.length)
}

function randomToDoMessage(delay) {
  if (localStorage.getItem("toDoList")) {
    let list = JSON.parse(localStorage.getItem("toDoList"))
    let interval = setInterval(() => {
      let randomMessageIndex = getRandomIndex(list)
      if (confirm(list[randomMessageIndex])) {
        list.splice(randomMessageIndex, 1)
        localStorage.setItem("toDoList", JSON.stringify(list))
      }
      if (list.length === 0) {
        clearInterval(interval)
		  alert('Всі справи виконано')
      }
    }, delay * 1000)
  }
}

randomToDoMessage(5)
*/