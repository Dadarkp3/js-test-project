"use strict";

const chai = require("chai");
const expect = chai.expect;
const inputUtils = require("../src/utils/inputUtils");

xdescribe("inputUtils", function () {
  describe("splitInputIntoTypeAndDates", function () {
    context(
      "Case Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)",
      function () {
        it("should return type regular and an array that includes 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)", function () {
          expect(
            inputUtils.splitInputIntoTypeAndDates(
              "Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)"
            )
          ).to.eql({
            type: "regular",
            dates: ["16Mar2020(mon)", "17Mar2020(tues)", "18Mar2020(wed)"],
          });
        });
      }
    );

    context(
      "Case Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)",
      function () {
        it("should return type fidelidade and an array that includes 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)", function () {
          expect(
            inputUtils.splitInputIntoTypeAndDates(
              "Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)"
            )
          ).to.eql({
            type: "fidelidade",
            dates: ["26Mar2020(thur)", "27Mar2020(fri)", "28Mar2020(sat)"],
          });
        });
      }
    );
  });
});
