let starColorsList = ["#9bb0ff", "#aabfff", "#cad7ff", "#f8f7ff", "#fff4ea", "#ffd2a1", "#ffcc6f"]
let starCodeList = ["&#9733", "&#10037", "&#10031", "&#10029"]

class Star {
  constructor(starList, colorList, minStarSize, maxStarSize) {
    this.starList = starList
    this.colorList = colorList
    this.minStarSize = minStarSize
    this.maxStarSize = maxStarSize
  }
  getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
  }
  initRandomStar(starsList) {
    let randomStarIndex = this.getRandomNumber(0, starsList.length - 1)
    return starsList[randomStarIndex]
  }
  get randomStarSize() {
    return this.getRandomNumber(this.minStarSize, this.maxStarSize)
  }
  get randomStarColor() {
    let randomColorIndex = this.getRandomNumber(0, this.colorList.length - 1)
    return this.colorList[randomColorIndex]
  }
  getRandomStarsPosition() {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.stars = document.querySelectorAll(".star__item")
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].style.left = Math.floor(Math.random() * (this.screenWidth + 1)) + "px"
      this.stars[i].style.top = Math.floor(Math.random() * (this.screenHeight + 1)) + "px"
    }
  }
  generateStar(starQuantity) {
    for (let i = 0; i < starQuantity; i++) {
      this.starItem = document.createElement("span")
      this.starItem.className = "star__item"
      this.randomStarItem = this.initRandomStar(this.starList)
      this.starItem.innerHTML = `${this.randomStarItem}`
      this.starItem.style.cssText = `font-size: ${this.randomStarSize}px; color: ${this.randomStarColor};`
      this.starContainer.append(this.starItem)
    }
  }
  starShining() {
    for (let i = 0; i < this.stars.length; i++) {
      setInterval(() => {
        let size = parseInt(this.stars[i].style.fontSize) + 1 + "px"
        this.stars[i].style.fontSize = size
        if (parseInt(this.stars[i].style.fontSize) == this.maxStarSize) {
          this.stars[i].style.fontSize = this.minStarSize + "px"
          this.stars[i].style.left = Math.floor(Math.random() * (this.screenWidth + 1)) + "px"
          this.stars[i].style.top = Math.floor(Math.random() * (this.screenHeight + 1)) + "px"
        }
      }, this.getRandomNumber(500, 800))
    }
  }
  render(containerSelector, starQuantity) {
    this.starContainer = document.createElement("section")
    this.starContainer.className = "star__container"

    this.targetContainer = document.querySelector(containerSelector)
    this.targetContainer.append(this.starContainer)
    this.generateStar(starQuantity)
    this.getRandomStarsPosition()
    this.starShining()
  }
}

let myStar = new Star(starCodeList, starColorsList, 10, 50)
myStar.render(".main-container", 100)
