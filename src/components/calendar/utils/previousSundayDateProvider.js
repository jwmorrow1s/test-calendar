import { days } from './daysEnum';
import { getLengthOfMonth, getNameOfDay } from './calendarDetailProvider';

export const getSundayOfPreviousMonth = (year, monthIndex) => {

    const isJanuary = monthIndex === 0;

    const previousMonth = isJanuary 
        ? 11
        : monthIndex - 1;

    const adjustedYear = isJanuary
        ? year - 1
        : year;

    const lengthOfPreviousMonth = getLengthOfMonth(adjustedYear, previousMonth);

    const getDayNameInMonth = getNameOfDay.bind(null, adjustedYear, previousMonth);

    for(let dayIter = lengthOfPreviousMonth; true; dayIter--){
        
        if(getDayNameInMonth(dayIter) === days.SUNDAY) {
          return dayIter;
        }            
    }
}