function converter() {
	const dollarRate = 65
	const euroRate = 75
	const grivna = parseFloat(document.getElementById("grivna").value)
	const dollar = grivna / dollarRate
	const euro = grivna / euroRate
	document.getElementById("dollar").value = dollar.toFixed(2)
	document.getElementById("euro").value = euro.toFixed(2)
}

window.onload = function () {
	document.getElementsByTagName("button")[0].onclick = converter
}