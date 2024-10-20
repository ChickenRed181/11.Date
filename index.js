//Date

const date = new Date()
console.log('Date', date)

//new Date(year, ...)

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000)
console.log('newDate', newDate)

console.log('year', newDate.getFullYear())
console.log('mouth', newDate.getMonth())
console.log('Date', newDate.getDate())
console.log('Hours', newDate.getHours())
console.log('Minutes', newDate.getMinutes())

// День недели
// 0 (воскресение) - 6 (суббота)

console.log('day',newDate.getDay())
if (newDate.getDay() ===4) {
    console.log('Сегодня у нас четверг')
}
newDate.setFullYear(2001)
newDate.setMonth(2)
newDate.setDate(20)
console.log('newDate', newDate)
