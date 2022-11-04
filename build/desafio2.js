"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseArray = exports.arr = void 0;
class ReverseArray {
    reverse(array) {
        const reversedArray = [];
        try {
            if (array.length > 0) {
                for (let i = array.length - 1; i >= 0; i--) {
                    let item = array[i];
                    reversedArray[reversedArray.length] = item;
                }
            }
            else {
                throw new RangeError('O array deve ter pelo menos um elemento');
            }
        }
        catch (error) {
            console.log(error);
        }
        return reversedArray;
    }
}
exports.ReverseArray = ReverseArray;
const arr = new ReverseArray();
exports.arr = arr;
console.log(arr.reverse([1, 2, 3, 4, 5]));
