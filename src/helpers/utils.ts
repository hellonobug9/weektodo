import moment from 'moment';

interface DayOfCurrentWeek {
  id: number;
  label: string;
}

export const getDaysOfCurrentWeek = () => {
  let currentDate = moment();
  let weekStart = currentDate.clone().startOf('week');
  let weekEnd = currentDate.clone().endOf('week');

  let days: DayOfCurrentWeek[] = [];
  for (i = 1; i <= 7; i++) {
    days.push({
      id: i + 1,
      label: moment(weekStart).add(i, 'days'),
      // .format('MMMM Do,dddd'),
    });
  }
  return days;
};

export const daysOfWeek = [
  {id: 2, label: 'Mon'},
  {id: 3, label: 'Tue'},
  {id: 4, label: 'Wed'},
  {id: 5, label: 'Thu'},
  {id: 6, label: 'Fri'},
  {id: 7, label: 'Sat'},
  {id: 8, label: 'Sun'},
];
