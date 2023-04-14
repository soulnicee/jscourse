function getSum() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value)
  const secondNumber = parseFloat(document.getElementById("secondNumber").value)
  const sum = firstNumber + secondNumber
  document.getElementById("calc-result").value = sum
}
function getSub() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value)
  const secondNumber = parseFloat(document.getElementById("secondNumber").value)
  const sub = firstNumber - secondNumber
  document.getElementById("calc-result").value = sub
}
function getMult() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value)
  const secondNumber = parseFloat(document.getElementById("secondNumber").value)
  const mult = firstNumber * secondNumber
  document.getElementById("calc-result").value = mult
}
function getDiv() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value)
  const secondNumber = parseFloat(document.getElementById("secondNumber").value)
  const div = firstNumber / secondNumber
  document.getElementById("calc-result").value = div
}

window.onload = function () {
	document.getElementsByTagName("button")[0].onclick = getSum
	document.getElementsByTagName("button")[1].onclick = getSub
	document.getElementsByTagName("button")[2].onclick = getMult
	document.getElementsByTagName("button")[3].onclick = getDiv
}

