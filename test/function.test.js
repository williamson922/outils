describe('Function API:', function () {
  describe('#debounce()', function () {
    const debounce = outils.debounce;
    it(`outils.debounce(200,function(){return true}) should return true`, function (done) {
      let num = 0;
      let interval = null;
      let debounced = debounce(500, function () {
        num++;
        assert(num === 1);
        done();
        return true;
      });
      interval = setInterval(function () {
        debounced();
      }, 20);
      setTimeout(function () {
        clearInterval(interval);
      }, 800);
    });

    it(`outils.debounce(200,true,function(){return true}) should return true`, function (done) {
      let num = 0;
      let interval = null;
      let debounced = debounce(500, function () {
        num++;
        assert(num === 1);
        done();
        return true;
      });
      interval = setInterval(function () {
        debounced();
      }, 20);
      setTimeout(function () {
        clearInterval(interval);
      }, 800);
    });
  });

  describe('#throttle()', function () {
    const throttle = outils.throttle;

    it(`outils.throttle(200, function(){return true}) should return true`, function (done) {
      let num = 0;
      let interval = null;
      let throttled = throttle(200, function () {
        num++;
        return true;
      });
      interval = setInterval(function () {
        throttled();
      }, 20);
      setTimeout(function () {
        assert(num === Math.floor(805 / 200));
        done();
        clearInterval(interval);
      }, 805);
    });

    it(`outils.throttle(200, function(){return true}) should return true`, function (done) {
      let num = 0;
      let interval = null;
      let throttled = throttle(200, true, function () {
        num++;
        return true;
      });
      interval = setInterval(function () {
        throttled();
      }, 20);
      setTimeout(function () {
        assert(num === Math.floor(805 / 200));
        done();
        clearInterval(interval);
      }, 805);
    });

    describe('#CheckEvenNumber', function(){

        it(`outils.CheckEvenNumber(200, function(){return true}) should return true`, function(){
           assert(outils.CheckEvenNumber(200))
        })
        it(`outils.CheckEvenNumber(195, function(){return false}) should return false`, function(){
            assert(!outils.CheckEvenNumber(195))
         })
         it(`outils.CheckEvenNumber(186, function(){return true}) should return true`, function(){
            assert(outils.CheckEvenNumber(186))
         })
    })
});

  });

  describe('#isPrimeNumber', function () {
    it(`outils.isPrimeNumber(1, function(){return false}) should return false`, function () {
      assert(outils.isPrimeNumber(1));
    });
    it(`outils.CheckEvenNumber(2, function(){return true}) should return true`, function () {
      assert(!outils.isPrimeNumber(2));
    });
    it(`outils.CheckEvenNumber(35, function(){return false}) should return false`, function () {
      assert(outils.isPrimeNumber(35));
    });
  });
});

