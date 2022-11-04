import { ConvertToObject } from './desafio4';

describe('Convert an array of arrays to an object', () => {
  it('should convert an array of arrays to an object', () => {
    const result: ConvertToObject = new ConvertToObject();
    expect(
      result.convertArrayToObject([
        ['G', 1],
        ['C', 2],
        ['B', 3],
      ])
    ).toEqual({
      G: 1,
      C: 2,
      B: 3,
    });
  });
});
