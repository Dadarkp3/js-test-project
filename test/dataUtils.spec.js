"use strict";

const chai = require("chai");
const expect = chai.expect;
const dataUtils = require("../src/utils/dataUtils");

xdescribe("dataUtils", function () {
  describe("isWeekend", function () {
    context("Case 22Mar2020(sun)", function () {
      it("should return true, because sun is a weekend", function () {
        expect(dataUtils.isWeekend("22Mar2020(sun)")).to.be.true;
      });
    });
    context("Case 20Mar2020(fri)", function () {
      it("should return true, because sun is a weekend", function () {
        expect(dataUtils.isWeekend("20Mar2020(fri)")).to.be.false;
      });
    });
  });
  describe("countWeekdaysAndWeekeend", function () {
    context(
      "Case 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)",
      function () {
        it("should return 3 days for weekdays and 0 for weekend", function () {
          expect(
            dataUtils.countWeekdaysAndWeekeend([
              "16Mar2020(mon)",
              "17Mar2020(tues)",
              "18Mar2020(wed)",
            ])
          ).to.eql({ weekdays: 3, weekend: 0 });
        });
      }
    );
  });
});
