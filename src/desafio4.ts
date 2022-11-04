class ConvertToObject {
  private result: any;
  constructor() {
    this.result = {};
  }

  convertArrayToObject(arrays: (number | string)[][]) {
    try {
      if (arrays.length > 0) {
        for (let i = 0; i < arrays.length; i++) {
          this.result[arrays[i][0]] = arrays[i][1];
        }
      } else {
        throw new RangeError("O array deve ter pelo menos um elemento");
      }
    } catch (error) {
      console.log(error);
    }
    return this.result;
  }
}

const object = new ConvertToObject();
console.log(
  object.convertArrayToObject([
    ['G', 1],
    ['C', 2],
    ['B', 3],
  ])
);
