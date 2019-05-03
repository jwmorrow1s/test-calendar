import React from 'react';
import Month from '../month/Month';
import { getLengthOfMonth } from './utils/calendarDetailProvider';
import { sign } from './utils/signEnum';
import MonthPicker from '../monthPicker/monthPicker';

    class Calendar extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                events: [],
                year: null,
                month: null,
                days: null,
                dayIsSelected: false,
                selectedDate: null,
                firstVisibleDate: null,
                lastVisibleDate: null,
            };
        }

        componentDidMount = () => {

            const {year, month} = this.props;
            const date = new Date();

            const yearToSet = year ? year : date.getFullYear();
            const monthToSet = month ? month : date.getMonth();
            const lengthOfDaysInMonth = getLengthOfMonth(yearToSet, monthToSet);
            

            this.setState({
                year: yearToSet,
                month: monthToSet,
                days: lengthOfDaysInMonth
            })
        }

        monthChangeCallback = direction => {

            const {month} = this.state;

            switch(direction){
                case sign.POSITIVE:{
                    this.setState({month: month + 1});
                    return;
                }
                case sign.NEGATIVE: {
                    if(month === 0){
                        this.setState({month: 11});
                        return;
                    } else {
                        this.setState({month: month - 1});
                        return;
                    }
                }
                default: return;
            }
        }

        selectedDayCallback = dayClicked => {

            const {selectedDate} = this.state;

            if(dayClicked === selectedDate){
                this.setState({selectedDate: selectedDate, dayIsSelected: false})
            }
            else {
                this.setState({selectedDate: dayClicked, dayIsSelected: true});   
            }
        }

        render(){

            const {selectedDate, dayIsSelected, year, month, days} = this.state;
            
            return (
                <div id="Calendar">   
                    <MonthPicker 
                        year={year}
                        month={month}
                        monthChangeCallback={this.monthChangeCallback}
                    />                   
                    <Month
                        selectedDayCallback={this.selectedDayCallback}
                        daySelected={{selectedDate, dayIsSelected}}
                        year={year}
                        month={month}
                        days={days}
                    >    
                    </Month>                        
                </div>
            )
        }
    
    }

    export default Calendar;