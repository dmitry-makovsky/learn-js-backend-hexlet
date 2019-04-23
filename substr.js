const substr = (str, startIndex = 0, length = str.length) => {

    if (startIndex === 0 && length === str.length) return str;
    if (length === 0) return '';
    if (startIndex >= str.length) return '';

    length = length < 0 ? 1 : length;
    startIndex = startIndex < 0 ? 0 : startIndex;
    length = (startIndex + length) > str.length ? str.length - startIndex : length;

    let result = ''
    for (let i = 0; i < length; i += 1) {
        result += str[startIndex];
        startIndex += 1;
    }
    return result;
}
export default substr;