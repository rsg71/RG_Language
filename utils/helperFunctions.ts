export function get_minutes_ago(minutes: any) {

    let ms_per_minute = 60000;

    let now = new Date();
    console.log('now is: ', now);
    let fourMinutesAgo = "fds"
}

export function get_days_ago(days: any) {


    let now = new Date();

    let olderDate = new Date();

    console.log('now is: ', now);
    let fourMinutesAgo = "fds"
}


export function getDateXDaysAgo(numOfDays: number, date = new Date()) {
    const daysAgo = new Date(date.getTime());

    daysAgo.setDate(date.getDate() - numOfDays);

    return daysAgo;
}

export function getDateXDaysAhead(numOfDays: number, date = new Date()) {
    const daysAhead = new Date(date.getTime());

    daysAhead.setDate(date.getDate() + numOfDays);

    return daysAhead;
}

