"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayDivider = exports.arr = void 0;
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
            }
            else {
                throw new RangeError('O tamanho do array deve ser maior que 0');
            }
        }
        catch (error) {
            console.log(error);
        }
        return null;
    }
}
exports.ArrayDivider = ArrayDivider;
const arr = new ArrayDivider([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
exports.arr = arr;
console.log(arr.divide(3));
