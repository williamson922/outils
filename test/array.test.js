describe('Array API:', function () {
  describe('#arrayEqual()', function () {
    it(`outils.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
      assert.notEqual(outils.arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
    });
    it(`outils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
      assert.notEqual(outils.arrayEqual([0, 2, 3], [1, 2, 3]), true)
    });
    it('outils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
      assert(outils.arrayEqual([1, 2, 3], [1, 2, 3]))
    });
    const arr = [8, 2, 3, 4, 7, 8]
    it(`outils.arrayEqual([${arr},${arr}]) should return true`, function () {
      assert(outils.arrayEqual(arr, arr))
    });
  });

  describe('#arrayHighestOccurrence()', function () {
    it(`outils.arrayHighestOccurrence(['A', 'B', 'C', 'A']) should return 'A'`, function () {
      assert(outils.arrayHighestOccurrence(['A', 'B', 'C', 'A']) === "A")
    });
    it(`outils.arrayHighestOccurrence([]) should return null`, function () {
      assert(outils.arrayHighestOccurrence([]) === null)
    });
  });
});
