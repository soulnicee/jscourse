/*
// ** 0 **
const divs = document.querySelector('.one__container')
console.log(divs);
function onDivClick() {
	let div = this
	while (div.nextElementSibling) {
		div = div.nextElementSibling
		div.style.color ='red'
	}

}
for (const div of divs.children) {
	div.onclick = onDivClick
}
*/
/*
// ** 1 **
const allInputs = document.querySelector(".two__container").oninput = onInputChange

function onInputChange(e) {
  let currentInp = e.target
  let currentInpValue = parseInt(currentInp.value)
  while (currentInp.nextElementSibling) {
    currentInp = currentInp.nextElementSibling
    currentInp.value = ++currentInpValue
  }
  while (currentInp.previousElementSibling) {
    currentInp = currentInp.previousElementSibling
    currentInp.value = --currentInpValue
  }
}
*/
/*
// ** 2 **
class NumeratedList {
  constructor(listQuantity) {
    this.listQuantity = listQuantity
  }
  getRandomNumber(minNum, maxNum) {
    return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
  }
  render(containerSelector) {
    const container = document.querySelector(containerSelector)
    let list
    for (let i = 0; i < this.listQuantity; i++) {
      list = document.createElement("ol")
      list.className = "list"
      const randomItemCount = this.getRandomNumber(1, 10)
      for (let j = 0; j < randomItemCount; j++) {
        const li = document.createElement("li")
        li.className = "list__item"
        li.innerText = `${this.getRandomNumber(1, 100)}`
        list.append(li)
      }
      container.append(list)
    }
    const btn = document.createElement("button")
    btn.className = "color"
    btn.innerText = "Color"
    container.append(btn)
  }
}

const myLists = new NumeratedList(5)
myLists.render(".lists")

const button = document.querySelector(".color")
function coloredOnClick() {
  const items = document.querySelectorAll(".list")
  for (const element of items) {
    if (element.childNodes.length % 2 === 0) {
      element.style.color = "green"
    } else element.style.color = "red"
    console.log(element.childNodes.length % 2)
  }
  console.log(items)
}
button.onclick = coloredOnClick
*/
/*
// ** 3 **

function getRandomNumber(minNum, maxNum) {
  return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
}

const tdList = document.getElementsByTagName("td")
const tables = document.querySelectorAll(".table")
for (const item of tdList) {
  item.innerText = `${getRandomNumber(1, 10)}`
}
console.log(tables)

for (const table of tables) {
  table.addEventListener("click", (e) => {
    if (e.target.tagName === "TD") {
      table.style.borderColor = "red"
    }
  })
}
*/
/*
// ** 4 **
const form = document.querySelector(".form")
console.log(form)
form.addEventListener('click', (e)=> {
	if (e.target.tagName === 'INPUT') {
		e.target.value = '0'
	}
})
*/