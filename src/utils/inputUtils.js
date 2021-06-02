const splitInputIntoTypeAndDates = (input) => {
  const [type, dates] = input.split(":");
  const bookings = dates.replace(/\s/g, "").split(",");

  return { type: type.toLowerCase(), dates: bookings };
};

module.exports = {
  splitInputIntoTypeAndDates,
};
