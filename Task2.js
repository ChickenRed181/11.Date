function convertMsToDays(ms) {
    return Math.round(ms / (1000 * 60 * 60 * 24))
}

function getDaysBeforeBirthday(nextBirthdayDate) {
    const currentDate = new Date()
    const timeDifference = nextBirthdayDate - currentDate
    return convertMsToDays(timeDifference)
}

const currentDate = new Date()

const nextBirthday = new Date(currentDate.getFullYear(), 10, 10)

if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(currentDate.getFullYear() + 1)
}

console.log(getDaysBeforeBirthday(nextBirthday))
