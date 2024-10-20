function getDateFormat(date, separator = '.') {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (day < 10) day = '0' + day
    if (month < 10) month = '0' + month
    return `${day}${separator}${month}${separator}${year}`;
}

let date = new Date(2001, 4, 5)

console.log(getDateFormat(date))
console.log(getDateFormat(date, '-'))