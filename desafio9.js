class ArrayDivider {
  constructor(array) {
    this.array = array;
  }
  divide(size) {
    const dividedArray = [];
    try {
      if (size > 0 && this.array.length > 0) {
        for (let i = 0; i < this.array.length; i += size) {
          dividedArray.push(this.array.slice(i, i + size));
        }
        return dividedArray;
      } else {
        throw new RangeError('O tamanho do array deve ser maior que 0');
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

const array = new ArrayDivider([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(array.divide(3));
