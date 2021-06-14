export const dayOfTheWeek = (date) => {
    const day = date.getDay();

    switch (day) {
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        case 0:
            return 'Sunday'
    }
}

export const dayAndMonth = (date) => {
    const day = date.getDate();
    const numberOfTheMonth = date.getMonth();
    let month;

    switch (numberOfTheMonth) {
        case 0:
            month = '1'
        case 1:
            month = '2'
        case 2:
            month = '3'
        case 3:
            month = '4'
        case 4:
            month = '5'
        case 5:
            month = '6'
        case 6:
            month = '7'
        case 7:
            month = '8'
        case 8:
            month = '9'
        case 9:
            month = '10'
        case 10:
            month = '11'
        case 11:
            month = '12'
    }

    return `${day}.${month}`
}

export const hour = (date) => {
    console.log(date)
    const hour = date.getHours()
    return hour;
}