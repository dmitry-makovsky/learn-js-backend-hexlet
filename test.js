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

// import partialApply from './partialApply';

// const pow = (a, b) => a ** b;
// const f1 = partialApply(pow, 2);
// console.log(f1(1));
// // => 1
// console.log(f1(10));
// // => 100

// const f2 = partialApply((a, b) => a * b, 5);
// console.log(f2(2)); // => 10
// console.log(f2(5)); // => 25

// // Carring test
// const greeting = () => () => () => () => console.log('Hey!')
// greeting()()()();


// // // // logic function test
// import {
//     If,
//     True,
//     False
// } from './logic';

// console.log(If(True)('fo')('bar'))//.toBe('fo');
// console.log(If(False)('foo')('ba'))//.toBe('ba');
// console.log(True()())//.toBeUndefined();
// console.log(False()())//.toBeUndefined();

// // Points quadrant function test
// import {
//     getQuadrant,
//     getSymmetricalPoint,
//     calculateDistance
// } from "./points";
// import {
//     makePoint,
//     getX,
//     getY,
//     toString
// } from 'hexlet-points'; // eslint-disable-line


// const point = makePoint(1, 5);
// console.log(getQuadrant(point));
// // 1

// console.log(getQuadrant(makePoint(3, -3)));
// // 4

// console.log(getQuadrant(makePoint(-3, 10))) //toBe(2);
// console.log(getQuadrant(makePoint(-2, -5))) //toBe(3);
// console.log(getQuadrant(makePoint(4, -1))) //toBe(4);
// const point = makePoint(0, 7);
// console.log(getQuadrant(point)); // null
// console.log(getQuadrant(makePoint(2, 0))); // null

// console.log(toString(getSymmetricalPoint(makePoint(-10, -10)))) //.toBe(toString(makePoint(10, 10)));
// console.log(calculateDistance(makePoint(-2, -3), makePoint(-4, 4))) //.toBeCloseTo(7.28, 2)


// // Reverse Pair function test
// import { cons, car, cdr, toString } from 'hexlet-pairs';
// import reversePair from './reversePair';

// const pair = cons('one', 'two');
// console.log(toString(reversePair(pair))); // ('two', 'one')

// // Sum of pairs function test
// import { cons, car, cdr, toString } from 'hexlet-pairs';
// import sumOfPairs from './sumOfPairs';

// const pair1 = cons(4, 10);
// const pair2 = cons(100, 0);
// console.log(toString(sumOfPairs(pair1, pair2))); // (104, 10)

// // Find Primitive Box function test
// import { cons, car, cdr, toString } from 'hexlet-pairs';
// import {findPrimitiveBox} from './findPrimitiveBox';

// const pair = cons(
//   null,
//   cons('one', 'two'),
// );
// console.log(toString(findPrimitiveBox(pair))); // ('one', 'two')


// const pair2 = cons(
//   cons(null, cons(1, 5)),
//   null,
// );
// console.log(toString(findPrimitiveBox(pair2))); // (1, 5))


// const pair1 = cons(
//     cons(1, cons(cons(true, 5), null)),
//     8,
//   );


// // Segments function test
import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
import { makeSegment, startSegment, endSegment, segmentToString, midpointSegment } from './segments';

// не важно, чем является segment с точки зрения реализации, главное, что с ним можно
// работать используя функции для работы с сегментами
const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
console.log(segmentToString(segment)); // [(1, 2), (-4, -2)]

const point1 = startSegment(segment);
console.log(pointToString(point1)); // (1, 2)

const point2 = endSegment(segment);
console.log(pointToString(point2)); // (-4, -2)

pointToString(startSegment(segment)) === pointToString(makePoint(1, 2)); // true

pointToString(midpointSegment(segment)); // (-1.5, 0)