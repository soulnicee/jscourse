/*
// ** 0 **
class Client {
  constructor(clientID, clientName, clientMoney) {
    this.clientID = clientID
    this.clientName = clientName
    this.clientMoney = clientMoney
  }
  addMoney(money) {
    this.clientMoney += money
  }
  withdrawMoney(money) {
    this.clientMoney -= money
  }
  toString() {
    return `${this.clientName}, у вас на рахунку ${this.clientMoney}$`
  }
}

class GoldenClient extends Client {
  constructor(clientID, clientName, clientMoney, creditLimit, creditCost) {
    super(clientID, clientName, clientMoney)
    this.creditLimit = creditLimit
    this.creditCost = creditCost
  }
  creditMoneyPeny(money) {
    return (money * this.creditCost) / 100
  }
  toString() {
    return `${this.clientName}, у вас на рахунку ${this.clientMoney}$, ваш кредитний ліміт ${this.creditLimit}$`
  }
}

let bankClients = [new GoldenClient(777221356, "Cleopatra", 5000, 15000, 2), new GoldenClient(777221355, "Gomunkul", 5000, 15000, 2), new GoldenClient(777221350, "Odin", 5000, 15000, 2), new GoldenClient(777221359, "Freya", 5000, 15000, 2), new GoldenClient(777221358, "Thor", 5000, 15000, 2), new Client(33524221356, "Eivor", 5000), new Client(33524221356, "Sigurd", 5000), new Client(33524221356, "Zevs", 5000)]

class Bank {
  constructor(clientsList) {
    this.clientsList = clientsList
  }
  getStandartClient() {
    let users = this.clientsList.filter((client) => client instanceof GoldenClient === false)
    return users
  }
  getGoldenUser() {
    let G_users = this.clientsList.filter((client) => client instanceof GoldenClient)
    return G_users
  }
  getSummaryClientsMoney() {
    return this.clientsList.reduce((prevSum, client) => prevSum + client.clientMoney, 0)
  }
}

//-----------------------------------
let cl1 = new Client(554123558, "Ramzes 13", 1000)
console.log(cl1.clientMoney)

let cl2 = new GoldenClient(777221356, "Cleopatra", 5000, 15000, 2)
console.log(cl2.clientID)
document.write(cl2)

console.log(bankClients)

let myBank = new Bank(bankClients)
console.log(myBank)


console.log(myBank.getGoldenUser())
console.log(myBank.getStandartClient())
console.log(myBank.getSummaryClientsMoney())
*/
/*
// ** 1 **

class Decor {
  constructor(x, y, imagePath, reloadInterval) {
    this.x = x
    this.y = y
    this.imagePath = imagePath
    this.reloadInterval = reloadInterval
  }
  getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
  }
  render(containerSelector, imageClass) {
    const container = document.querySelector(containerSelector)
    this.image = document.createElement("img")
    this.image.src = `${this.imagePath}`
    this.image.className = imageClass
    this.image.style.left = `${this.x}px`
    this.image.style.top = `${this.y}px`
    container.append(this.image)
  }
}

class House extends Decor {
  constructor(x, y, imagePath, reloadInterval) {
    super(x, y, imagePath, reloadInterval)
  }
  scale() {
    setInterval(() => {
      this.image.style.transform = "scale(1.3)"
    }, this.reloadInterval * 1000)
    this.default()
  }
  default() {
    setInterval(() => {
      this.image.style.transform = "scale(1.01)"
    }, (this.reloadInterval + 1) * 1000)
  }
}
let myHouse = new House(450, 150, "../img/house.png", 3)
myHouse.render(".task-2-cnt", "house")
myHouse.scale()

class Dog extends Decor {
  constructor(x, y, imagePath, reloadInterval) {
    super(x, y, imagePath, reloadInterval)
  }
  move() {
    let startPosition = this.x
    let newPosition = startPosition
    let width = window.screenLeft
    setInterval(() => {
      this.image.style.left = `${newPosition}px`
      newPosition += this.getRandomNumber(5, 15)
      if (newPosition >= width - 120) newPosition = startPosition
    }, this.reloadInterval * 1000)
  }
}
let myDog = new Dog(500, 600, "../img/dog.png", 1)
myDog.render(".task-2-cnt", "dog")
myDog.move()

class Bird extends Decor {
  constructor(x, y, imagePath, reloadInterval) {
    super(x, y, imagePath, reloadInterval)
  }
  fly() {
    let startPositionX = this.x
	 let startPositionY = this.y
    let newPositionX = startPositionX
	 let newPositionY = startPositionY
    let width = window.innerWidth
	 let height = window.innerHeight
	 console.log(width)
	 console.log(height)
    setInterval(() => {
      this.image.style.left = `${newPositionX}px`
		this.image.style.top = `${newPositionY}px`
      newPositionX += this.getRandomNumber(-10, 10)
		newPositionY += this.getRandomNumber(-10, 10)
      if (newPositionX < 100 || newPositionX >= width - 100) newPositionX = startPositionX
		if (newPositionY < height || newPositionY > height) newPositionY = startPositionY
    }, this.reloadInterval * 1000)
  }
}

let myBird = new Bird(1100, 100, "../img/bird.png", 1)
myBird.render(".task-2-cnt", "bird")
myBird.fly()
*/

// ** 2 **
