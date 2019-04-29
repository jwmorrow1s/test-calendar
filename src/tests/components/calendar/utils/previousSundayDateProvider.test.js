import { getSundayOfPreviousMonth } from "../../../../components/calendar/utils/previousSundayDateProvider";
import { months } from '../../../../components/calendar/utils/monthsEnum';
import * as m from '../../../../components/calendar/utils/calendarDetailProvider';

describe('previousSundayDateProvider', () => {
    test('getSundayOfPreviousMonth()', () => {
    
        const year = 2019;
        const expected = [{month: months.DECEMBER, lastSunday: 30}, // 2018 December
                          {month: months.JANUARY, lastSunday: 27}, {month: months.FEBRUARY, lastSunday: 24}, {month: months.MARCH, lastSunday: 31},
                          {month: months.APRIL, lastSunday: 28}, {month: months.MAY, lastSunday: 26}, {month: months.JUNE, lastSunday: 30}, 
                          {month: months.JULY, lastSunday: 28}, {month: months.AUGUST, lastSunday: 25}, {month: months.SEPTEMBER, lastSunday: 29},
                          {month: months.OCTOBER, lastSunday: 27}, {month: months.NOVEMBER, lastSunday: 24}, {month: months.DECEMBER, lastSunday: 29}
                        ];
    
        for(let monthIter = 0, expectedIter = 0; monthIter <= 12; monthIter++, expectedIter++){
            expect(getSundayOfPreviousMonth(year, monthIter)).toStrictEqual(expected[expectedIter].lastSunday);
        }
    });
    
});


