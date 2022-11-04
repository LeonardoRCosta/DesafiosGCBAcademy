import { ArrayCommonElements } from "./desafio10";

describe("Find common elements between two arrays", () => {
    it("should find common elements between two arrays and return an array with them", () => {
        const arr: ArrayCommonElements = new ArrayCommonElements(
        [3, 2, 5, 2, 5],
        [1, 2, 3, 4, 5]
        );
        expect(arr.getCommonElements()).toEqual([3, 2, 5]);
    });
})