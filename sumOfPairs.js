import {
    cons,
    car,
    cdr,
    toString
} from 'hexlet-pairs';

export default (firstPair, secondPair) => {
    const first = car(firstPair) + car(secondPair);
    const second = cdr(firstPair) + cdr(secondPair);

    return cons(first, second)

}