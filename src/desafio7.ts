class ArrayComparator {
  compare(array1: (number | string)[], array2: (number | string)[]) {
    try {
      if (array1.length > 0 && array2.length > 0) {
        if (array1.length !== array2.length) {
          return false;
        }
        for (let i = 0; i < array1.length; i++) {
          if (array1[i] !== array2[i]) {
            return false;
          }
        }
        return true;
      } else {
        throw new RangeError('Os arrays devem ter pelo menos um elemento');
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

const arr: ArrayComparator = new ArrayComparator();
console.log(arr.compare([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(arr.compare([1, 2, 3, 4], [1, 2, 3, 4, 5]));

export { arr, ArrayComparator };
