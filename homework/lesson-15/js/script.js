function getRandomNumber(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
}
function getArrayWithRandomNum(numQuantity) {
  let arr = []
  for (let i = 0; i < numQuantity; i++) {
    arr.push(getRandomNumber(1, 10))
  }
  return arr
}
/*
// ** 0 **
//// Дано два об’єкта. Обидва містять масив цілих чисел.
//// При цьому у одному з них є функція знаходження суми,
//// а у іншому – функція для знаходження добутку тих,
//// які знаходяться між заданими мінімальним і максимальних значенням.
//// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

let objectOne = {
  numbers: getArrayWithRandomNum(20),
  getSum: function () {
    return this.numbers.reduce((prevSum, el) => prevSum + el)
  },
}

let objectTwo = {
  numbers: getArrayWithRandomNum(20),
  getMult: function (min, max) {
    return this.numbers.reduce((prevMult, el) => (el >= min && el <= max ? prevMult * el : prevMult), 1)
  },
}

let objectOneSum = objectOne.getSum()
let objectOneMult = objectTwo.getMult.call(objectOne, 1, 3)
let objectOneMult2 = objectTwo.getMult.apply(objectOne, [1, 3])
console.log(objectOne.numbers)
console.log(objectOneSum)
console.log(objectOneMult)
console.log(objectOneMult2)

let objectTwoSum = objectOne.getSum.call(objectTwo)
let objectTwoSum2 = objectOne.getSum.apply(objectTwo)
let objectTwoMult = objectTwo.getMult(1, 3)
console.log(objectTwo.numbers)
console.log(objectTwoSum)
console.log(objectTwoSum2)
console.log(objectTwoMult)
*/
/*
// ** 1 **
//// Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
//// Тир
//// Поля(властивості)	Масив, у якому зберігається поле з зайцями
//// Методи (дії)	Метод пострілу (задається позиція пострілу)
//// Виведення ігрового поля

function ShootingGallery() {
  this.gameField = []
}

ShootingGallery.prototype.getField = function (width, height, hareQuantity) {
	 if (typeof width !== "number" || typeof height !== "number" || typeof hareQuantity !== "number") {
     throw new Error("Введені не цифрові дані")
   }
  for (let i = 0; i < height; i++) {
    this.gameField[i] = new Array(width).fill(0)
  }
  let harePositionX
  let harePositionY
  for (let hare = 0; hare < hareQuantity; hare++) {
    harePositionX = Math.floor(Math.random() * width)
    harePositionY = Math.floor(Math.random() * height)
    this.gameField[harePositionX][harePositionY] = 1
  }
}
ShootingGallery.prototype.shoot = function (x, y) {
	  if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0 || x >= this.gameField[0].length || y >= this.gameField.length) {
      throw new Error("Введені валідні дані")
    }
	if (this.gameField[x][y] === 1) {
		this.gameField[x][y] = 0
		return true
  } else return false
}
let game = new ShootingGallery()

game.getField(10, 10, 30)
console.table(game.gameField)
*/
/*
// ** 2 **
//// Створити об’єкт «Авто».
//// Авто
//// Поля(властивості)	Марка
//// Розмір бака
//// Кількість наявних літрів
//// Кількість місць
//// Кількість пасажирів
//// Методи (дії)	Заправка на вказану кількість літрів
//// Виведення кількості пасажирів
//// Додавання пасажирів
//// Висадка пасажирів

class Auto {
  constructor(brand, tankSize, availableFuel, seatsQuantity, passengersQuantity) {
    this.brand = brand
    this.tankSize = tankSize
    this.availableFuel = availableFuel
    this.seatsQuantity = seatsQuantity
    this.passengersQuantity = passengersQuantity
  }
  refueling(liters) {
    let emptyTankSize = this.tankSize - this.availableFuel
    if (liters > emptyTankSize) throw new Error(`В бак стільки не поміститься. Можете залити ${emptyTankSize} літрів`)
    this.availableFuel += liters
  }
  getPassengersQuantity() {
    document.write(`Зараз у вас ${this.passengersQuantity} пасажирів`)
  }
  addPassengers(passengQuant) {
    let seatsFree = this.seatsQuantity - this.passengersQuantity
    if (passengQuant > seatsFree) throw new Error(`Є ${seatsFree} вільних місць`)
    this.passengersQuantity += passengQuant
  }
  dropPassengers(passengQuant) {
    if (passengQuant === 0) throw new Error(`Потрібно добавити хоча би 1 пасажира`)
    if (passengQuant > this.passengersQuantity) throw new Error(`У вас немає стільки пасажирів. Можете висадити тільки ${this.passengersQuantity}`)
    this.passengersQuantity -= passengQuant
  }
}

let newCar = new Auto("Mersedes", 100, 30, 25, 10)
console.log(newCar)
newCar.refueling(10)
newCar.getPassengersQuantity()
newCar.addPassengers(5)
newCar.dropPassengers(10)
console.log(newCar)
*/
/*
// ** 3 **
//// Розробити клас MultChecker для перевірки таблиці множення
//// Поля	Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
//// Кількість правильних відповідей
//// Кількість неправильних відповідей
//// Методи	Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
//// Перевірка правильності вказаної відповіді
//// render - виведення інформації про тестування на екран

class MultChecker {
  constructor(number) {
    this.number = number
    this.correctAnswerCount = 0
    this.wrongAnswerCount = 0
  }

  getRandomNumber() {
    let minNum = 1
    let maxNum = 10
    let secondNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    return secondNum
  }
  answerChecker() {
    let secondNum = this.getRandomNumber()
    let userAnswer = parseInt(prompt(`Скільки буде ${this.number} на ${secondNum} ?`))
	 if (isNaN(userAnswer)) throw new Error('Введено не число')
    let result = this.number * secondNum
    if (userAnswer === result) {
      this.correctAnswerCount += 1
    } else {
      this.wrongAnswerCount += 1
    }
  }
  getResult() {
    return document.write(`Ви дали правильніх ${this.correctAnswerCount} відповідей і ${this.wrongAnswerCount} неправильних!`)
  }
}

let test = new MultChecker(5)
console.log(test)
test.answerChecker()
test.getResult()
*/
/*
// ** 4 **
//// Розробити клас Baner
//// Поля	Масив об’єктів ( графічних зображень та посилань на сайти)
//// методи	Метод випадкового вибору об’єкта (графічного зображення та посилання)
//// Метод виведення випадкового банера

class Baner {
  constructor() {
    this.banners = [
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example1.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example2.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example3.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example4.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example5.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example6.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example7.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example8.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example9.com",
      },
      {
        imagePath: "https://picsum.photos/500",
        link: "https://www.example10.com",
      },
    ]
  }
  getRandomObject() {
    let maxNum = this.banners.length
    let randObjectNumber = Math.floor(Math.random() * maxNum)
    return this.banners[randObjectNumber]
  }
  getRandomBanner() {
    let { imagePath, link } = this.getRandomObject()
	 return document.write(`
	 <a href="${link}">
			<img src="${imagePath}" alt="">
		</a>
	 `)
  }
}
let aaa = new Baner()
console.log(aaa)
console.log(aaa.getRandomObject())
aaa.getRandomBanner()
*/
/*
// ** 5 **
//// Розробити клас «Керівник танців»
//// Поля	Масив імен хлопців
//// Масив імен дівчат
//// Методи	Метод випадкового вибору імені хлопця
//// Метод випадкового вибору імені дівчини
//// Метод виведення пари для танців
//// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

class DancingManager {
  constructor() {
    this.boyNames = ["Zeus", "Odin", "Ra", "Anubis", "Baal", "Shiva", "Cronus", "Poseidon", "Thor", "Mars", "Apollo", "Horus", "Odin", "Krishna", "Loki", "Hades", "Indra", "Ares", "Osiris", "Vishnu", "Eros", "Amun", "Dionysus", "Enlil", "Anansi", "Mithras", "Hephaestus", "Hermes", "Pan", "Janus", "Heracles", "Thoth", "Set", "Chaac", "Njord", "Norse", "Kukulkan", "Ahura Mazda", "Svarog", "Tezcatlipoca", "Kroni", "Izanagi", "Mictlantecuhtli", "Pangu", "Ah Puch", "Agni", "Inti", "Jupiter"]
    this.girlNames = ["Aphrodite", "Isis", "Demeter", "Freya", "Hathor", "Persephone", "Hera", "Artemis", "Inanna", "Kali", "Lakshmi", "Morrigan", "Vesta", "Athena", "Durga", "Saraswati", "Freyja", "Nemesis", "Eris", "Brigid", "Ereshkigal", "Ishtar", "Gaea", "Hecate", "Lilith", "Morgan Le Fay", "Pele", "Sekhmet", "Tiamat", "Yemaya", "Bastet", "Cerridwen", "Cybele", "Fortuna", "Gaia", "Hel", "Idunn", "Junon", "Kali", "Lakshmi", "Morrigan", "Nyx", "Pandora", "Rhiannon", "Selene", "Tara", "Urd", "Venus", "Xochiquetzal"]
  }
  getRandomIndex(array) {
    let endIndex = array.length
    return Math.floor(Math.random() * endIndex)
  }
  getRandomBoyName() {
    let boyIndex = this.getRandomIndex(this.boyNames)
    return this.boyNames[boyIndex]
  }
  getRandomGirlName() {
    let girlIndex = this.getRandomIndex(this.girlNames)
    return this.girlNames[girlIndex]
  }
  getDancingPair() {
    let boyName = this.getRandomBoyName()
    let girlName = this.getRandomGirlName()
    document.write(`Пара для танцю: ${boyName} і ${girlName} <br>`)
  }
  dancingWithGods(intervalInSeconds, quantity) {
    let intervalInMiliseconds = intervalInSeconds * 1000
    let i = 0
    this.timer = setInterval(() => {
      i++
      if (i >= quantity) clearInterval(this.timer)
      this.getDancingPair()
    }, intervalInMiliseconds)
  }
}

let dance = new DancingManager()

console.log(dance.getRandomBoyName())
console.log(dance.getRandomGirlName())
dance.getDancingPair()
dance.dancingWithGods(5, 3)
*/
