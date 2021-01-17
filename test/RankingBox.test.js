const { numberToOrdinal } = require('../src/app/components/RankingBox');

describe('RankingBox', () => {
  describe('numberToOrdinal', () => {
    it('should return 1st for input of 1', () => {
      expect(numberToOrdinal(1)).toBe('1st');
    });

    it('should return 2nd for input of 2', () => {
      expect(numberToOrdinal(2)).toBe('2nd');
    });

    it('should return 3rd for input of 3', () => {
      expect(numberToOrdinal(3)).toBe('3rd');
    });
  });
});
