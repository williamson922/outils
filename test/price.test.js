describe('Price API:', function () {
  describe('#numToRinggitString()', function () {
      it(`outils.numToRinggitString(10) should return "RM10.00"`, function () {
          assert(outils.numToRinggitString(10) === "RM10.00")
      });
  });
});