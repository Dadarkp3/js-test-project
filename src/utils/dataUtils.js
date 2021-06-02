const isWeekend = (date) => {
  const newDate = new Date(date);
  return newDate.getDay() === 0 || newDate.getDay() === 6;
};

const countWeekdaysAndWeekeend = (dates) => {
  let weekdays = 0;
  let weekend = 0;

  dates.forEach((date) => {
    isWeekend(date) ? weekend++ : weekdays++;
  });
  return { weekdays, weekend };
};

module.exports = {
  isWeekend,
  countWeekdaysAndWeekeend,
};
