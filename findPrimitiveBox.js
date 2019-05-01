import {
    cons,
    car,
    cdr,
    toString,
    isPair
} from 'hexlet-pairs';

const findPrimitiveBox = (pair) => {
    if (isPair(car(pair)) === false && isPair(cdr(pair)) === false) {
        return pair;
    }
    return isPair(car(pair))? findPrimitiveBox(car(pair)): findPrimitiveBox(cdr(pair))
}

export {
    findPrimitiveBox
}