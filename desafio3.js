class ArrayCleaner {
  constructor(array) {
    this.array = array;
  }
  clean() {
    const cleanedArray = [];
    try {
      if (this.array.length > 0) {
        for (let value of this.array) {
          if (value) {
            cleanedArray.push(value);
          }
        }
      } else {
        throw new RangeError('O tamanho do array deve ser maior que 0');
      }
    } catch (error) {
      console.log(error);
    }
    return cleanedArray;
  }
}

const array = new ArrayCleaner([0, 2, null, 4, undefined, false, 7, 8, '', 10]);
console.log(array.clean());
