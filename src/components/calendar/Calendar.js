import React from 'react';
import Month from '../month/Month';
import { getLengthOfMonth } from './utils/calendarDetailProvider';


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

        getClickedCallback = dayClicked => {

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
                    <Month
                        clickedHandler={this.getClickedCallback}
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