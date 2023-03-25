/*
// ** 0 **
//// Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
//// ----- Властивості ------
//// -	назва компанії на час розробки (назву періодично змінюють)
//// -	власник компанії
//// -	споснсори (масив спонсорів)
////              * прізвище спонсора
////       * ім’я  спонсора
////       * сума вкладень спонсора
//// -	рік випуску
//// -	вартість сайту

// Допоміжні функції
//0. рандомне число
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
//1. Генеруємо рандомні назви компаній
function generateCompanyName() {
  const adjectives = ["Awesome", "Brilliant", "Creative", "Daring", "Elegant", "Fierce", "Gorgeous", "Honest", "Innovative", "Joyful", "Kind", "Lively", "Mighty", "Nimble", "Optimistic", "Passionate", "Quirky", "Radiant", "Sleek", "Swift", "Talented", "Unique", "Vibrant", "Witty", "Xtreme", "Youthful", "Zealous"]

  const nouns = ["Aardvark", "Bear", "Cheetah", "Dolphin", "Eagle", "Fox", "Giraffe", "Hawk", "Iguana", "Jaguar", "Kangaroo", "Lion", "Moose", "Narwhal", "Owl", "Penguin", "Quokka", "Rhino", "Sloth", "Tiger", "Unicorn", "Vulture", "Wolf", "Xenops", "Yak", "Zebra"]

  const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length)
  const randomNounIndex = Math.floor(Math.random() * nouns.length)
  const adjective = adjectives[randomAdjectiveIndex]
  const noun = nouns[randomNounIndex]

  return `${adjective} ${noun} Corp.`
}
//2. Генеруємо рандомні назви компаній
function generateOwnerName() {
  const firstNames = ["Adam", "Benjamin", "Catherine", "David", "Emma", "Frank", "Grace", "Henry", "Isabella", "James", "Katherine", "Liam", "Mary", "Nathan", "Olivia", "Patrick", "Quentin", "Rachel", "Sophia", "Thomas", "Ulysses", "Victoria", "William", "Xavier", "Yvonne", "Zachary"]

  const lastNames = ["Anderson", "Brown", "Carter", "Davis", "Evans", "Ford", "Gonzalez", "Harris", "Irwin", "Jones", "Keller", "Lee", "Miller", "Nguyen", "O'Brien", "Parker", "Quinn", "Robinson", "Smith", "Thompson", "Underwood", "Valdez", "Wilson", "Xiao", "Yates", "Zhang"]

  const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length)
  const randomLastNameIndex = Math.floor(Math.random() * lastNames.length)
  const firstName = firstNames[randomFirstNameIndex]
  const lastName = lastNames[randomLastNameIndex]

  return `${firstName} ${lastName}`
}
//3. Генеруємо рандомне прізвище спонсора
function generateSponsorLastName() {
  const lastNames = ["Anderson", "Brown", "Carter", "Davis", "Evans", "Ford", "Gonzalez", "Harris", "Irwin", "Jones", "Keller", "Lee", "Miller", "Nguyen", "O'Brien", "Parker", "Quinn", "Robinson", "Smith", "Thompson", "Underwood", "Valdez", "Wilson", "Xiao", "Yates", "Zhang"]

  const randomLastNameIndex = Math.floor(Math.random() * lastNames.length)
  const lastName = lastNames[randomLastNameIndex]

  return lastName
}
//4. Генеруємо рандомне імя спонсора
function generateSponsorFirstName() {
  const firstNames = ["Adam", "Benjamin", "Catherine", "David", "Emma", "Frank", "Grace", "Henry", "Isabella", "James", "Katherine", "Liam", "Mary", "Nathan", "Olivia", "Patrick", "Quentin", "Rachel", "Sophia", "Thomas", "Ulysses", "Victoria", "William", "Xavier", "Yvonne", "Zachary"]

  const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length)
  const firstName = firstNames[randomFirstNameIndex]

  return firstName
}
// функція для генерації рандомного обєкта
function getRandomObject(minContrib, maxContrib, minYear, MaxYear, minPrice, maxPrice) {
  let siteProperties = {
    companyName: generateCompanyName(),
    nameOwner: generateOwnerName(),
    sponsors: [
      {
        lastName: generateSponsorLastName(),
        firstName: generateSponsorFirstName(),
        contribution: getRandomNumber(minContrib, maxContrib),
      },
    ],
    finishYear: (finishYear = getRandomNumber(minYear, MaxYear)),
    price: getRandomNumber(minPrice, maxPrice),
  }
  return siteProperties
}
// функція для заповнення масиву обєктами

function getArrayWithObjects(quantity) {
  let arr = []
  let randObj
  for (let i = 0; i < quantity; i++) {
    randObj = getRandomObject(25000, 150000, 1970, 2023, 5000, 15000)
    arr.push(randObj)
  }
  return arr
}
const finishedSites = getArrayWithObjects(10)
console.log(finishedSites)

// загальну вартість усіх сайтів
const summarySitesPrice = finishedSites.reduce((prevSum, site) => prevSum + site.price, 0)
console.log(summarySitesPrice)

//кількість сайтів, що було зроблено між 2000 та 2009 рр.
const sitesBetween2000And2009 = finishedSites.reduce((prevSum, site) => (site.finishYear > 2000 && site.finishYear < 2009 ? prevSum + 1 : prevSum), 0)
console.log(sitesBetween2000And2009)

//кількість сайтів, де сума спонсорських вкладень була більшою за 100000
const sponsorsMoneyMore10000 = finishedSites.reduce((prevSum, site) => {
  return prevSum + site.sponsors.reduce((siteQuant, money) => (money.contribution > 100000 ? siteQuant + 1 : siteQuant), 0)
}, 0)
console.log(sponsorsMoneyMore10000)

//створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
const sponsorsNames = []
finishedSites.forEach((site) => {
  site.sponsors.forEach((sponsor) => sponsorsNames.push(`${sponsor.firstName} ${sponsor.lastName}`))
})
console.log(sponsorsNames)

// знайти рік, коли прибуток був найбільшим
function getYearWithMaxPrice(arr) {
  let year
  let price = 0
  arr.forEach((site) => {
    if (price < site.price) {
      price = site.price
      year = site.finishYear
    }
  })
  return year
}
const yearWithMaxPrice = getYearWithMaxPrice(finishedSites)
console.log(yearWithMaxPrice)

//упорядкувати список за спаданням прибутку
const sortedFinishedSites = finishedSites.sort((element1, element2) => {
  if (element1.price < element2.price) {
    return 1
  } else if (element1.price > element2.price) {
    return -1
  } else {
    return 0
  }
})
console.log(sortedFinishedSites)

//Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

let sitesLess10000 = []
let sitesMore10000 = []
finishedSites.forEach((site) => {
  // більше рівне тому що сайти з ціною 10000 не потраплять в жоден масив.
  if (site.price >= 10000) {
    sitesMore10000.push(site)
  } else {
    sitesLess10000.push(site)
  }
})
console.log(sitesLess10000)
console.log(sitesMore10000)
*/

/*
// ** 1 **
//Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
let date = {
  day: 10,
  month: 5,
  year: 2023,
}
let N = getRandomNumber(1, 500)
function getYears({ month, year }, N) {
  let monthSummary = month + N
  let newMonth = monthSummary % 12
  let newYear = year + Math.floor((month + N) / 12)
  if (newMonth === 0) {
    newMonth = 12
    newYear -= 1
  }
  return newYear
}
console.log(getYears(date, N))
*/

