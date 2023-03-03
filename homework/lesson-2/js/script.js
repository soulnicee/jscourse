/*
0

// Введення даних. Отримуємо аргументи від користувача
const a = parseFloat(prompt('Введіть значення a', '')),
	b = parseFloat(prompt('Введіть значення b', '')),
	c = parseFloat(prompt('Введіть значення c', ''));


// Виконання операцій
let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / -b)

// Виводимо результат
document.write(
	`
	<ol>
		<li>
			${s1}
		</li>
		<li>
			${s2}
		</li>
		<li>
			${s3}
		</li>
		<li>
			${s4}
		</li>
	</ol>
	`
)
*/

/*
1
// Введення даних. Отримуємо аргументи від користувача
const a = parseFloat(prompt('Введіть значення a', '')),
	b = parseFloat(prompt('Введіть значення b', ''));


// Виконання операцій
let sum = a + b
let mult = a * b
let div = a / b

// Виводимо результат
document.write(
	`
	<table border='2px'>
	<tbody >
		<tr>
			<td >
			${sum}
			</td>
			<td>
			${mult}
			</td>
			<td>
			 ${div}
			</td>
		</tr>
	</tbody>
	</table>
	`
)
*/
/*
2
// Введення даних. Отримуємо аргументи ( працюємо по існуючим аргументам)
let birthDay = 1,
	birthMounth = 1,
	birthYear = 2023;

// Введення даних. Отримуємо аргументи від користувача (варіант 2)
birthYear = parseFloat(prompt('Введіть рік народження', ''));

// Проміжкові величини
let currentDate = new Date(),
	currentYear = currentDate.getFullYear();

// Виконання операцій
let yearsLive = currentYear - birthYear
console.log(yearsLive);

// Виводимо результат
document.write(
	`
		<p>
			Створінню ${yearsLive} повних років. :(
		</p>
	`
)
*/

/*
3
// Введення даних. Отримуємо аргументи від користувача
const productPrice = parseFloat(prompt('Введіть ціну товару (гривні і копійки розділяйте крапкою)', '')),
	productQuantity = parseInt(prompt('Введіть кількість товару', '')),
	currentTax = parseInt(prompt('Введіть податкову ставку', '5')),
	// Проміжкові величини
	tax = currentTax / 100;
// Виконання операцій
let summaryPrice = productPrice * productQuantity,
	taxFromSummaryPrice = summaryPrice * tax;

// Виводимо результат
document.write(
	`
		<p>
			Загальна вартість становить ${summaryPrice.toFixed(2)} гривень, з них ${taxFromSummaryPrice.toFixed(2)} гривень ПДВ
		</p>
	`
)
*/

/*
4

// Введення даних. Отримуємо аргументи від користувача
const lengthSomethingСentimeters = parseInt(prompt('Введіть довжину в сантиметрах', '')),
	// Проміжкові величини,  Виконання операцій
	lengthSomethingMeters = lengthSomethingСentimeters / 100,
	lengthSomethingKilometers = lengthSomethingСentimeters / 100000;


// Виводимо результат
document.write(
	`
		<p>
			${lengthSomethingСentimeters} сантиметрів становить ${lengthSomethingMeters} метрів або ${lengthSomethingKilometers} кілометрів :)
		</p>
	`
)
*/


/*
5
// Введення даних. Отримуємо аргументи від користувача
// Отримуємо поточну дату та час
const nowDay = new Date(),
	// Проміжкові величини,  Виконання операцій
	// За умовами задачі, нам дано кількість секунд з початку поточної доби, тому отримуємо ці дані
	secondsFromDayBegining = nowDay.getHours() * 3600 + nowDay.getMinutes() * 60 + nowDay.getSeconds(),
	hoursFromDayBegining = Math.floor(secondsFromDayBegining / 3600),
	minutesFromDayBegining = Math.floor(secondsFromDayBegining / 60),
	minutesFromHours = minutesFromDayBegining - hoursFromDayBegining * 60;

// Виводимо результат
document.write(
	`
		<p>
			Нове випробування разпочалось ${secondsFromDayBegining} секунд тому, а саме ${hoursFromDayBegining} годин і ${minutesFromHours} хвилин
		</p>
	`
)
*/

