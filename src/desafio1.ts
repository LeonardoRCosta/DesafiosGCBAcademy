class CreateArray {
  private array: any[];
  constructor() {
    this.array = [];
  }
  addValue(size: number, value: any) {
    try {
      if (size > 0) {
        for (let i = 0; i < size; i++) {
          this.array.push(value);
        }
      } else {
        throw new RangeError('O tamanho do array deve ser maior que 0');
      }
    } catch (error) {
      console.log(error);
    }
  }
  getArray() {
    return this.array;
  }
}

const arr = new CreateArray();
arr.addValue(2, 'i');
console.log(arr.getArray());

export { arr };
