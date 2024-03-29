const wishes = ["Хочу знайти своє покликання", "Бажаю мати стійку фінансову стабільність", "Мрію про власне житло", "Хотілося б мати сім'ю та дітей", "Бажаю знайти свою другу половинку", "Мрію про подорожі по всьому світу", "Хочу знайти баланс між роботою та особистим життям", "Бажаю мати більше часу для себе", "Хочу здійснити свої мрії та цілі", "Мрію про успіх у своїй кар'єрі", "Хотілося б мати сильне здоров'я", "Бажаю знайти себе у творчості", "Мрію про те, щоб стати професійним спортсменом", "Хочу розвивати свої таланти та здібності", "Бажаю мати більше друзів та позитивних знайомств", "Мрію про те, щоб заснувати власний бізнес", "Хочу знайти глибокий сенс у своєму житті", "Бажаю мати більше впевненості в собі", "Мрію про романтичні вечори з коханою людиною", "Хочу навчитися новій мові", "Бажаю знайти гармонію відносин з батьками", "Мрію про те, щоб стати відомим у своїй галузі", "Хочу знайти свою місію в житті", "Бажаю мати більше енергії та життєвої сили", "Мрію про довголіття та молодість духу", "Хочу стати успішним та впливовим лідером", "Бажаю мати більше часу для розвитку власних інтересів", "Бути щасливим", "Мати міцне здоров'я", "Мати успішну кар'єру", "Зустріти свою другу половинку", "Подорожувати по всьому світу", "Мати багато друзів", "Закінчити університет з відзнакою", "Мати власний будинок", "Допомагати тим, хто цього потребує", "Стати успішним у своїй справі", "Мати гармонійні стосунки з батьками та родиною", "Досягнути фінансової стабільності", "Стати відомим у своєму професійному напрямку", "Побачити своїх дітей успішними та щасливими", "Навчитися новій мові", "Прочитати 50 книжок на рік", "Займатися спортом регулярно", "Відвідати всі континенти", "Організувати власний благодійний фонд", "Стати екологічно свідомою людиною", "Вести здоровий спосіб життя", "Навчитися грати на музичному інструменті", "Стати добрим батьком або матір'ю", "Допомагати тваринам та природі", "Подорожувати в космосі", "Розвивати свою творчу сферу", "Відвідувати кожен рік фестиваль кіно в Каннах", "Стати успішним підприємцем", "Створити свій власний бренд", "Закінчити докторантуру"]

function getRandomWish(arr) {
  const minNum = 0
  const maxNum = arr.length - 1
  const randIndex = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))
  return arr[randIndex]
}
function addDiv() {
  const listItems = document.querySelectorAll(".wish__item")
  listItems.forEach((element) => {
    const divForWish = document.createElement("div")
    divForWish.classList.add("wish__text")
    element.prepend(divForWish)
  })
}
addDiv()

const wishItems = document.querySelectorAll(".wish__text")

window.onload = function () {
  wishItems.forEach((element) => {
    let randWish = getRandomWish(wishes)
    element.innerHTML = `${randWish}`
  })
}
