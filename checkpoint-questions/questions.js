function binarySearch(array, value, start = null, end = null, c = 0) {
    start = start === null ? 0 : start;
    end = end === null ? array.length : end;

    if (c > 30) {
        return 'This array has ran into an infinite loop and will stop running. Please change input.';
    }

    c++

    if (start > end) {
        console.log(`Value ${value} not found in this array.`)
        return `Value ${value} not found in this array.`
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log('start:', start, 'end:', end);
    if (item === value) {
        console.log(`Value ${value} found at index ${index}`)
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end, c);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1, c);
    }
};

const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
binarySearch(arr, 8)