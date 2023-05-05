/*
// ** 0 **
class SomeActions {
  static validate(array, num) {
    if (!array.length) return 0
    if (!Array.isArray(array)) throw new Error("waiting for array")
    if (typeof num !== "undefined" && isNaN(num)) throw new Error("waiting for number")
  }
  static positiveNumbersQuantity(array) {
    SomeActions.validate(array)
    return array.reduce((prevVal, element) => (element > 0 ? ++prevVal : prevVal), 0)
  }
  static negativeNumbersQuantity(array) {
    SomeActions.validate(array)
    return array.reduce((prevVal, element) => (element < 0 ? ++prevVal : prevVal), 0)
  }
  static userNumberQuantity(array, userNum) {
    SomeActions.validate(array, userNum)
    return array.reduce((prevVal, element) => (element === userNum ? ++prevVal : prevVal), 0)
  }
}

let someNum = [10, 15, 0, 3, -4, -8, 11, 152, 102, -35, 7, 10, 37, 87, 10]

console.log(SomeActions.positiveNumbersQuantity(someNum))
console.log(SomeActions.negativeNumbersQuantity(someNum))
console.log(SomeActions.userNumberQuantity(someNum, 10))
*/
/*
// ** 1 **

class ServiceCar {
  static serviceCar
  constructor(driverName, carModel, carNumber) {
    if (ServiceCar.serviceCar) return ServiceCar.serviceCar
    this.driver = driverName
    this.carModel = carModel
    this.carNumber = carNumber
    ServiceCar.serviceCar = this
  }
  toString() {
    return `Водій ${this.driver} на автомобілі ${this.carModel} з номером ${this.carNumber}`
  }
}
const myServiceCar = new ServiceCar("Freya", "AudiTT", "AA1010AA")
document.write(myServiceCar)
console.log(myServiceCar)
const myServiceCar2 = new ServiceCar("Thor", "Boing", "TH3754OR")
document.write(myServiceCar2)
console.log(myServiceCar2)
*/
/*
// ** 2 **
class Reminder {
  static remindMe
  constructor(second, message) {
    if (Reminder.remindMe) return Reminder.remindMe
    this.second = second
    this.message = message
    this.someInterval = 0
    this.counter = 1
    Reminder.remindMe = this
  }
  startRemind() {
    if (this.someInterval !== 0) throw new Error("only one timer u can use")
    this.someInterval = setInterval(() => {
      console.log(`${this.counter}: ${this.message}`)
      this.counter++
    }, this.second * 1000)
  }
  stopInterval() {
    clearInterval(this.someInterval)
    this.someInterval = 0
  }
  changeMessage(newMessage) {
    this.message = newMessage
	 if (this.someInterval !== 0) {
		this.stopInterval()
		this.startRemind()
   }
  }
}

let reminder = new Reminder(2, "Hi")
reminder.startRemind()
reminder.changeMessage('lol')
*/
/*
// ** 3 **

class Product {
  constructor(productName, productUnit, productQuantity, manufacturerCompany) {
    this.productName = productName
    this.productUnit = productUnit
    this.productQuantity = productQuantity
    this.manufacturerCompany = manufacturerCompany
  }
}

class ManufacturerCompany {
  constructor(companyName, companyID) {
    this.CompanyName = companyName
    this.CompanyID = companyID
  }
  get CompanyName() {
    return this.companyName
  }
  get CompanyID() {
    return this.companyID
  }
  set CompanyName(newName) {
    if (newName === "" || newName === "undefined" || typeof newName === "number") throw new Error("Введіть корректну назву компанії")
    this.companyName = newName
  }
  set CompanyID(newID) {
    if (newID < 0 || typeof newID !== "number") throw new Error("Введіть корректний реєстраційний номер")
    this.companyID = newID
  }
}

class WareHouse {
  constructor() {
    this.allGoodsList = []
  }
  registerProduct(productName, productUnit, productQuantity, companyName, companyID) {
    let company = new ManufacturerCompany(companyName, companyID)
    let product = new Product(productName, productUnit, productQuantity, company)
    this.allGoodsList.push(product)
  }
  sellProduct(productName, productQuantity) {
    let product = this.allGoodsList.findIndex((prodInd) => prodInd.productName === productName)
    if (product < 0) throw new Error("Такого товару немає")
    let productQnt = this.allGoodsList[product].productQuantity
    if (productQnt < productQuantity) throw new Error("Товару не достатньо")
    this.allGoodsList[product].productQuantity -= productQuantity
  }
  productNameFilter(productName) {
    return this.allGoodsList.filter((item) => item.productName === productName)
  }
  companyNameFilter(compName) {
    return this.allGoodsList.filter((item) => item.manufacturerCompany.companyName === compName)
  }
}

let myWH = new WareHouse()
myWH.registerProduct("Quail Meet", "Kilograms", 50, "GB", 14253)
myWH.registerProduct("Quail Eggs", "Pcs", 8500, "GB", 14253)
myWH.registerProduct("Quail Poop", "Kilograms", 1550, "GB", 14253)
console.log(myWH)
console.log(myWH.productNameFilter("Quail Poop"))
console.log(myWH.companyNameFilter("GB"))
*/
/*
// ** 4 **

class Author {
  constructor({ authorName, authorBirthDay, authorDescription }) {
    this.authorName = authorName
    this.authorBirthDay = authorBirthDay
    this.authorDescription = authorDescription
  }
  toString() {
    return `Автор: ${this.authorName}, рік народження автора: ${this.authorBirthDay}, короткий опис: ${this.authorDescription}`
  }
}
class Publisher {
  constructor({ publisherName, publisherID, publisherFoundationYear }) {
    this.publisherName = publisherName
    this.publisherID = publisherID
    this.publisherFoundationYear = publisherFoundationYear
  }
  toString() {
    return `Видавництво: ${this.publisherName} засноване в ${this.publisherFoundationYear} році, реєстраційний номер ${this.publisherID}`
  }
}

class Book {
  constructor(initBook) {
    this.bookName = initBook.bookName
    this.bookGenre = initBook.bookGenre
    this.bookAuthor = new Author(initBook)
    this.bookPublisher = new Publisher(initBook)
  }
  toString() {
    return `Книга ${this.bookName}, автор - ${this.bookAuthor}, жанр - ${this.bookGenre}, видавництво - ${this.bookPublisher}.`
  }
}

const bookList = [new Book({ authorName: "author1", authorBirthDay: 1700, authorDescription: "description", publisherName: "publisher1", publisherID: 22364, publisherFoundationYear: 1754, bookName: "book1", bookGenre: "genre1" }), new Book({ authorName: "author2", authorBirthDay: 1701, authorDescription: "description1", publisherName: "publisher2", publisherID: 25225, publisherFoundationYear: 1854, bookName: "book2", bookGenre: "genre2" }), new Book({ authorName: "author3", authorBirthDay: 1702, authorDescription: "description2", publisherName: "publisher3", publisherID: 58554, publisherFoundationYear: 1954, bookName: "book3", bookGenre: "genre3" }), new Book({ authorName: "author4", authorBirthDay: 1703, authorDescription: "description3", publisherName: "publisher4", publisherID: 85443, publisherFoundationYear: 2054, bookName: "book4", bookGenre: "genre4" }), new Book({ authorName: "author5", authorBirthDay: 1704, authorDescription: "description4", publisherName: "publisher5", publisherID: 77856, publisherFoundationYear: 2154, bookName: "book5", bookGenre: "genre5" })]
console.log(bookList)

class Library {
  constructor(bookList) {
    this.bookList = bookList
  }
  addBook() {
    this.bookList.push(initBook)
  }
  removeBook(bookName) {
    this.bookList = this.bookList.filter((book) => book.bookName !== bookName)
  }
  filterBookByGenre(bookGenre) {
    return this.bookList.filter((book) => book.bookGenre === bookGenre)
  }
  filterBookByName(bookName) {
    return this.bookList.filter((book) => book.bookName === bookName)
  }
  filterBookByAuthor(authorName) {
    return this.bookList.filter((book) => book.bookAuthor.authorName === authorName)
  }
  filterBookByPublisherName(publisherName) {
    return this.bookList.filter((book) => book.bookPublisher.publisherName === publisherName)
  }
  toString() {
	return `Моя бібліотека: ${this.bookList}`
  }
}

const myLibrary = new Library(bookList)
console.log(myLibrary.filterBookByPublisherName("publisher3"))
*/
/*
// ** 5 **

class MultChecker {
  constructor(minNum, maxNum) {
    this.minNum = minNum
    this.maxNum = maxNum
  }
  get randomNumber() {
    return this.minNum + Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
  }
  testing() {
    let numberOne = this.randomNumber
    let numberTwo = this.randomNumber
    let correctResult = numberOne * numberTwo
    let userAnswer = parseInt(prompt(`Скільки буде ${numberOne} * ${numberTwo}?`))
    History.historyList = {
      numberOne,
      numberTwo,
      operation: "*",
      correctResult,
      userAnswer,
    }
  }
}

class AddChecker {
  constructor(minNum, maxNum) {
    this.minNum = minNum
    this.maxNum = maxNum
  }
  get randomNumber() {
    return this.minNum + Math.floor(Math.random() * (this.maxNum - this.minNum + 1))
  }
  testing() {
    let numberOne = this.randomNumber
    let numberTwo = this.randomNumber
    let correctResult = numberOne + numberTwo
    let userAnswer = parseInt(prompt(`Скільки буде ${numberOne} + ${numberTwo}?`))
    History.historyList = {
      numberOne,
      numberTwo,
      operation: "+",
      correctResult,
      userAnswer,
    }
  }
}
class TestInfo {
  constructor(numberOne, numberTwo, operation, userAnswer, correctResult) {
    this.numberOne = numberOne
    this.numberTwo = numberTwo
    this.operation = operation
    this.userAnswer = userAnswer
    this.correctResult = correctResult
  }
}
class TestRobot {
  constructor(minNum, maxNum, counter, interval) {
    this.minNum = minNum
    this.maxNum = maxNum
    this.counter = counter
    this.interval = interval
  }
  start() {
    setTimeout(() => {
      this.counter--
      Math.floor(Math.random() * 2 + 1) === 1 ? new AddChecker(this.minNum, this.maxNum).testing() : new MultChecker(1, 10).testing()
      if (this.counter > 0) this.start()
    }, this.interval * 1000)
  }
}
class History {
  static historyList = []
  static historyObject
  constructor(object) {
    if (History.historyObject) return History.historyObject
    History.historyList = { ...object }
    History.historyObject = this
  }
  static get HistoryList() {
    return History.historyList
  }
  static set HistoryList(newResults) {
    return History.historyList.push(newResults)
  }
  static toString() {
    return History.historyList
  }
}

const myTestRobot = new TestRobot(1, 100, 1, 2)
myTestRobot.start()
console.log(History.toString())
*/