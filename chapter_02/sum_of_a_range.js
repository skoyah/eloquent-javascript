function range(start, end, step = 1) {
    let result = [];

    let initial = start;

    if (start < end) {
        while (initial <= end) {
            result.push(initial);
            initial+= step;
        }
    } else {
        while (initial >= end) {
            result.push(initial);
            initial+= step;
        }
    }


    return result;
}

function sum(numbers) {
    let result = 0;

    for(number of numbers) {
        result+= number;
    }

    return result;
}

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));