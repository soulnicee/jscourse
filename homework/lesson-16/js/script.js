/*
// ** 0 **
class TDate {
  #day
  #month
  #year

  constructor(day, month, year) {
    this.Day = day
    this.Month = month
    this.Year = year
  }

  get Day() {
    return this.#day
  }
  set Day(newDay) {
    if (newDay < 1 || newDay > 31) {
      throw new Error("Incorrect day")
    }
    this.#day = newDay
  }

  get Month() {
    return this.#month
  }
  set Month(newMonth) {
    if (newMonth < 1 || newMonth > 12) {
      throw new Error("Incorrect month")
    }
    this.#month = newMonth
  }

  get Year() {
    return this.#year
  }
  set Year(newYear) {
    if (newYear < 0) {
      throw new Error("Incorrect year")
    }
    this.#year = newYear
  }

  addDays(days) {
    const date = new Date(this.Year, this.Month - 1, this.Day)
    date.setDate(date.getDate() + days)
    this.Year = date.getFullYear()
    this.Month = date.getMonth() + 1
    this.Day = date.getDate()
  }

  addMonths(months) {
    const date = new Date(this.Year, this.Month - 1, this.Day)
    date.setMonth(date.getMonth() + months)
    this.Year = date.getFullYear()
    this.Month = date.getMonth() + 1
    this.Day = date.getDate()
  }

  addYears(years) {
    const date = new Date(this.Year, this.Month - 1, this.Day)
    date.setFullYear(date.getFullYear() + years)
    this.Year = date.getFullYear()
    this.Month = date.getMonth() + 1
    this.Day = date.getDate()
  }

  toString() {
    return `${this.Day}.${this.Month}.${this.Year}`
  }
}

let myDay = new TDate(22, 6, 1992)
document.write(myDay)
console.log(myDay)
myDay.addDays(50)
console.log(myDay)
myDay.addMonths(750)
console.log(myDay)
*/
/*
// ** 1 **

class TMoney {
  #userMoneyInDollar = 0
  static dollarRate = 64
  constructor(grivna) {
	this.AddMoney = grivna
  }

 
  set AddMoney(grivna) {
	if (isNaN(grivna) || grivna <= 0) throw new Error('Не коректна сума')
    this.#userMoneyInDollar += grivna / TMoney.dollarRate
  }
  withdrawMoney(grivna) {
    let grivnas = this.#userMoneyInDollar * TMoney.dollarRate
    if (grivna > grivnas || grivna === 0 || isNaN(grivna)) throw new Error("Недостатньо коштів або некоректна сума")
    grivnas -= grivna
    this.#userMoneyInDollar = grivnas / TMoney.dollarRate
  }
  calcNewDollarRate(grivna, wantedProfit) {
    return ((grivna + wantedProfit) / (grivna / TMoney.dollarRate)).toFixed(2)
  }
  get Dollars() {
    return this.#userMoneyInDollar.toFixed(2)
  }
  toString() {
	return `Ви маєете ${this.Dollars}$`
  }
}

let myMoney = new TMoney(1000)
console.log(myMoney.Dollars)
myMoney.AddMoney = 1000
console.log(myMoney.Dollars)
console.log(myMoney.withdrawMoney(1000))
console.log(myMoney.Dollars)
console.log(myMoney.calcNewDollarRate(1000, 100))
document.write(myMoney)
*/
/*
// ** 2 **
class Company {
  constructor(companyName, creatingInfo, servicesList, branchesList) {
    this.companyName = companyName
    this.createdDate = new CreatedDate(creatingInfo)
    this.services = new Services(servicesList)
    this.branches = new Branches(branchesList)
  }
  toString() {
	return `Фірма ${this.companyName} створена ${this.createdDate.companyYearsOld} роки тому в ${this.createdDate.createYear} році.</br>`
  }
}

class Services {
  constructor(servicesList) {
    this.servicesList = servicesList
  }
  getAvailableServices(money, time) {
    for (const service of this.servicesList) {
      let serviceTime = service.serviceTime
      if (service.servicePrice <= money && serviceTime <= time) {
        document.write(`${service.serviceName} </br>`)
      }
    }
  }
}

class CreatedDate {
  constructor({ createMonth, createYear }) {
    this.createMonth = createMonth
    this.createYear = createYear
  }
  get companyYearsOld() {
    const monthNow = new Date().getMonth() + 1
    const yearNow = new Date().getFullYear()
    let yearsOld = yearNow - this.createYear
    let monthsOld = monthNow - this.createMonth
    if (monthsOld < 0) {
      yearsOld -= 1
      monthsOld += 12
    }
    return yearsOld
  }
}

class Branches {
  constructor(branchesList) {
    this.branchesList = branchesList
  }
  getBrancesInCity(userCity) {
    for (const branch of this.branchesList) {
      if (branch.branchCity === userCity) document.write(`Можете сходити за адресою: вулиця ${branch.branchStreet} будинок ${branch.branchBuildingNumber} </br>`)
    }
  }
}

let firstCompany = new Company(
  "LOL",
  { createMonth: "January", createYear: 2020 },
  [
    { serviceName: "Cleaning", servicePrice: 1000, serviceTime: 120 },
    { serviceName: "Washing", servicePrice: 500, serviceTime: 60 },
    { serviceName: "Drying", servicePrice: 250, serviceTime: 40 },
  ],
  [
    { branchCountry: "England", branchCity: "London", branchStreet: "Good", branchBuildingNumber: "10" },
    { branchCountry: "England", branchCity: "London", branchStreet: "Black", branchBuildingNumber: "14" },
    { branchCountry: "Germany", branchCity: "Berlin", branchStreet: "Bad", branchBuildingNumber: "15" },
    { branchCountry: "Spain", branchCity: "Madrid", branchStreet: "So-So", branchBuildingNumber: "8" },
  ]
)
console.log(firstCompany)
document.write(firstCompany)
firstCompany.services.getAvailableServices(2000, 120)
firstCompany.branches.getBrancesInCity("London")
*/
/*
// ** 3 **
class TBankomat {
  constructor(banknoteList) {
    this.banknoteList = banknoteList
  }

  getMinSum() {
    let minSum = Infinity
    for (const banknote in this.banknoteList) {
      let item = this.banknoteList[banknote]
      if (item.quantity > 0 && item.value < minSum) {
        minSum = item.value
      }
    }
    return `Мінімально можете зняти ${minSum} гривень!`
  }

  getMaxSum() {
    let maxSum = 0
    for (const banknote in this.banknoteList) {
      let item = this.banknoteList[banknote]
      let sum = item.value * item.quantity
      maxSum += sum
    }
    return `Банкомат може видати ${maxSum} гривень!`
  }

  withdraw(amount) {
    const withdrawBanknotes = []
    let remainingAmount = amount
    const availableBanknotes = this.banknoteList.filter((banknote) => banknote.quantity > 0)
    for (const banknote of availableBanknotes.sort((a, b) => b.value - a.value)) {
      const banknoteToWithdraw = Math.floor(remainingAmount / banknote.value)
      if (banknoteToWithdraw > 0) {
        const actualBanknoteToWithdraw = Math.min(banknoteToWithdraw, banknote.quantity)
        withdrawBanknotes.push(new Banknote(banknote.value, actualBanknoteToWithdraw))
        banknote.quantity -= actualBanknoteToWithdraw
        remainingAmount -= actualBanknoteToWithdraw * banknote.value
        if (remainingAmount === 0) {
          break
        }
      }
    }
    if (remainingAmount < 0) {
      throw new Error("Error. Try again")
    }
    return withdrawBanknotes
  }
}

class Banknote {
  constructor(value, quantity) {
    this.value = value
    this.quantity = quantity
  }
}

const banknoteList = [new Banknote(5, 20), new Banknote(10, 20), new Banknote(20, 20), new Banknote(50, 20), new Banknote(100, 20), new Banknote(200, 20)]

let myBankomat = new TBankomat(banknoteList)
console.log(myBankomat.getMaxSum())
console.log(myBankomat.getMinSum())
console.log(myBankomat.withdraw(5000))
*/
