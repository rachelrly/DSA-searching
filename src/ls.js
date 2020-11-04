function ls(array, value) {
    let phrase = `Value ${value} not found in this array`;


    for (let i = 0; i < array.length; i++) {
        console.log(array[i], value)
        if (array[i] == Number(value)) {
            phrase = `Value ${value} found at array[${i}]`;
            return phrase;

        }



    }
    return phrase;
}

export default ls;