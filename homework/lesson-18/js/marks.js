function getTable() {
  const userMarksQuantity = document.querySelector(".marks__input").value
  const tableContainer = document.querySelector(".table")
  for (let inp = 0; inp < userMarksQuantity; inp++) {
    const markInp = document.createElement("input")
    markInp.className = "table__input"
    markInp.setAttribute("type", "number")
    markInp.setAttribute("value", "0")
    tableContainer.append(markInp)
  }
}

function getSum() {
  const userMarks = document.querySelectorAll(".table__input")
  const marksQuantity = userMarks.length
  let sum = 0
  let avarageMark = 0
  for (const el of userMarks) {
    sum += parseInt(el.value)
  }
  avarageMark = sum / marksQuantity
  const outputForUser = document.querySelector(".result__span")
  outputForUser.innerHTML = `${avarageMark}`
}

window.onload = function () {
  const getTableButton = document.querySelector(".marks__button")
  const getResultButton = document.querySelector(".result__button")
  getTableButton.onclick = getTable
  getResultButton.onclick = getSum
}
