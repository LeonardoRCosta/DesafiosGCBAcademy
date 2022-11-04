class ArrayFilter {
  constructor(array) {
    this.array = array;
  }
  filterArray(arrayOfFilters) {
    const filteredArray = [];
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

const array = new ArrayFilter([5, 5, 4, 8, 3, 2]);
console.log(array.filterArray([5, 3, 4]));
