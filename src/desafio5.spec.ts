import { ArrayFilter } from './desafio5';

describe('Filter an array based on another array', () => {
  it('should filter an array based on another array', () => {
    const result: ArrayFilter = new ArrayFilter([5, 5, 4, 8, 3, 2]);
    expect(result.filterArray([5, 4])).toEqual([8, 3, 2]);
  });
});
