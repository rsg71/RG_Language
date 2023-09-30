import { getDateXDaysAgo, getDateXDaysAhead } from "../../utils/helperFunctions";

describe('helperFunctions', () => {
    describe('getDateXDaysAgo', () => {
        it('should get a date a given # of days ago', () => {

            const daysAgo = 5;
            const date = new Date(2023, 0, 10);
            const date5DaysBefore = new Date(2023, 0, 5);

            const result = getDateXDaysAgo(daysAgo, date);

            expect(result).toStrictEqual(date5DaysBefore);
        })
    })


    describe('getDateXDaysAhead', () => {
        it('should get a date a given # of days ahead', () => {

            const daysAhead = 5;
            const date = new Date(2023, 0, 10);
            const date5DaysAfter = new Date(2023, 0, 15);

            const result = getDateXDaysAhead(daysAhead, date);

            expect(result).toStrictEqual(date5DaysAfter);
        })
    })
})