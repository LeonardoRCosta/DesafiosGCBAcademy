import { ArraySimplifier } from './desafio6';

describe('Remove duplicates from array', () => {
  it('should remove duplicates from array', () => {
    const arr = new ArraySimplifier([1, 2, 6, 6, 6, 6, 7, 8, 8, 10]);
    expect(arr.simplify()).toEqual([1, 2, 6, 7, 8, 10]);
  });
});
