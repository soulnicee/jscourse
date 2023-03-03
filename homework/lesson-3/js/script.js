/*
// ** 0 **
// Отримуємо дані
const firstUserName = prompt("Введіть ім'я першої дитини", ''),
	firstUserCandiesQuantity = parseInt(prompt('Скільки цукерок має перша дитина?', '')),
	secondUserName = prompt("Введіть ім'я другої дитини", ''),
	secondUserCandiesQuantity = parseInt(prompt("Скільки цукерок має друга дитина?", ''));

// Проміжкові дії


if (firstUserCandiesQuantity > secondUserCandiesQuantity) {
	//Виведення результату
	document.write(
		`
		<p>
			У ${firstUserName} цукерок більше.
		</p>
	`
	)
} else if (secondUserCandiesQuantity > firstUserCandiesQuantity) {
	//Виведення результату
	document.write(
		`
		<p>
			У ${secondUserName} цукерок більше.
		</p>
	`
	)
} else {
	//Виведення результату
	document.write(
		`
		<p>
			${firstUserName} і ${secondUserName} мають однакову кількість цукерок.
		</p>
	`
	)
}
*/
/*
// ** 1 **
// Отримуємо дані
const userProductPrice = parseFloat(prompt('Введіть ціну товару', '')),
	userMoney = parseFloat(prompt('Скільки грошей ви маєте?', '')),
	lotteryPrice = 4;


if (userProductPrice > userMoney) {
	document.write(
		`
		<p>
			На превеликий жаль ваших грошей не достатньо для купівлі цього товару. Будь-ласка, роздобудьте більше грошей і повертайтесь.
		</p>
	`
	)
} else if ((userMoney - userProductPrice) >= lotteryPrice) {
	document.write(
		`
		<p>
			Ви успішно купили товар. Бачу, що ви азартна людина. У мене є для вас лотерея всього за ${lotteryPrice} гривні. Ви обовз'зково виграєте!
		</p>
	`
	)
} else {
	document.write(
		`
		<p>
			Ви успішно купили товар.
		</p>
	`
	)
}
*/
/*
// ** 2 **
// Отримуємо дані
let userAnswer = parseInt(prompt('Вгадайте число від 1 до 5. У вас є 2 спроби. Спроба перша. Введіть число', ''));
const minNumber = 1,
	maxNumber = 5,
	randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

if (userAnswer < minNumber || userAnswer > maxNumber) {
	document.write(
		`
		<p>
			Введене число виходить за допустимий діапазон чисел. Спробуйте спочатку.
		</p>
	`
	)
} else if (userAnswer === randomNumber) {
	document.write(
		`
		<p>
			Вітаємо, сьогодні фортуна на вашій стороні! Ви вгадали число з першого разу! Купіть лотерею з попередньої задачі, вам точно пощастить!
		</p>
	`
	)
} else {
	userAnswer = parseInt(prompt('Вгадайте число від 1 до 5. У вас є 2 спроби. Спроба перша. Введіть число', ''))
	if (userAnswer === randomNumber) {
		document.write(
			`
		<p>
			Ви вгадали число з другого разу!
		</p>
	`
		)
	} else {
		document.write(
			`
		<p>
			Ви не вгадали число!
		</p>
	`
		)
	}
}
*/
/*
// ** 3 **
// Отримуємо дані
const userAge = parseInt(prompt('Скільки вам повних років?', '')),
	kindergartenAge = 2,
	schoolAge = 6,
	studentAge = 18,
	employeeAge = 22,
	pensionerAge = 65;

if (userAge < kindergartenAge) {
	document.write(
		`
		<p>
			Ви немовля!
		</p>
	`
	)
} else if (userAge >= kindergartenAge && userAge < schoolAge) {
	document.write(
		`
		<p>
			Ви дитинa у садочку!
		</p>
	`
	)
} else if (userAge >= schoolAge && userAge < studentAge) {
	document.write(
		`
		<p>
			Ви школяр!
		</p>
	`
	)
} else if (userAge >= studentAge && userAge < employeeAge) {
	document.write(
		`
		<p>
			Ви студент!
		</p>
	`
	)
} else if (userAge >= employeeAge && userAge < pensionerAge) {
	document.write(
		`
		<p>
			Ви працівник!
		</p>
	`
	)
} else {
	document.write(
		`
		<p>
			Ви пенсіонер!
		</p>
	`
	)
}
*/
/*
// ** 4 **
// Отримуємо дані

const userDrivingLicenseCategory = prompt('Яку категорію у водійському посвідченні ви маєте?(якщо декілька, вводьте по одній за раз)', '');

if (userDrivingLicenseCategory.toUpperCase() === 'A') {
	document.write(
		`
		<p>
			Ви можете керувати мотоциклом!
		</p>
	`
	)
} else if (userDrivingLicenseCategory.toUpperCase() === 'B') {
	document.write(
		`
		<p>
			Ви можете керувати легковим автомобілем!
		</p>
	`
	)
} else if (userDrivingLicenseCategory.toUpperCase() === 'C') {
	document.write(
		`
		<p>
			Ви можете керувати вантажним автомобілем!
		</p>
	`
	)
} else {
	document.write(
		`
		<p>
			Введені дані не коректні. Введіть категрію латинськими літерами. 
		</p>
	`
	)
}
*/
/*
// ** 5 **
// Отримуємо дані
const userDayNumber = parseInt(prompt('Введіть номер дня тижня', ''));
let dayName = "";

switch (userDayNumber) {
	case 1:
		dayName = 'понеділок';
		break;
	case 2:
		dayName = 'вівторок';
		break;
	case 3:
		dayName = 'середа';
		break;
	case 4:
		dayName = 'четвер';
		break;
	case 5:
		dayName = "п'ятниця";
		break;
	case 6:
		dayName = 'субота';
		break;
	case 7:
		dayName = 'неділя';
		break;

	default:
		dayName = 'такий день, якого не існує! Введіть коректні дані';
		break;
}

document.write(
	`
		<p>
			Сьогодні ${dayName}!
		</p>
	`
)
*/
/*
// ** 6 **
// Отримуємо дані
const userMonthNumber = parseInt(prompt('Введіть номер місяця', ''));
if (userMonthNumber <= 0 || userMonthNumber > 12) {
	document.write(
		`
		<p>
			Некоректно введені дані!
		</p>
	`
	)
} else if (userMonthNumber === 12 || userMonthNumber <=2) {
	document.write(
		`
		<p>
			Зараз зима! Вдягайтесь тепліше! :)
		</p>
	`
	)
} else if (userMonthNumber <= 5) {
	document.write(
		`
		<p>
			Зараз весна! Скоро літо..! :)
		</p>
	`
	)
} else if (userMonthNumber <= 8) {
	document.write(
		`
		<p>
			Зараз літо! Ура! А ти не схуд(ла) :)
		</p>
	`
	)
} else {
	document.write(
		`
		<p>
			Зараз осінь! Бери парасольку :)
		</p>
	`
	)
}
*/

