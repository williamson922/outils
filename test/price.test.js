describe('Price API:', function () {
  describe('#numToRinggit()', function () {
      it(`outils.numToRinggit(10) should return "RM10.00"`, function () {
          assert(outils.numToRinggit(10) === "RM10.00")
      });
  });

  describe('#numToSelfDefinedCurrency()', function () {
    it(`outils.numToSelfDefinedCurrency(10, "USD") should return "RM10.00"`, function () {
        assert(outils.numToSelfDefinedCurrency(10, "USD") === "USD10.00")
    });
});
});