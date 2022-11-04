class ArrayMerge {
  merge(array: any[]) {
    const mergedArray: any[] = [];
    try {
      if (array.length > 0) {
        for (let value of array) {
          if (value[0]) {
            for (let element of value) {
              mergedArray.push(element);
            }
            continue;
          }
          if (!mergedArray.includes(value)) {
            mergedArray.push(value);
          }
        }
        return mergedArray;
      } else {
        throw new RangeError('O tamanho do array deve ser maior que 0');
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}

const arr: ArrayMerge = new ArrayMerge();
console.log(arr.merge([1, [2, 3], 4, [5, 6], 7, 8, [9], 10]));

export { arr, ArrayMerge };