/*
6
// Введення даних.
const firstProductPrice = parseFloat(prompt('Введіть вартість товару №1', '')),
	firstProductQuantity = parseInt(prompt('Введіть кількість одиниць товару №1', '')),
	secondProductPrice = parseFloat(prompt('Введіть вартість товару №2', '')),
	secondProductQuantity = parseInt(prompt('Введіть кількість одиниць товару №2', '')),
	thirdProductPrice = parseFloat(prompt('Введіть вартість товару №3', '')),
	thirdProductQuantity = parseInt(prompt('Введіть кількість одиниць товару №3', '')),

	//  Виконання операцій
	firstProductSummaryPrice = firstProductPrice * firstProductQuantity,
	secondProductSummaryPrice = secondProductPrice * secondProductQuantity,
	thirdProductSummaryPrice = thirdProductPrice * thirdProductQuantity,
	summaryPrice = firstProductSummaryPrice + secondProductSummaryPrice + thirdProductSummaryPrice,
	summaryQuantity = firstProductQuantity + secondProductQuantity + thirdProductQuantity;


// Виводимо результат
document.write(
	`
	<h1>Товарний чек</h1>
	<div style="display: flex; justify-content: space-between; max-width: 750px;">
		<div>
			<ol>
				<li>
					Товар 1
				</li>
				<li>
					Товар 2
				</li>
				<li>
					Товар 3
				</li>
			</ol>
		</div>
		<div>
			<ol>
				<li>
					Кількість товару 1 - ${firstProductQuantity}
				</li>
				<li>
					Кількість товару 2 - ${secondProductQuantity}
				</li>
				<li>
					Кількість товару 3 - ${thirdProductQuantity}
				</li>
			</ol>
		</div>
		<div>
			<ol>
				<li>
					Сумарна ціна за товар 1 - ${firstProductSummaryPrice}
				</li>
				<li>
					Сумарна ціна за товар 2 - ${secondProductSummaryPrice}
				</li>
				<li>
				Сумарна ціна за товар 3 - ${thirdProductSummaryPrice}
				</li>
			</ol>
		</div>
	</div>
<h2>Сумарна ціна за ${summaryQuantity} куплених товарів становить ${summaryPrice}</h2>

	`
)
*/
/*
7
// Введення даних.
const monthMinAmount = 1,
	monthMaxAmount = 12,
	dayMinAmount = 1,
	dayMaxAmount = 7;


//  Виконання операцій
let randomMonthAmount = Math.floor(Math.random() * (monthMaxAmount - monthMinAmount + 1)) + monthMinAmount
let randomDayAmount = Math.floor(Math.random() * (dayMaxAmount - dayMinAmount + 1)) + dayMinAmount
let sumRandomDayAndRandomMonth = randomMonthAmount + randomDayAmount






// Виводимо результат
document.write(
	`
		<p>
			Номер випадкового місяця - ${randomMonthAmount}
		</p>
		<p>
			Номер випадкового дня - ${randomDayAmount}
		</p>
		<p>
			Сума номерів випадкового місяці і дня - ${sumRandomDayAndRandomMonth}
		</p>
	`
)
*/

