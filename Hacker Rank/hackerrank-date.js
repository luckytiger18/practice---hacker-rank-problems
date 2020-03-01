// Task

// Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

// Input Format

// Locked stub code in the editor reads the following input from stdin:
// The first line contains an integer, d , denoting the number of dates to check.
// Each line i of the d subsequent lines contains a date in MM/DD/YYYY format; each date denotes some dateString that is passed to the function.

function getDayName(dateString) {
    let days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }
    let dayName = new Date (dateString)
    // console.log("date.getDate(): " + dayName.getDay());
    return days[dayName.getDay()]


}
console.log(getDayName('3/5/5102'))

