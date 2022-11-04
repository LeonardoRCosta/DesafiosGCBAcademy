class ArraySimplifier {
  constructor(array) {
    this.array = array;
  }

  simplify() {
    const simplifiedArray = [];
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

const array = new ArraySimplifier([1, 2, 6, 6, 6, 6, 7, 8, 8, 10]);
console.log(array.simplify());