// Extra Tasks
/*
// ** 0 **
// Отримуємо дані
const userEmoticonNumber = parseInt(prompt('Виберіть ваш стан: 1.Веселий 2.Сумний 3.Обурений', ''));

let emoticonCode = 0;

switch (userEmoticonNumber) {
	case 1:
		emoticonCode = String.fromCodePoint(128516);
		break;
	case 2:
		emoticonCode = String.fromCodePoint(128542);
		break;
	case 3:
		emoticonCode = String.fromCodePoint(128545);
		break;
	default:
		emoticonCode = 'Ви ввели некоректні дані'
		break;
}

document.write(
	`
		<p>
			${emoticonCode}
		</p>
	`
)
*/

/*
// ** 1 **
// Отримуємо дані
const minNumber = 1,
	maxNumber = 100,
	numberOffset = 10,
	firstRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber,
	secondRandomNumber = Math.floor(Math.random() * (maxNumber - firstRandomNumber + 1)) + firstRandomNumber,
	rangeStart = Math.min(firstRandomNumber, secondRandomNumber) - 10 < 1 ? 1 : Math.min(firstRandomNumber, secondRandomNumber) - 10,
	rangeEnd = Math.max(firstRandomNumber, secondRandomNumber) + 10 > 100 ? 100 : Math.max(firstRandomNumber, secondRandomNumber) + 10,
	userNumber = parseInt(prompt('Назвіть число від 1 до 100', ''));
console.log(rangeStart);
console.log(rangeEnd);
console.log(userNumber);
if (userNumber >= rangeStart && userNumber <= rangeEnd) {
	document.write(
		`
		<p>
			Вітаю, ви виграли!
		</p>
	`
	)
} else {
	document.write(
		`
		<p>
			Нажаль, ви програли!
		</p>
	`
	)
}
*/
/*
// ** 2 **
// Отримуємо дані
const minNumber = 1,
	maxNumber = 10,
	randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber,
	userOneNumber = parseInt(prompt('Гравець 1: Введіть число від 1 до 10', '')),
	userTwoNumber = parseInt(prompt('Гравець 2: Введіть число від 1 до 10', '')),
	userOneDistance = Math.abs(randomNumber - userOneNumber),
	userTwoDistance = Math.abs(randomNumber - userTwoNumber);


if (userOneDistance < userTwoDistance) {
	document.write(
		`
		<p>
			Виграв перший гравець!
		</p>
	`
	)
} else if (userTwoDistance < userOneDistance) {
	document.write(
		`
		<p>
			Виграв другий гравець!
		</p>
	`
	)
} else {
	document.write(
		`
		<p>
			Нічия!
		</p>
	`
	)
}
*/
/* 
// ** 3 - 4 **
let userNumbersOfSquare = parseInt(
  prompt(
    "Морський бій.Введіть кількість квадратів, на яких може бути розміщений ворожий корабель",
    ""
  )
);
if (userNumbersOfSquare < 1) {
  userNumbersOfSquare = 1;
}

let minNumberOfSquare = 1,
  enemiesWarshipSquare =
    Math.floor(Math.random() * (userNumbersOfSquare - minNumberOfSquare + 1)) +
    minNumberOfSquare;
let userAnswer = parseInt(
  prompt(
    `Корабель може бути на 1 із ${userNumbersOfSquare} квдратів. Введіть номер квадрату, по якому хочете зробити постріл`,
    ""
  )
);

if (enemiesWarshipSquare - 1 === userAnswer || enemiesWarshipSquare + 1 === userAnswer) {
  enemiesWarshipSquare = Math.floor(Math.random() * (userNumbersOfSquare - minNumberOfSquare + 1)) + minNumberOfSquare;
  userAnswer = parseInt(prompt(`Вітаємо! Корабель ранений! Введіть номер квадрату, по якому хочете зробити постріл. Майте на увазі, корабель міг переміститися в іншу клітинку. Це остання спроба!`,""));
  if (userAnswer === enemiesWarshipSquare) {
    document.write(
      `
		<p>
			Вітаємо! Корабель вбитий!
		</p>
	`
    );
  } else {
    document.write(
      `
		<p>
			Ви програли!
		</p>
	`
    );
  }
} 

else if (!(enemiesWarshipSquare - 1 === userAnswer || enemiesWarshipSquare + 1 === userAnswer) &&!(userAnswer === enemiesWarshipSquare)) {
  enemiesWarshipSquare =
    Math.floor(Math.random() * (userNumbersOfSquare - minNumberOfSquare + 1)) +
    minNumberOfSquare;
  userAnswer = parseInt(
    prompt(
      `Введіть номер квадрату, по якому хочете зробити постріл. Майте на увазі, корабель міг переміститися в іншу клітинку. Це остання спроба!`,
      ""
    )
  );
  if (userAnswer === enemiesWarshipSquare) {
    document.write(
      `
		<p>
			Вітаємо! Корабель вбитий!
		</p>
	`
    );
  } else {
    document.write(
      `
		<p>
			Ви програли!
		</p>
	`
    );
  }
} 


else {
  document.write(
    `
		<p>
			Вітаємо! Корабель вбитий!
		</p>
	`
  );
}
*/
/*
// ** 5 **
// Отримуємо дані
const minQuantity = 1,
  maxQuantity = 2;
let harePositionRow = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity,
  harePositionColumn = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity,
  userAnswerRow = parseInt(prompt("Злови зайця. Ігрове поле - 2 х 2. Маєте дві спроби. Введіть номер рядка", "")),
  userAnswerColumn = parseInt(prompt("Злови зайця. Ігрове поле - 2 х 2. Маєте дві спроби. Введіть номер колонки", "")),
  userPoints = 0,
  textForUser = "";
if (harePositionRow === userAnswerRow && harePositionColumn === userAnswerColumn) {
  userPoints = 100;
  textForUser = "Вітаємо! Заєць потрапив у пастку з першої спроби!";
} else {
  userAnswerRow = parseInt(prompt("Злови зайця. Ігрове поле - 2 х 2. Спроба 2. Введіть номер рядка", ""));
  userAnswerColumn = parseInt(prompt("Злови зайця. Ігрове поле - 2 х 2. Спроба 2. Введіть номер колонки", ""));
  if (harePositionRow === userAnswerRow && harePositionColumn === userAnswerColumn) {
    userPoints = 50;
    textForUser = "Вітаємо! Заєць потрапив у пастку з другої спроби!";
  } else {
    userPoints = 0;
    textForUser = "Співчуваємо! Заєць не потрапив у пастку!";
  }
}

document.write(
  `
		<p>
			${textForUser} Ви маєте ${userPoints} очків.
		</p>
	`
);
*/
/*
// ** 6 **
// Отримуємо дані
const userGreetings = prompt('Вітаємо! Це гра кості. Якщо випадає парне число - ваші бали збільшуються на це число. Якщо не парне - відповідно зменшуються на це число. Ви маєте дві спроби. Чи робити другу спробу - вирішувати вам. Щоб розпочати - натисніть "OK"', '')
const minNumber = 1,
	maxNumber = 6;

let userTry = '',
	userPoints = 0,
	randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

console.log(userGreetings);

if ((randomNumber % 2)) {
	userPoints -= randomNumber;
	userTry = prompt(`Випало число ${randomNumber}. Кількість ваших балів ${userPoints}. Щоб продовжити, натисніть ОК. Щоб закінчити гру - натисніть ВІДМІНА`, '')
	randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	if (!userTry) {
		if ((randomNumber % 2)) {
			userPoints -= randomNumber;
		} else {
			userPoints += randomNumber;
		}
		userTry = prompt(`Випало число ${randomNumber}. Кількість ваших балів ${userPoints}.`, '')
		if (userPoints < 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви програли
		</p>
	`
			)
		} else if (userPoints > 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви виграли
		</p>
	`
			)
		} else {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Нічия
		</p>
	`
			)
		}
	} else {
		if (userPoints < 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви програли
		</p>
	`
			)
		} else if (userPoints > 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви виграли
		</p>
	`
			)
		} else {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Нічия
		</p>
	`
			)
		}
	}
} else {
	userPoints += randomNumber;
	userTry = prompt(`Випало число ${randomNumber}. Кількість ваших балів ${userPoints}. Щоб продовжити, натисніть ОК. Щоб закінчити гру - натисніть ВІДМІНА`, '')
	randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
	if (!userTry) {
		if ((randomNumber % 2)) {
			userPoints -= randomNumber;
		} else {
			userPoints += randomNumber;
		}
		userTry = prompt(`Випало число ${randomNumber}. Кількість ваших балів ${userPoints}.`, '')
		if (userPoints < 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви програли
		</p>
	`
			)
		} else if (userPoints > 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви виграли
		</p>
	`
			)
		} else {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Нічия
		</p>
	`
			)
		}
	} else {
		if (userPoints < 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви програли
		</p>
	`
			)
		} else if (userPoints > 0) {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Ви виграли
		</p>
	`
			)
		} else {
			document.write(
				`
		<p>
			Кількість ваших балів ${userPoints}. Нічия
		</p>
	`
			)
		}
	}
}

*/

