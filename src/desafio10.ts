class ArrayCommonElements {
  private array1: (number | string)[];
  private array2: (number | string)[];
  constructor(array1: (number | string)[], array2: (number | string)[]) {
    this.array1 = array1;
    this.array2 = array2;
  }

  getCommonElements() {
    const commonElements: (number | string)[] = [];
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

const arr: ArrayCommonElements = new ArrayCommonElements([3, 2, 5, 2, 5], [1, 2, 3, 4, 5]);
console.log(arr.getCommonElements());
