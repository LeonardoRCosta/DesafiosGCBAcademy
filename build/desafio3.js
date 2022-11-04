"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
class ArrayCleaner {
    constructor(array) {
        this.array = array;
    }
    clean() {
        const cleanedArray = [];
        try {
            if (this.array.length > 0) {
                for (let value of this.array) {
                    if (value) {
                        cleanedArray.push(value);
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
        return cleanedArray;
    }
}
const arr = new ArrayCleaner([0, 2, null, 4, undefined, false, 7, 8, '', 10]);
exports.arr = arr;
console.log(arr.clean());
