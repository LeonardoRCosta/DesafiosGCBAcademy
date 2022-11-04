class ReverseArray {
  reverse(array: (number | string)[]) {
    const reversedArray: (number | string)[] = [];
    try {
      if (array.length > 0) {
        for (let i = array.length - 1; i >= 0; i--) {
          let item: (number | string) = array[i];
          reversedArray[reversedArray.length] = item;
        }
      } else {
        throw new RangeError('O array deve ter pelo menos um elemento');
      }
    } catch (error) {
      console.log(error);
    }
    return reversedArray;
  }
}

const arr: ReverseArray = new ReverseArray();
console.log(arr.reverse([1, 2, 3, 4, 5]));

export { arr };
