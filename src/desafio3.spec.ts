import { ArrayCleaner } from './desafio3';

describe('Clean the array', () => {
  it('should clean the array if it has falsy values', () => {
    const result: ArrayCleaner = new ArrayCleaner([
      0,
      2,
      null,
      4,
      undefined,
      false,
      7,
      8,
      '',
      10,
    ]);
    expect(result.clean()).toEqual([2, 4, 7, 8, 10]);
  });
});
