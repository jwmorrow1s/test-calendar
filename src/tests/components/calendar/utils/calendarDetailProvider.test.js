import { getMonthName, getLengthOfMonth, getNameOfDay } from '../../../../components/calendar/utils/calendarDetailProvider';
import { months } from '../../../../components/calendar/utils/monthsEnum';
import { days } from '../../../../components/calendar/utils/daysEnum';

test('getMonthName()', () => {
    expect(getMonthName(0)).toStrictEqual(months.JANUARY);
    expect(getMonthName(1)).toStrictEqual(months.FEBRUARY);
    expect(getMonthName(2)).toStrictEqual(months.MARCH);
    expect(getMonthName(3)).toStrictEqual(months.APRIL);
    expect(getMonthName(4)).toStrictEqual(months.MAY);
    expect(getMonthName(5)).toStrictEqual(months.JUNE);
    expect(getMonthName(6)).toStrictEqual(months.JULY);
    expect(getMonthName(7)).toStrictEqual(months.AUGUST);
    expect(getMonthName(8)).toStrictEqual(months.SEPTEMBER);
    expect(getMonthName(9)).toStrictEqual(months.OCTOBER);
    expect(getMonthName(10)).toStrictEqual(months.NOVEMBER);
    expect(getMonthName(11)).toStrictEqual(months.DECEMBER);

    expect(getMonthName(12)).toStrictEqual(months.JANUARY);
    expect(getMonthName(13)).toStrictEqual(months.FEBRUARY);
    expect(getMonthName(14)).toStrictEqual(months.MARCH);
    expect(getMonthName(15)).toStrictEqual(months.APRIL);
    expect(getMonthName(16)).toStrictEqual(months.MAY);
    expect(getMonthName(17)).toStrictEqual(months.JUNE);
    expect(getMonthName(18)).toStrictEqual(months.JULY);
    expect(getMonthName(19)).toStrictEqual(months.AUGUST);
    expect(getMonthName(20)).toStrictEqual(months.SEPTEMBER);
    expect(getMonthName(21)).toStrictEqual(months.OCTOBER);
    expect(getMonthName(22)).toStrictEqual(months.NOVEMBER);
    expect(getMonthName(23)).toStrictEqual(months.DECEMBER);
});

test('getLenthOfMonth()', () => {
    const year = 2019;
    const numberOfMonthsZeroIndexed = 11;
    const expected = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    for(let monthIter = 0, expectedIter = 0; monthIter <= numberOfMonthsZeroIndexed; monthIter++, expectedIter++){
        expect(getLengthOfMonth(year, monthIter)).toStrictEqual(expected[expectedIter]);
    }
});

test('getNameOfDay()', () => {

    const year = 2019;
    const month = 3; //April
    const twoWeekSpan = 14;
    const expected = [days.MONDAY, days.TUESDAY, days.WEDNESDAY, days.THURSDAY, days.FRIDAY, days.SATURDAY, days.SUNDAY, 
                      days.MONDAY, days.TUESDAY, days.WEDNESDAY, days.THURSDAY, days.FRIDAY, days.SATURDAY, days.SUNDAY]

    for(let dayIter = 1, expectedIter = 0; dayIter <= twoWeekSpan; dayIter++, expectedIter++){
        expect(getNameOfDay(year, month, dayIter)).toStrictEqual(expected[expectedIter]);
    }
});