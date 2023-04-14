function getRandomNumber(minNum, maxNum) {
  return minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
}

function tableCreate(rows, columns) {
  const section = document.getElementsByTagName("section")
  const table = document.createElement("table")
  table.classList.add("table")
  table.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: center; border-spacing: 0; color: #000;"
  section[0].prepend(table)

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr")
    row.classList.add("table__row")
    table.append(row)
    for (let j = 0; j < columns; j++) {
      const column = document.createElement("td")
      column.classList.add("table__column")
      column.style.cssText = "width: 50px; height: 50px; background-color: #fff; border: 1px solid red; text-align: center;"
		column.innerHTML = getRandomNumber(1, 50)
      row.append(column)
    }
  }
}

tableCreate(3, 4)
