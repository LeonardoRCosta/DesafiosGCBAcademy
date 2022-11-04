class ArraySimplifier {
  private array: (number | string)[];
  constructor(array: (number | string)[]) {
    this.array = array;
  }

  simplify() {
    const simplifiedArray: (number | string)[] = [];
    try {
      if (this.array.length > 0) {
        for (let value of this.array) {
          if (!simplifiedArray.includes(value)) {
            simplifiedArray.push(value);
          }
        }
      } else {
        throw new RangeError('O tamanho do array deve ser maior que 0');
      }
    } catch (error) {
      console.log(error);
    }
    return simplifiedArray;
  }
}

const arr = new ArraySimplifier([1, 2, 6, 6, 6, 6, 7, 8, 8, 10]);
console.log(arr.simplify());

export { arr, ArraySimplifier };