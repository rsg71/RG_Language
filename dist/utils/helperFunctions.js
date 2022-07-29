"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateXDaysAhead = exports.getDateXDaysAgo = exports.get_days_ago = exports.get_minutes_ago = void 0;
function get_minutes_ago(minutes) {
    let ms_per_minute = 60000;
    let now = new Date();
    console.log('now is: ', now);
    let fourMinutesAgo = "fds";
}
exports.get_minutes_ago = get_minutes_ago;
function get_days_ago(days) {
    let now = new Date();
    let olderDate = new Date();
    console.log('now is: ', now);
    let fourMinutesAgo = "fds";
}
exports.get_days_ago = get_days_ago;
function getDateXDaysAgo(numOfDays, date = new Date()) {
    const daysAgo = new Date(date.getTime());
    daysAgo.setDate(date.getDate() - numOfDays);
    return daysAgo;
}
exports.getDateXDaysAgo = getDateXDaysAgo;
function getDateXDaysAhead(numOfDays, date = new Date()) {
    const daysAhead = new Date(date.getTime());
    daysAhead.setDate(date.getDate() + numOfDays);
    return daysAhead;
}
exports.getDateXDaysAhead = getDateXDaysAhead;
//# sourceMappingURL=helperFunctions.js.map