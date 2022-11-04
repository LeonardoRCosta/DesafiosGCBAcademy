import { ArrayMerge } from "./desafio8";

describe("Merge an array of arrays into a single array", () => {
  it("should merge an array of arrays into a single array", () => {
    const result: ArrayMerge = new ArrayMerge();
    expect(
      result.merge([
        [1, 2, 3],
        [4],[5, 6],
        7, 8, 9
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});