let imagePath = {
  tank: "../img/tank/1.png",
  boom: "../img/tank/boom.png",
}

class Tank {
  constructor(pathList) {
    this.pathList = pathList
  }
  getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
  }
  getRandomTankPosition() {
    this.screenWidth = window.innerWidth
    this.funnyTanks = document.querySelectorAll(".tank__item")
    for (let i = 0; i < this.funnyTanks.length; i++) {
      this.funnyTanks[i].style.left = Math.floor(Math.random() * (this.screenWidth - 100 + 1)) + "px"
      this.funnyTanks[i].style.top = this.getRandomNumber(-1000, -55) + "px"
    }
  }

  generateTank(quantityTanks) {
    for (let i = 0; i <= quantityTanks; i++) {
      this.tankItem = document.createElement("div")
      this.tankItem.className = "tank__item"
      this.tankImg = document.createElement("img")
      this.tankImg.className = "tank__image"
      this.tankImg.src = this.pathList.tank
      this.tankItem.append(this.tankImg)
      this.tankContainer.append(this.tankItem)
    }
  }
  tankMoving() {
    let windowHeight = window.innerHeight
    for (let i = 0; i < this.funnyTanks.length; i++) {
      setInterval(() => {
        let top = parseInt(this.funnyTanks[i].style.top) + 2 + "px"
        this.funnyTanks[i].style.top = top
        if (parseInt(this.funnyTanks[i].style.top) > windowHeight - 70) {
          this.funnyTanks[i].style.top = this.getRandomNumber(-1000, -55) + "px"
        }
      }, this.getRandomNumber(35, 85))
    }
  }
  killTank() {
    let allTanks = document.querySelectorAll(".tank__image")
    let counter = allTanks.length - 1

    for (let i = 0; i < allTanks.length; i++) {
      allTanks[i].onclick = () => {
        allTanks[i].src = this.pathList.boom
        setTimeout(() => {
          allTanks[i].remove()
          counter--
          console.log(counter)
          if (counter == 0) {
            alert("Захуярені всі танки")
          }
          allTanks[allTanks.length - 1].remove()
        }, 500)
      }
    }
  }
  render(containerSelector, tankQuantity) {
    this.tankContainer = document.createElement("section")
    this.tankContainer.className = "tank__container"

    this.targetContainer = document.querySelector(containerSelector)
    this.targetContainer.append(this.tankContainer)
    this.generateTank(tankQuantity)
    this.getRandomTankPosition()
    this.tankMoving()
	 this.killTank()
  }
}
let myTank = new Tank(imagePath)
myTank.render(".main-container", 10)
