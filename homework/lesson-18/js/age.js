function getUserAge() {
  const currentYear = 2023
  const userBornYear = parseFloat(document.getElementsByClassName("age__input")[0].value)
  const userAge = currentYear - userBornYear
  document.getElementsByClassName("age__quantity")[0].innerHTML = userAge
}

window.onload = function () {
  document.querySelector(".age__input").onchange = getUserAge
}