//========================================================================================================================================================
/*
// Extra Tasks

// ** 1 **
// Введення даних.
const userWindowWidth = window.innerWidth,
	quantityElementsInRow = parseInt(prompt(`Ширина вашого екрану ${userWindowWidth} пікселя. Скільки елементів хочете відобразити в рядку?`, ''))

// Проміжкові величини //  Виконання операцій
widthElementsInRow = userWindowWidth / quantityElementsInRow

// Виводимо результат
document.write(
	`
		<p>
			Враховуючи ширину екрану ${userWindowWidth} пікселя,  ширина кожного з ${quantityElementsInRow} елементів буде становити ${widthElementsInRow.toFixed(2)} пікселя.
		</p>
	`
)
*/
/*
// ** 2 **
// Введення даних.

const userSalary = parseInt(prompt('Введіть вашу заробітню плату без копійок', '')),
	costOfLiving = parseInt(prompt('Введіть розмір прожиткового мінімуму', ''))

//  Виконання операцій
socialSupport = costOfLiving - userSalary
// Виводимо результат
socialSupport <= 0
	? document.write(
		`
		<p>
			Соціальна допомога вам не передбачена
		</p>
	`
	) : document.write(
		`
		<p>
			Ваша соціальна допомога становить ${socialSupport} гривень
		</p>
	`
	)
*/
/*
// ** 3 **
// Введення даних.
const firstProductQuantity = parseInt(prompt('Введіть кількість першого товару', '')),
	firstProductPrice = parseFloat(prompt('Введіть вартість за одиницю першого товару', '')),
	secondProductQuantity = parseInt(prompt('Введіть кількість другого товару', '')),
	secondProductPrice = parseFloat(prompt('Введіть вартість за одиницю другого товару', ''));

//  Виконання операцій

const firstSummaryProductPrice = firstProductQuantity * firstProductPrice,
	secondSummaryProductPrice = secondProductQuantity * secondProductPrice,
	summaryPrice = firstSummaryProductPrice + secondSummaryProductPrice;

// Виводимо результат
document.write(
	`
		<p>
			Першого товару куплено на ${firstSummaryProductPrice}, другого товару куплено на ${secondSummaryProductPrice}, сумарно сплачено ${summaryPrice}
		</p>
	`
)
*/
/*
// ** 4 **
// Введення даних.
const childAge = parseInt(prompt('Скільки повних років вашій дитині?', '')),
	startStudyInKindergarten = 2,
	startStudyInSchool = 6,
	finishStudyInSchool = 18,
	startStudyInUniversity = 18,
	finishStudyInUniversity = 22;

// Проміжкові величини


//  Виконання операцій
const beginingStudyInKindergarten = startStudyInKindergarten - childAge,
	beginingStudyInSchool = startStudyInSchool - childAge,
	finishingStudyInSchool = finishStudyInSchool - childAge,
	beginingStudyInUniversity = startStudyInUniversity - childAge,
	finishingStudyInUniversity = finishStudyInUniversity - childAge;

// Похід в садочок
let kingergartenPassed = `Ваша дитина піде до садочку через ${beginingStudyInKindergarten} років`;
beginingStudyInKindergarten < 0
	? kingergartenPassed = `Ваша дитина закінчила садочок ${Math.abs(beginingStudyInKindergarten)} років тому`
	: null
beginingStudyInKindergarten === 0
	? kingergartenPassed = `Ваша дитина піде до садочку в цьому році`
	: null


// Похід до школи
let schoolPassed = `Ваша дитина піде до школи через ${beginingStudyInSchool} років та закінчить школу через ${finishingStudyInSchool} років`;

beginingStudyInSchool < 0
	? schoolPassed = `Ваша дитина пішла до школи ${Math.abs(beginingStudyInSchool)} років тому та буде ще вчитися в школі ${(finishStudyInSchool - startStudyInSchool) - Math.abs(beginingStudyInSchool)} років`
	: null
finishingStudyInSchool === 0
	? schoolPassed = `Ваша дитина пішла до школи ${Math.abs(beginingStudyInSchool)} років тому та закінчить школу в цьому році`
	: null
finishingStudyInSchool < 0
	? schoolPassed = `Ваша дитина пішла до школи ${Math.abs(beginingStudyInSchool)} років тому та закінчила школу ${Math.abs(beginingStudyInUniversity)} років тому`
	: null

// Похід до університету
let universityPassed = `Ваша дитина вступить до університету через ${beginingStudyInUniversity} років та випуститься з університету через ${finishingStudyInUniversity} років`;
beginingStudyInUniversity < 0
	? universityPassed = `Ваша дитина вступила до університету ${Math.abs(beginingStudyInUniversity)} років тому та буде ще вчитися в університеті ${(finishingStudyInUniversity - beginingStudyInUniversity) - Math.abs(beginingStudyInUniversity)} років`
	: null

finishingStudyInUniversity === 0
	? universityPassed = `Ваша дитина вступила до університету ${Math.abs(beginingStudyInUniversity)} років тому та випуститься з університету в цьому році`
	: null

finishingStudyInUniversity < 0
	? universityPassed = `Ваша дитина вступила до університету ${Math.abs(beginingStudyInUniversity)} років тому та випустилась ${childAge - finishStudyInUniversity} років тому`
	: null

// Виводимо результат
document.write(
	`
		<p>
			Вашій дитині ${childAge} років
		</p>
		<p>
			${kingergartenPassed}
		</p>
		<p>
			${schoolPassed}
		</p>
		<p>
			${universityPassed}
		</p>
	`
)
*/
/*
// ** 5 **
// Введення даних.
const currentSalary = parseInt(prompt('Вкажіть вашу зарплатню до сплати податку', ''))
currentTax = parseInt(prompt('Введіть податкову ставку', '20')),
	taxInPercent = currentTax / 100,
	taxFee = currentSalary * taxInPercent,
nettoSalary = currentSalary - taxFee 


	// Виводимо результат
	document.write(
		`
		<p>
			Ви отримаєте ${nettoSalary} гривень після сплати подактів :( 
		</p>
		<p>
			Вітаємо, ви сплатили ${taxFee} гривень податків :( 
		</p>
	`
	)
	*/
