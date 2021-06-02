"use strict";

const chai = require("chai");
const expect = chai.expect;
const bookings = require("../src/bookings");

describe("bookings", function () {
  describe("searchCheapestHotel", function () {
    context(
      "Case Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)",
      function () {
        it("should return Parque das flores", function () {
          expect(
            bookings.searchCheapestHotel(
              "Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)"
            )
          ).to.equal("Parque das flores");
        });
      }
    );

    context(
      "Case Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)",
      function () {
        it("should return Jardim Botânico", function () {
          expect(
            bookings.searchCheapestHotel(
              "Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)"
            )
          ).to.equal("Jardim Botânico");
        });
      }
    );

    context(
      "Case Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)",
      function () {
        it("should return Mar Atlântico", function () {
          expect(
            bookings.searchCheapestHotel(
              "Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)"
            )
          ).to.equal("Mar Atlântico");
        });
      }
    );
  });
});
