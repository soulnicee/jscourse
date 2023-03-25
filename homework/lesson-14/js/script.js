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
/*
// ** 2 **
let dataList = [
  { id: 344277463, old_price: 1395, old_usd_price: "37.70", price: 1099, min_month_price: 0, sell_status: "available", status: "active", usd_price: "29.70", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 363766641, old_price: 0, old_usd_price: "0.00", price: 90, min_month_price: 0, sell_status: "unavailable", status: "active", usd_price: "2.43", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 339273715, old_price: 38, old_usd_price: "1.03", price: 25, min_month_price: 0, sell_status: "available", status: "active", usd_price: "0.68", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 330746665, old_price: 3087, old_usd_price: "83.43", price: 2548, min_month_price: 0, sell_status: "available", status: "active", usd_price: "68.86", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 344972806, old_price: 699, old_usd_price: "18.89", price: 549, min_month_price: 0, sell_status: "available", status: "active", usd_price: "14.84", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 318302299, old_price: 0, old_usd_price: "0.00", price: 8500, min_month_price: 0, sell_status: "available", status: "active", usd_price: "229.73", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 361430565, old_price: 3500, old_usd_price: "94.59", price: 1999, min_month_price: 0, sell_status: "available", status: "active", usd_price: "54.03", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 14429030, old_price: 3339, old_usd_price: "90.24", price: 2999, min_month_price: 0, sell_status: "available", status: "active", usd_price: "81.05", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 56340912, old_price: 2094, old_usd_price: "56.59", price: 1776, min_month_price: 0, sell_status: "available", status: "active", usd_price: "48.00", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 315292225, old_price: 1799, old_usd_price: "48.62", price: 1499, min_month_price: 0, sell_status: "available", status: "active", usd_price: "40.51", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 28437961, old_price: 42999, old_usd_price: "1162.14", price: 33999, min_month_price: 0, sell_status: "available", status: "active", usd_price: "918.89", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 339896833, old_price: 6399, old_usd_price: "172.95", price: 5899, min_month_price: 0, sell_status: "available", status: "active", usd_price: "159.43", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 364354149, old_price: 1600, old_usd_price: "43.24", price: 1500, min_month_price: 0, sell_status: "available", status: "active", usd_price: "40.54", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 363184995, old_price: 0, old_usd_price: "0.00", price: 4499, min_month_price: 0, sell_status: "available", status: "active", usd_price: "121.59", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 98077846, old_price: 0, old_usd_price: "0.00", price: 3113, min_month_price: 0, sell_status: "available", status: "active", usd_price: "84.14", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 310694668, old_price: 0, old_usd_price: "0.00", price: 3000, min_month_price: 0, sell_status: "unavailable", status: "active", usd_price: "81.08", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 362812029, old_price: 0, old_usd_price: "0.00", price: 21700, min_month_price: 0, sell_status: "available", status: "active", usd_price: "586.49", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 361422708, old_price: 4100, old_usd_price: "110.81", price: 2699, min_month_price: 0, sell_status: "available", status: "active", usd_price: "72.95", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 318302257, old_price: 0, old_usd_price: "0.00", price: 8500, min_month_price: 0, sell_status: "unavailable", status: "active", usd_price: "229.73", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 310694498, old_price: 0, old_usd_price: "0.00", price: 2963, min_month_price: 0, sell_status: "available", status: "active", usd_price: "80.08", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 363651273, old_price: 5199, old_usd_price: "140.51", price: 4890, min_month_price: 0, sell_status: "available", status: "active", usd_price: "132.16", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 330747022, old_price: 3087, old_usd_price: "83.43", price: 2606, min_month_price: 0, sell_status: "available", status: "active", usd_price: "70.43", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 362617635, old_price: 4872, old_usd_price: "131.68", price: 2436, min_month_price: 0, sell_status: "available", status: "active", usd_price: "65.84", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
  { id: 363614439, old_price: 5199, old_usd_price: "140.51", price: 4890, min_month_price: 0, sell_status: "available", status: "active", usd_price: "132.16", pl_charge_pcs: 0, pl_use_instant_bonus: false, pl_premium_bonus_charge_pcs: 0, rests: -1, min_price: 0, max_price: 0, has_shops: false, info: null, show_in_site: null },
]
//Загальну вартість (нові ціни - price)
const summaryPrice = dataList.reduce((prevSum, product) => (product.price > 0 ? prevSum + product.price : prevSum), 0)
console.log(summaryPrice)

//Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
const quantityProductsWithDiscount = dataList.reduce((prevQuantity, product) => (product.price < product.old_price ? prevQuantity + 1 : prevQuantity), 0)
console.log(quantityProductsWithDiscount)

//Товари, які доступні (sell_status:"available")
const availableProducts = dataList.filter((productStatus) => productStatus.sell_status === "available")
console.log(availableProducts)

//сформувати новий список об”єктів тільки доступних  для продажу товарів,
//які міститимуть тільки ідентифікатор товару (id), нову ціну (price),
//стару ціну (old_price), та ціну у доларах (usd_price)
const newDataList = dataList.filter((productStatus) => productStatus.sell_status === "available").map(({ id, price, old_price, usd_price }) => ({ id, price, old_price, usd_price }))
console.log(newDataList)

*/
