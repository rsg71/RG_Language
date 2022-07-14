function get_minutes_ago(minutes) {

    let ms_per_minute = 60000;

    let now = new Date();
    console.log('now is: ', now);
    let fourMinutesAgo = "fds"
}

function get_days_ago(days) {


    let now = new Date();

    let olderDate = new Date();

    console.log('now is: ', now);
    let fourMinutesAgo = "fds"
}


function getDateXDaysAgo(numOfDays, date = new Date()) {
    const daysAgo = new Date(date.getTime());

    daysAgo.setDate(date.getDate() - numOfDays);

    return daysAgo;
}

function getDateXDaysAhead(numOfDays, date = new Date()) {
    const daysAhead = new Date(date.getTime());

    daysAhead.setDate(date.getDate() + numOfDays);

    return daysAhead;
}


module.exports = { getDateXDaysAgo, getDateXDaysAhead }