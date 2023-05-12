let snowColorsList = ["#fff", "#14aed4", "#0ec2da"]

class Snow {
  constructor(snowFlake, colorList, minSnowSize, maxSnowSize) {
    this.snowFlake = snowFlake
    this.colorList = colorList
    this.minSnowSize = minSnowSize
    this.maxSnowSize = maxSnowSize
  }
  getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
  }
  get randomSnowSize() {
    return this.minSnowSize + Math.floor(Math.random() * (this.maxSnowSize - this.minSnowSize + 1))
  }
  get randomSnowColor() {
    let randomColorIndex = Math.floor(Math.random() * this.colorList.length)
    return this.colorList[randomColorIndex]
  }
  getRandomSnowPosition() {
    let screenWidth = window.innerWidth
    this.snowFlakes = document.querySelectorAll(".snow__item")
    for (let i = 0; i < this.snowFlakes.length; i++) {
      this.snowFlakes[i].style.left = Math.floor(Math.random() * (screenWidth + 1)) + "px"
      this.snowFlakes[i].style.top = this.getRandomNumber(-1000, -35) + "px"
    }
  }
  generateSnow(snowQuantity) {
    for (let i = 0; i < snowQuantity; i++) {
      this.snowItem = document.createElement("span")
      this.snowItem.className = "snow__item"
      this.snowItem.innerHTML = `${this.snowFlake}`
      this.snowItem.style.cssText = `font-size: ${this.randomSnowSize}px; color: ${this.randomSnowColor};`
      this.snowContainer.append(this.snowItem)
    }
  }
  snowMowing() {
    let windowHeight = window.innerHeight
    for (let i = 0; i < this.snowFlakes.length; i++) {
      setInterval(() => {
        let top = parseInt(this.snowFlakes[i].style.top) + 1 + "px"
        this.snowFlakes[i].style.top = top
        if (parseInt(this.snowFlakes[i].style.top) == windowHeight) {
          this.snowFlakes[i].style.top = -30 + "px"
        }
      }, this.getRandomNumber(35, 85))
    }
  }
  render(containerSelector, snowQuantity) {
    this.snowContainer = document.createElement("section")
    this.snowContainer.className = "snow__container"

    this.targetContainer = document.querySelector(containerSelector)
    this.targetContainer.append(this.snowContainer)
    this.generateSnow(snowQuantity)
    this.getRandomSnowPosition()
    this.snowMowing()
  }
}

let mySnow = new Snow("&#10052", snowColorsList, 20, 40)
mySnow.render(".main-container", 300)
