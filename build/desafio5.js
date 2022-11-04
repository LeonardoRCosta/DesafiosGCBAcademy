"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
class ArrayFilter {
    constructor(array) {
        this.array = array;
    }
    filterArray(arrayOfFilters) {
        const filteredArray = [];
        try {
            if (this.array.length > 0) {
                for (let value of this.array) {
                    if (!arrayOfFilters.includes(value)) {
                        filteredArray.push(value);
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
        return filteredArray;
    }
}
const arr = new ArrayFilter([5, 5, 4, 8, 3, 2]);
exports.arr = arr;
console.log(arr.filterArray([5, 3, 4]));
