export default (str) => {
    const lastIndex = str.length - 1;
    const iter = (counter, acc) => {
        if (counter > lastIndex) {
            return acc;
        }
        acc += str[lastIndex - counter]
        return iter(counter + 1, acc);
    }
    return iter(0, '');
};



//   const iter = (index, acc) => {
//     if (index > lastIndex) {
//       return acc;
//     }
//     return iter(index + 1, `${str[index]}${acc}`);
//   };