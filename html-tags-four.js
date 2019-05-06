import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { getValue, is } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const reduce = (func, acc, dom) => {
    const iter = (dom, acc) => {
        if (isEmpty(dom)) return acc;
        return iter(tail(dom), func(head(dom), acc));
    }
    return iter(dom, acc);
}
export const emptyTagsCount = (tagName, elements) => {
    return reduce((element, acc) => {
        return is(tagName, element) && !getValue(element) ? acc + 1 : acc;
    }, 0, elements)
}
// END

export const headersCount = (tagName, elements) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return acc;
        }
        const item = head(items);
        const newAcc = is(tagName, item) ? acc + 1 : acc;
        return iter(tail(items), newAcc);
    };
    return iter(elements, 0);
};