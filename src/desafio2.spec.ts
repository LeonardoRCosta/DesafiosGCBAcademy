import { ReverseArray } from './desafio2';

describe('Reverse Array', () => {
  it('should reverse the array', () => {
    const result: ReverseArray = new ReverseArray();
    expect(result.reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});
