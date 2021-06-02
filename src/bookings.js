const data = require("../database/hotels.json");

//Utils
const inputUtils = require("./utils/inputUtils");
const dateUtils = require("./utils/dataUtils");

const searchCheapestHotel = (input) => {
  const { type, dates } = inputUtils.splitInputIntoTypeAndDates(input);
  const { weekdays, weekend } = dateUtils.countWeekdaysAndWeekeend(dates);

  return data.hotels
    .map((hotel) => {
      return {
        name: hotel.name,
        pointSystem: hotel.pointSystem,
        total: createTotalValueByHotel(hotel, type, weekdays, weekend),
      };
    })
    .sort(sortByBestOffer)
    .shift().name;
};

const createTotalValueByHotel = (hotel, type, weekdays, weekend) => {
  return (
    hotel.value[type].week * weekdays + hotel.value[type].weekend * weekend
  );
};

const sortByBestOffer = (a, b) => {
  return a.total - b.total || b.pointSystem - a.pointSystem;
};

module.exports = {
  searchCheapestHotel,
};
