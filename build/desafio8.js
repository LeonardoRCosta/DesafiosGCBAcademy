"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
class ArrayMerge {
    merge(array) {
        const mergedArray = [];
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
const arr = new ArrayMerge();
exports.arr = arr;
console.log(arr.merge([1, [2, 3], 4, [5, 6], 7, 8, [9], 10]));
