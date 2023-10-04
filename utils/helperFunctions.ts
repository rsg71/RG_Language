/**
 * Get a date x days behind
 * @param numOfDays - how many days ago
 * @param date - the date reference
 * @returns 
 */
export function getDateXDaysAgo(numOfDays: number, date = new Date()): Date {
    const daysAgo = new Date(date.getTime());

    daysAgo.setDate(date.getDate() - numOfDays);

    return daysAgo;
}

/**
 * Get a date x days ahead
 * @param numOfDays - how many days
 * @param date - the date reference
 * @returns 
 */
export function getDateXDaysAhead(numOfDays: number, date = new Date()): Date {
    const daysAhead = new Date(date.getTime());

    daysAhead.setDate(date.getDate() + numOfDays);

    return daysAhead;
}