function addDays(date, days) {
    const millisecondsInADay = 1000 * 60 * 60 * 24
    const updatedDate = new Date(date.getTime() + days * millisecondsInADay)
    return updatedDate
}
const currentDate1 = new Date()
const daysToAdd = 5
const newDate = addDays(currentDate1, daysToAdd)

console.log(`Текущая дата: ${currentDate1}`)
console.log(`Обновленная дата: ${newDate}`)