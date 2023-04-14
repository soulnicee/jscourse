function getSumPerStep() {
  const vehicleOptionPrice = parseFloat(document.getElementById("transport-choice").value)

  const foodOption = document.querySelectorAll(".step-two__food")
  let foodValue = 0
  for (const food of foodOption) {
    if (food.checked) {
      foodValue += parseInt(food.value)
    }
  }

  const radioOption = document.querySelectorAll(".step-three__radio")
  let radioPrice = 0
  for (const price of radioOption) {
    if (price.checked) {
      radioPrice = parseFloat(price.value)
    }
  }

  let summaryPrice = vehicleOptionPrice + foodValue + radioPrice + "$"

  const showResult = document.getElementsByClassName("summary-price")
  showResult[0].innerText = summaryPrice
}

window.onload = function () {
  document.querySelector(".step-submit").onclick = getSumPerStep
}