/*
// ** 7 **
// Отримуємо дані
const userQuantityOfSides = parseInt(prompt('Введіть кількість сторін багатокутника', ''));
let geometricFigure = '';

switch (userQuantityOfSides) {
	case 3:
		geometricFigure = 'Трикутник';
		break;
	case 4:
		geometricFigure = 'Чотирикутник';
		break;

	case 5:
		geometricFigure = "П'ятикутник";
		break;

	case 6:
		geometricFigure = 'Шестикутник';
		break;

	default:
		geometricFigure = 'Невірно введені дані';
		break;
}

document.write(
	`
		<p>
			${geometricFigure}
		</p>
	`
)
*/
/*
// ** 8 **
// Отримуємо дані
const userFileFormatLetter = prompt('Введіть першу літеру розширення файлу («html», «doc», «jpeg», «mp3», «xls»)', '');
let	programForOpen = '';
switch (userFileFormatLetter.charAt(0).toLowerCase()) {
	case 'h':
		programForOpen = 'Блокнот, WordPad, Браузер, Редактор коду'
		break;
	case 'd':
		programForOpen = 'Microsoft Word, Libra Office, etc'
		break;
	case 'j':
		programForOpen = 'Paint'
		break;
	case 'm':
		programForOpen = 'Aimp'
		break;
	case 'x':
		programForOpen = 'Microsoft Excel'
		break;
	default:
		programForOpen = 'Ввели некоректну літеру, спробуйте ще'
		break;
}

document.write(
	`
		<p>
			${programForOpen}
		</p>
	`
)
*/
