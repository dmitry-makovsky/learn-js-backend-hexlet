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