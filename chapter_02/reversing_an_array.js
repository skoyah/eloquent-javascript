function reverseArray(array) {
    //must return a new array
    const length = array.length;
    const newArray = [];

    for (i = length; i > 0; i--) {
        newArray[length - i] = array[i - 1];
    }

    return newArray;
}

function reverseArrayInPlace(array) {
    const length = array.length;
    const even = array.length % 2 === 0;
    const iterations = even ? array.length/2 : (array.length - 1) / 2; 

    for (i = 0; i <= iterations; i++) {
        const first = array[i];
        const second = array[length - i - 1];

        array[i] = second;
        array[length - i - 1] = first;       
    }

    return array;
}

console.log('the correct solution is [9, 22, 5, 4, 1]');
console.log('reverseArray result: ' , reverseArray([1,4,5,22,9]));
console.log('reverseArrayInPlace result: ' , reverseArrayInPlace([1,4,5,22,9]));
