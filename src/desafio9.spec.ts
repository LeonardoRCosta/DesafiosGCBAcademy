import { ArrayDivider } from "./desafio9";

describe('Divide an array in parts', () => {
  it('should divide an array in parts determined by the size argument pass to the divide method', () => {
    const arr: ArrayDivider = new ArrayDivider([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(arr.divide(3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
  });
});
