class ArrayCommonElements {
  constructor(array1, array2) {
    this.array1 = array1;
    this.array2 = array2;
  }

  getCommonElements() {
    const commonElements = [];
    try {
      if (this.array1.length > 0 && this.array2.length > 0) {
        for (let value of this.array1) {
          if (this.array2.includes(value)) {
            if (!commonElements.includes(value)) {
              commonElements.push(value);
            }
          }
        }
      } else {
        throw new RangeError('Os arrays devem ter pelo menos um elemento');
      }
    } catch (error) {
      console.log(error);
    }
    return commonElements;
  }
}

const array = new ArrayCommonElements([3, 2, 5, 2, 5], [1, 2, 3, 4, 5]);
console.log(array.getCommonElements());
