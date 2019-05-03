import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const has = (list, num) => {
    if (isEmpty(list)) {
        return false;
    }
    return head(list) === num ? true : has(tail(list), num);
}

const reverse = (firstList) => {
    const iter = (list, acc = l()) => {
        if (isEmpty(list)) return acc;

        const resultAccum = cons(head(list), acc);
        return iter(tail(list), resultAccum);
    };
    return iter(firstList);
};

const concat = (first, second) => {
    if (isEmpty(first)) {
        return second;
    };
    return cons(head(first), concat(tail(first), second));
}
export { has, reverse, concat };