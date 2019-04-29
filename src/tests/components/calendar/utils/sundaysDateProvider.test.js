import { getSundaysInMonth } from "../../../../components/calendar/utils/sundaysDateProvider";
import { days } from "../../../../components/calendar/utils/daysEnum";
import * as previousSunday from "../../../../components/calendar/utils/previousSundayDateProvider";
import * as calendarDetail from "../../../../components/calendar/utils/calendarDetailProvider";

describe('sundaysDateProvider', () => {

    const spyGetSundayOfPreviousMonth = jest.spyOn(previousSunday, 'getSundayOfPreviousMonth');
    const spyGetLengthOfMonth = jest.spyOn(calendarDetail, 'getLengthOfMonth');
    const spyGetNameOfDay = jest.spyOn(calendarDetail, 'getNameOfDay');

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('getSundaysInMonth() where 1st day of current month is not Sunday', () => {
        
        const year = 2019;
        const monthIndex = 3;
        const dateOfFinalSundayOfPreviousMonth = 27;
        const lengthOfPreviousMonth = 30;
        const lengthOfCurrentMonth = 31;
                
        spyGetSundayOfPreviousMonth.mockImplementation(() => dateOfFinalSundayOfPreviousMonth);

        spyGetLengthOfMonth
            .mockReturnValueOnce(lengthOfPreviousMonth)
            .mockReturnValueOnce(lengthOfCurrentMonth);

        spyGetNameOfDay.mockReturnValueOnce(null); // first is not a Sunday

        const sundays = [7, 14, 21, 28]
        for(let iter = 1; iter <= lengthOfCurrentMonth; iter++){
            if(sundays.includes(iter)){
                spyGetNameOfDay.mockReturnValueOnce(days.SUNDAY);
            } else {
                spyGetNameOfDay.mockReturnValueOnce(null);
            }
        }
        
        const actual = getSundaysInMonth(year, monthIndex);
    
        expect(actual[0]).toStrictEqual(dateOfFinalSundayOfPreviousMonth - lengthOfPreviousMonth);
        expect(actual[1]).toStrictEqual(sundays[0]);
        expect(actual[2]).toStrictEqual(sundays[1]);
        expect(actual[3]).toStrictEqual(sundays[2]);
        expect(actual[4]).toStrictEqual(sundays[3]);

    });

    test('getSundaysInMonth() where 1st day of current month is Sunday', () => {
        
        const year = 2019;
        const monthIndex = 3;
        const lengthOfCurrentMonth = 31;
    
        spyGetLengthOfMonth
            .mockReturnValueOnce(lengthOfCurrentMonth);

        spyGetNameOfDay.mockReturnValueOnce(days.SUNDAY); // 1st is Sunday

        const sundays = [1, 8, 15, 22];

        for(let iter = 1; iter <= lengthOfCurrentMonth; iter++){
            if(sundays.includes(iter)){
                spyGetNameOfDay.mockReturnValueOnce(days.SUNDAY);
            } else {
                spyGetNameOfDay.mockReturnValueOnce(null);
            }
        }
        
        const actual = getSundaysInMonth(year, monthIndex);

        expect(actual[0]).toStrictEqual(sundays[0]);
        expect(actual[1]).toStrictEqual(sundays[1]);
        expect(actual[2]).toStrictEqual(sundays[2]);
        expect(actual[3]).toStrictEqual(sundays[3]);
    });
});