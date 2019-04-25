// // Palindrome func test
// import isPalindrome from './isPalindrome';

// console.log(isPalindrome('palindrome'));
// console.log(isPalindrome('radar'));


// // // Custom Substr func test
// import substr from './substr';

// console.log(substr('')) ////.toEqual('');
// console.log(substr('abba', 4, -10)) //.toEqual('');
// console.log(substr('abba')) //.toEqual('abba');
// console.log(substr('abba', 1, 0)) //.toEqual('');
// console.log(substr('abba', 0, 1)) //.toEqual('a');
// console.log(substr('abba', 1, 2)) //.toEqual('bb');
// console.log(substr('abba', -10, 2)) //.toEqual('ab');
// console.log(substr('abba', -1, 100)) //.toEqual('abba');
// console.log(substr('abba', -1, -1)) //.toEqual('a');
// console.log(substr('abba', 1, -10)) //.toEqual('b');
// console.log(substr('abba', 1, 10)) //.toEqual('bba');
// console.log(substr('abba', 0, 4)) //.toEqual('abba');
// console.log(substr('abba', 0, 5)) //.toEqual('abba');

// // buildHtml function test
// import {
//     html
// } from 'js-beautify';
// import buildHtml from './buildHtml';

// console.log(html(buildHtml()));

// // // Jest Snapshot v1, https://goo.gl/fbAQLP

// // exports[`htmlBuilder 1`] = `
// // "<table>
// //     <tr>
// //         <td>lang</td>
// //         <td>comment</td>
// //     </tr>
// //     <tr>
// //         <td>php</td>
// //         <td>statements</td>
// //     </tr>
// //     <tr>
// //         <td>clojure</td>
// //         <td>expressions</td>
// //     </tr>
// // </table>"
// // `;

// import apply from './apply';
// console.log(apply(2, Math.sqrt, 16))//.toBe(2);
// console.log(apply(1, v => v ** 2, 3))//.toBe(9);


// import reverse from './reverse';

// console.log(reverse('qwerty'));

// // // flip function test
// import flip from './flip';

// const sub = (a, b) => a - b;
// const reverseSub = flip(sub);

// console.log(sub(5, 3));
// // 2
// console.log(reverseSub(5, 3));
// // -2

// // exponentiation
// const wop = flip(Math.pow);

// console.log(Math.pow(1, 2));
// // 1
// console.log(wop(1, 2));
// // 2

// console.log(Math.pow(3, 2));
// // 9

// console.log(wop(3, 2));
// // 8


// // // partialApply function test
// partialApply.js
// Реализуйте и экспортируйте по умолчанию функцию partialApply. 
// Эта функция умеет частично применять один (второй) аргумент у переданной функции:

import partialApply from './partialApply';

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
console.log(f1(1));
// => 1
console.log(f1(10));
// => 100

const f2 = partialApply((a, b) => a * b, 5);
console.log(f2(2)); // => 10
console.log(f2(5)); // => 25