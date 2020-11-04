function bs(array, value, start = null, end = null) {

    start = start === null ? 0 : start;
    end = end === null ? array.length : end;

    if (start > end) {
        return `Value ${value} not found in this array`
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == value) {

        return `Value ${value} found at array[${index}]`;
    }
    else if (item < value) {
        return bs(array, value, index + 1, end);
    }
    else if (item > value) {
        return bs(array, value, start, index - 1);
    }
};

export default bs;