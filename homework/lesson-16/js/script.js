// ** 0 **
class TDate {
  #day
  #month
  #year
  constructor(day, month, year) {
    this.Day = day
    this.Month = month
    this.Year = year
  }
  //*                 */
  get Day() {
    return this.#day
  }
  set Day(newDay) {
    if (newDay < 0 || newDay > 31) {
      throw new Error("Incorrect day")
    }
    this.#day = newDay
  }
  //*                 */
  get Month() {
    return this.#month
  }
  set Month(newMonth) {
    if (newMonth < 1 || newMonth > 12) {
      throw new Error("Incorrect month")
    }
    this.#month = newMonth
  }
  //*                 */
  get Year() {
    return this.#year
  }
  set Year(newYear) {
    if (newYear < 0) {
      throw new Error("Incorrect year")
    }
    this.#year = newYear
  }
}
