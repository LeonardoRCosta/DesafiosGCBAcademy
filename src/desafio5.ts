class ArrayFilter {
  private array: (number | string)[];
  constructor(array: (number | string)[]) {
    this.array = array;
  }
  filterArray(arrayOfFilters: (number | string)[]) {
    const filteredArray: (number | string)[] = [];
    try {
      if (this.array.length > 0) {
        for (let value of this.array) {
          if (!arrayOfFilters.includes(value)) {
            filteredArray.push(value);
          }
        }
      } else {
        throw new RangeError('O tamanho do array deve ser maior que 0');
      }
    } catch (error) {
      console.log(error);
    }
    return filteredArray;
  }
}

const arr: ArrayFilter = new ArrayFilter([5, 5, 4, 8, 3, 2]);
console.log(arr.filterArray([5, 3, 4]));

export { arr, ArrayFilter };
