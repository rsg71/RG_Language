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

function speak () {
    console.log("88888888 8*********** 8**** ******** helo world!")
    return 5
}

module.exports = { getDateXDaysAgo, speak }