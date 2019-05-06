import { node, getValue, is, map, filter, reduce } from 'hexlet-html-tags';

import { wc } from './lib/utils';

// BEGIN (write your solution here)
export const extractHeaders = (html) => {
    const filtred = filter(el => is('h2', el), html);
    return map(el => node('p', getValue(el)), filtred)
}
export const wordsCount = (tagName, word, html) => {
    return reduce((element, acc) => is(tagName, element) ? acc + wc(word, getValue(element)) : acc, 0, html);
}
// END


// // console.log(reduce((element, acc) => {
// //     return is('h1', element) ? acc + 1 : acc;
// // }, 0, html3)); // 2