/*
// ** 6 **
// Введення даних.
let a = parseFloat(prompt('Введіть значення змінної a', '')),
	b = parseFloat(prompt('Введіть значення змінної b', '')),
	c = parseFloat(prompt('Введіть значення змінної c', ''));
// Проміжкові величини
let d = a;
	//  Виконання операцій
	a = b
	b = c
	c = d

// Виводимо результат
document.write(
	`
		<p>
			a = ${a}
		</p>
		<p>
			b = ${b}
		</p>
		<p>
			c = ${c}
		</p>
	`
)
*/
/*
// ** 7 **
// Введення даних.
const userNumber = parseFloat(prompt('Введіть будь-яке число', '')),
	//  Виконання операцій
	userIntegerNumber = Math.trunc(userNumber),
	userFractionMumber = parseFloat((userNumber - userIntegerNumber).toFixed(2))


// Виводимо результат
document.write(
	`
		<p>
			Ви ввели число ${userNumber}
		</p>
		<p>
			Ціла частина числа ${userIntegerNumber}
		</p>
		<p>
			Дробова частина числа ${userFractionMumber}
		</p>
	`
)
*/
/*
// ** 8 **
// Введення даних.
const userYear = parseInt(prompt('Введіть будь-який рік', '')),
//  Виконання операцій
century = Math.ceil(userYear / 100);

// Виводимо результат
document.write(
	`
		<p>
			Зараз ${century} сторіччя
		</p>
	`
)
*/
/*
// ** 9 **
// Введення даних.
const nowDay = new Date(),
	// Проміжкові величини,  Виконання операцій
	secondsFromDayBegining = nowDay.getHours() * 3600 + nowDay.getMinutes() * 60 + nowDay.getSeconds(),
	hoursFromDayBegining = Math.floor(secondsFromDayBegining / 3600),
	minutesFromDayBegining = Math.floor(secondsFromDayBegining / 60),
	minutesFromHours = minutesFromDayBegining - hoursFromDayBegining * 60;

// Виводимо результат
document.write(
	`
		<p>
			Нове випробування разпочалось ${secondsFromDayBegining} секунд тому, а саме ${hoursFromDayBegining} годин і ${minutesFromHours} хвилин
		</p>
	`
)
*/
/*
// ** 10 **
// Введення даних.
const userPenny = parseInt(prompt('Скільки монет номіналом "1 копійка" ви маєте?', ''))
grivna = Math.trunc(userPenny / 100)
penny = userPenny % 100
document.write(
	`
		<p>
			Ви маєте ${grivna} грн. і ${penny} коп.
		</p>
	`
)
*/
/*
// ** 11 **
// Введення даних.
const nowDay = new Date(),
	userSeconds = parseInt(prompt('Введіть кількість секунд', '')),
	userMinutes = parseInt(prompt('Введіть кількість хвилин', '')),

	totalSeconds = (nowDay.getHours() * 3600) + (nowDay.getMinutes() * 60) + nowDay.getSeconds() + (userMinutes * 60) + userSeconds,
	newHours = Math.floor(totalSeconds / 3600) % 24,
	newMinutes = Math.floor(totalSeconds / 60) % 60,
	newSeconds = totalSeconds % 60;

document.write(
	`
		<p>
			Через ${newMinutes} хв. і ${newSeconds} сек. буде ${newHours}:${newMinutes}:${newSeconds}
		</p>
	`
)
*/
/*
// ** 12 **
// Введення даних.
const userMonets = parseInt(prompt('Введіть кількість монет', ''));
// Проводимо обчислення
grivnaInTwoPenny = Math.trunc(userMonets * 2 / 100)
pennyInTwo = (userMonets * 2) % 100

grivnaInFivePenny = Math.trunc(userMonets * 5 / 100)
pennyInFive = (userMonets * 5) % 100

grivnaInTwentyFivePenny = Math.trunc(userMonets * 25 / 100)
pennyInTwentyFive = (userMonets * 25) % 100

grivnaInFifteenPenny = Math.trunc(userMonets * 50 / 100)
pennyInFifteen = (userMonets * 50) % 100

document.write(
	`
		<p>
			Якщо у вас монети номіналом 2 копійки - ви маєте ${grivnaInTwoPenny} грн. і ${pennyInTwo} коп.
		</p>
		<p>
			Якщо у вас монети номіналом 5 копійок - ви маєте ${grivnaInFivePenny} грн. і ${pennyInFive} коп.
		</p>
		<p>
			Якщо у вас монети номіналом 25 копійок - ви маєте ${grivnaInTwentyFivePenny} грн. і ${pennyInTwentyFive} коп.
		</p>
		<p>
			Якщо у вас монети номіналом 50 копійок - ви маєте ${grivnaInFifteenPenny} грн. і ${pennyInFifteen} коп.
		</p>
	`
)

*/
/*
// ** 13 **
// Введення даних.
const userDigit = parseInt(prompt('Введіть кількість днів', ''));

// Проводимо обчислення
const fullWeeks = Math.floor(userDigit / 7),
otherDays = userDigit % 7


document.write(
	`
		<p>
			У введеній кількості днів ${fullWeeks} повних тижнів та ${otherDays} днів
		</p>
	`
)
*/
/*
// ** 14 **
// Введення даних.

const userDayOfWeek = parseInt(prompt('Введіть день тижня(від 1 до 7)', '')),
	userDayInFuture = parseInt(prompt('Який день буде через... (введіть через скільки днів)', ''));

let dayInWeek = ((userDayOfWeek + userDayInFuture)  % 7)
dayInWeek === 0 ? 7 : dayInWeek;

document.write(
	`
		<p>
			Через ${userDayInFuture} днів буде ${dayInWeek} день тижня
		</p>
	`
)
*/
/*
// ** 15 **
// Введення даних.
const userMonth = parseInt(prompt('Введіть кількість місяців',''));

years = Math.trunc(userMonth / 12) 
month = userMonth % 12
document.write(
	`
		<p>
			Пройшло ${years} роки та ${month} місяці
		</p>
	`
)
*/
/*
// ** 16 **
// Введення даних.

const userMonth = parseInt(prompt('Вкажіть номер місяця, від 1 до 12', '')),
	userNumber = parseInt(prompt('Який місяць буде через... (введіть через скільки місяців)', ''));

let monthInYear = ((userMonth + userNumber) % 12)
monthInYear === 0 ? 12 : monthInYear;

document.write(
	`
		<p>
			Через ${userNumber} місяців буде ${monthInYear} місяць
		</p>
	`
)
*/
/*
// ** 17 **
// Введення даних.
const userChar = prompt('Введіть літеру латинскього алфавіту у верхньому регістрі', '').toUpperCase(),
	userOffset = parseInt(prompt('Введіть на скільки символів зробити зміщення, від 3 до 12', '')),
	alphabetLatin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	indexOfChar = alphabetLatin.indexOf(userChar),
	newIndexOfChar = (indexOfChar + userOffset) % 26;
console.log(userChar);
let result = '';
indexOfChar === -1 ? result = userChar : result = alphabetLatin[newIndexOfChar]

document.write(
	`
		<p>
			Введена вами буква була зміщена. Тепер це ${result}
		</p>
	`
)
*/
