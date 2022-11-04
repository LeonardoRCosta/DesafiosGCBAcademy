"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArraySimplifier = exports.arr = void 0;
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
            }
            else {
                throw new RangeError('O tamanho do array deve ser maior que 0');
            }
        }
        catch (error) {
            console.log(error);
        }
        return simplifiedArray;
    }
}
exports.ArraySimplifier = ArraySimplifier;
const arr = new ArraySimplifier([1, 2, 6, 6, 6, 6, 7, 8, 8, 10]);
exports.arr = arr;
console.log(arr.simplify());
