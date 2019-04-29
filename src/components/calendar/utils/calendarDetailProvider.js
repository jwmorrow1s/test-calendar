import { months } from './monthsEnum';
import { days } from './daysEnum';

export const getMonthName = monthIndex => {

    const adjustedMonthIndex = monthIndex % Object.keys(months).length
    const monthKey = Object.keys(months)[adjustedMonthIndex];

    return months[monthKey];
    
}

export const getLengthOfMonth = (year, monthIndex) => {

    const monthNumber = monthIndex + 1;
    return new Date(year, monthNumber, 0).getDate();
}

export const getNameOfDay = (year, monthIndex, day) => {

    const dayIndex = new Date(year, monthIndex, day).getDay();
    const dayKey = Object.keys(days)[dayIndex]

    return days[dayKey];
}