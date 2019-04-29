import { getNameOfDay, getLengthOfMonth } from "./calendarDetailProvider";
import { getSundayOfPreviousMonth } from "./previousSundayDateProvider";
import { days } from './daysEnum';

export const getSundaysInMonth = (year, monthIndex) => {

    const sundays = [];
    const firstDayOfMonth = getNameOfDay(year, monthIndex, 1);
    const firstIsNotSunday = firstDayOfMonth !== days.SUNDAY;

    if(firstIsNotSunday){
        const lastSundayOfPreviousMonth = getSundayOfPreviousMonth(year, monthIndex);
        const previousMonth = monthIndex - 1;
        const lengthOfPreviousMonth = getLengthOfMonth(year, previousMonth);
        const positionOfLastSundayInCurrentMonth = lastSundayOfPreviousMonth - lengthOfPreviousMonth;
        
        sundays.push(positionOfLastSundayInCurrentMonth);
    }

    const lengthOfMonth = getLengthOfMonth(year, monthIndex);

    for(let dayIter = 1; dayIter <= lengthOfMonth; dayIter++){
        const currentDay = getNameOfDay(year, monthIndex, dayIter);
        const isSunday = currentDay === days.SUNDAY;
        
        if(isSunday){
            sundays.push(dayIter);
        }
    }

    return sundays;

}
