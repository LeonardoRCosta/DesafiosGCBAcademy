import { ArrayComparator } from "./desafio7";

describe("Compare two arrays to see if they're equal", () => {
    it('should compare two arrays to see if they are equal and return true if they are equal', () => {
        const result: ArrayComparator = new ArrayComparator();
        expect(result.compare([1, 2, 3, 4], [1, 2, 3, 4])).toEqual(true);
    });
})