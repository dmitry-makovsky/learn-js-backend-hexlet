import { l, isEmpty, head, tail, cons, reverse, } from 'hexlet-pairs-data';
import { getValue, is, map } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const filter = (func, dom) => {

    const iter = (dom, acc = l()) => {
        if (isEmpty(dom)) return acc;

        const element = head(dom);
        const tailElements = tail(dom);

        if (!func(element)) return iter(tailElements, acc);

        const result = cons(element, acc);
        return iter(tailElements, result);
    }

    return reverse(iter(dom));
}

export const quotes = (dom) => {
    const filtred = filter(element => is('blockquote', element), dom)
    return map(el => getValue(el), filtred);
}
// END

export const removeHeaders = (elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const element = head(elements);
    const tailElements = tail(elements);
    if (is('h1', element)) {
        return removeHeaders(tailElements);
    }
    return cons(element, removeHeaders(tailElements));
};