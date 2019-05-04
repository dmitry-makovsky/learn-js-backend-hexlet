import {
    l,
    isEmpty,
    head,
    tail,
    cons,
    reverse,
} from 'hexlet-pairs-data';

import {
    getName,
    getValue,
    node,
    is,
} from 'hexlet-html-tags';

import { reverse as reverseStr } from './lib/strings';

// BEGIN (write your solution here)

export const map = (func, dom) => {
    const iter = (dom, acc = l()) => {
        if (isEmpty(dom)) return acc;
        const result = cons(func(head(dom)), acc);
        return iter(tail(dom), result);
    }
    
    return reverse(iter(dom));
}

export const mirror = (coll) => map(el => node(getName(el), reverseStr(getValue(el))), coll);
// END

export const b2p = (elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    let newElement;
    const element = head(elements);
    if (is('blockquote', element)) {
        newElement = node('p', getValue(element));
    } else {
        newElement = element;
    }

    return cons(newElement, b2p(tail(elements)));
};