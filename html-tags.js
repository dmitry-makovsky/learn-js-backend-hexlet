// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (tag, content) => cons(tag, content);
export const getName = tag => car(tag);
export const getValue = tag => cdr(tag);
export const append = (dom, tag) => {
    return consList(tag, dom);
}

export const toString = (dom) => {
    const iterReverse = (dom, acc = make()) => {
        if (isEmpty(dom)) return acc;
        const result = consList(head(dom), acc);
        return iterReverse(tail(dom), result);
    }
    dom = iterReverse(dom);

    const iter = (dom, acc = '') => {
        if (isEmpty(dom)) return acc;
        const tag = getName(head(dom));
        const content = getValue(head(dom));
        acc += `<${tag}>${content}</${tag}>`;
        return iter(tail(dom), acc);
    };
    return iter(dom);
}
// END