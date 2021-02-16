export const getShortDateFormat = (date: Date) => {
  // use the built-in function here
  const year = date.getFullYear();

  // use the functions we wrote above
  const month = getTwoDigitMonth(date);
  const dayOfTheMonth = getTwoDigitDayOfTheMonth(date);

  // put it all together, eg. "YYYY-MM-DD"
  return `${year}-${month}-${dayOfTheMonth}`;
};

const getTwoDigitMonth = (date: Date) => {
  // add one to month to make it 1-12 instead of 0-11
  const month = date.getMonth() + 1;

  if (month < 10) {
    // add a 0 to the start if necessary
    return `0${month}`;
  } else {
    // for 10, 11 and 12, just return the month
    return month.toString();
  }
};

const getTwoDigitDayOfTheMonth = (date: Date) => {
  const dayOfTheMonth = date.getDate();

  if (dayOfTheMonth < 10) {
    // add a 0 to the start if necessary
    return `0${dayOfTheMonth}`;
  } else {
    // for 10 or greater, just return the dayOfTheMonth
    return dayOfTheMonth.toString();
  }
};
