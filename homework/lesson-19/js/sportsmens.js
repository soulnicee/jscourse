const sportsmenList = ["John Depp", "Sara Wik", "Den Miro", "Alan Woo", "Olga Sich", "Ivan Hal"]
class Sportsmen {
  constructor(sportsmenList) {
    this.sportsmenList = sportsmenList
  }
  createSportsman(sportName) {
    const sportsmanItem = document.createElement("div")
    sportsmanItem.className = "sportsman"
    sportsmanItem.setAttribute("status", "off")

    const sportsmanName = document.createElement("div")
    sportsmanName.className = "sportsman__name"
    sportsmanName.innerText = sportName

    const containerImage = document.createElement("div")
    containerImage.className = "sportsman__picture"
    containerImage.innerHTML = `<svg clip-rule="evenodd" class="icon" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fill-rule="nonzero"/></svg>`
    sportsmanItem.append(sportsmanName)
    sportsmanItem.append(containerImage)
    containerImage.onclick = function () {
      if (sportsmanItem.getAttribute("status") === "off") {
		  containerImage.classList.add("sportsman__picture_on")
        sportsmanItem.setAttribute("status", "on")
        sportsmanItem.remove()
        document.querySelector(".sportsmen-list__item_choosen").append(sportsmanItem)
      } else if (sportsmanItem.getAttribute("status") === "on") {
		  containerImage.classList.remove("sportsman__picture_on")
        sportsmanItem.setAttribute("status", "off")
        sportsmanItem.remove()
        document.querySelector(".sportsmen-list__item_all").append(sportsmanItem)
      }
    }.bind(this)
    return sportsmanItem
  }

  render(containerSelector) {
    const mainList = document.createElement("div")
    mainList.classList.add("sportsmen-list__item", "sportsmen-list__item_all")
    const choosenList = document.createElement("div")
    choosenList.classList.add("sportsmen-list__item", "sportsmen-list__item_choosen")
    const sportsmenListTitleMain = document.createElement("h3")
    sportsmenListTitleMain.className = "sportsmen-list__title"
    sportsmenListTitleMain.innerText = "Загальний список"
    mainList.append(sportsmenListTitleMain)
    const sportsmenListTitleChoosen = document.createElement("h3")
    sportsmenListTitleChoosen.className = "sportsmen-list__title"
    sportsmenListTitleChoosen.innerText = "Обрані для змагання"
    choosenList.append(sportsmenListTitleChoosen)

    const mainContainer = document.querySelector(containerSelector)
    for (const sportsman of this.sportsmenList) {
      const sprt = this.createSportsman(sportsman)
      mainList.append(sprt)
    }

    mainContainer.append(mainList)
    mainContainer.append(choosenList)
  }
}

const mySportsmenList = new Sportsmen(sportsmenList)

mySportsmenList.render(".sportsmen-list__container")
