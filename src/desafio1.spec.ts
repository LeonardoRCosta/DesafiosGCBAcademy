import { CreateArray } from './desafio1';

describe('Create array', () => {
  it('should create an array with the size an the element passed by the method arguments', () => {
    const result: CreateArray = new CreateArray();
    result.addValue(2, 'i');
    expect(result.getArray()).toEqual(['i', 'i']);
  });
});
