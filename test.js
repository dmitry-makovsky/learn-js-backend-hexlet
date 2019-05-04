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


// // // Segments function test
// import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
// import { makeSegment, startSegment, endSegment, segmentToString, midpointSegment } from './segments';

// // не важно, чем является segment с точки зрения реализации, главное, что с ним можно
// // работать используя функции для работы с сегментами
// const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
// console.log(segmentToString(segment)); // [(1, 2), (-4, -2)]

// const point1 = startSegment(segment);
// console.log(pointToString(point1)); // (1, 2)

// const point2 = endSegment(segment);
// console.log(pointToString(point2)); // (-4, -2)

// pointToString(startSegment(segment)) === pointToString(makePoint(1, 2)); // true

// pointToString(midpointSegment(segment)); // (-1.5, 0)



// // // // Rectangle function test
// // Создание прямоугольника:
// // p - левая верхняя точка
// // 5 - ширина
// // 4 - высота
// //
// // p    5
// // -----------
// // |         |
// // |         | 4
// // |         |
// // -----------
// import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// import {
//     makeRectangle,
//     getStartPoint,
//     getWidth,
//     getHeight,
//     square,
//     perimeter,
//     containsTheOrigin,
// } from './rectangles';

// const p = makePoint(0, 1);
// const rectangle = makeRectangle(p, 5, 4);

// // // Вычисление площади прямоугольника
// // console.log(square(rectangle));
// // // 20;

// // console.log(perimeter(rectangle));
// // // 18

// console.log(containsTheOrigin(rectangle));
// // false

// const rectangle02 = makeRectangle(makePoint(-4, 3), 5, 4);
// console.log(containsTheOrigin(rectangle02));
// // true

// console.log(containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2))); // false
// console.log(containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8))); // false


// // Pairs function test
// import { cons, car, cdr } from './pairs';

// const pair = cons(5, 3);
// // const pair = f => f(5, 3);

// const pair1 = cons(10, 100);

// const actualCar = car(pair1);
// console.log(actualCar)
// // 10

// const actualCdr = cdr(pair1);
// console.log(actualCdr)
// // 100


// // // List function test
// import { l, toString as listToString } from 'hexlet-pairs-data';
// import { has, reverse, concat } from './list';

// const numbers = l(3, 4, 5, 8);
// console.log(has(numbers, 8)); // true
// console.log(has(numbers, 0)); // false

// const numbers2 = l(3, 4, 5);
// console.log(listToString(reverse(numbers2)));
// // (5, 4, 3)

// const numbers4 = l(3, 4, 5, 8);
// const numbers5 = l(3, 2, 9);
// console.log(listToString(concat(numbers4, numbers5)));
// // (3, 4, 5, 8, 3, 2, 9)


// // HTML-Tags function test
// import { make, append, toString, node, getName, getValue } from './html-tags';

// import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// // Создаем новый html-список
// const dom1 = make();

// // Создаем тег и сразу добавляем его в html
// const dom2 = append(dom1, node('h1', 'hello, world'));
// // Еще раз
// const dom3 = append(dom2, node('h2', 'header2'));

// // Создаем новый тег
// const tag = node('h3', 'header3');
// // Добавляем созданный тег в html-список
// const dom = append(dom3, tag);

// // Преобразуем html-список в строчку
// console.log(listToString(dom));
// console.log(toString(dom));


// => <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>

// // Пример без создания промежуточных переменных
// toString(append(make(), node('p', 'this is Sparta!')));
// // <p>this is Sparta!</p>

// const tag = node('div', 'what is love?');



// console.log(getName(tag));// => div
// console.log(getValue(tag)); // => what is love?



// // HTML-Tags-two function test
// import {
//     make,
//     append,
//     node,
//     getValue,
//     is,
//     toString as htmlToString,
// } from 'hexlet-html-tags';
// import { map, mirror, b2p } from './html-tags-two';

// let dom;

// const dom1 = make();
// const dom2 = append(dom1, node('h1', 'scheme'));
// const dom3 = append(dom2, node('p', 'is a lisp'));

// const dom4 = append(dom3, node('h1', 'haskell'));
// const dom5 = append(dom4, node('p', 'is a functional language'));

// const dom6 = append(dom5, node('h1', 'prolog'));
// dom = append(dom6, node('p', 'is about logic'));

// // b2p
// const domb2p = append(make(), node('blockquote', 'quote'));
// const processedDom = b2p(domb2p);

// const result = '<p>quote</p>';
// console.log(htmlToString(processedDom)); //'<p>quote</p>'

// // '#mapAsB2p'
// const domMapAsB2p = append(make(), node('blockquote', 'quote'));
// const processedDom = map((element) => {
//     if (is('blockquote', element)) {
//         return node('p', getValue(element));
//     }
//     return element;
// }, domMapAsB2p);

// // const result = '<p>quote</p>';
// // console.log(htmlToString(processedDom)); //'<p>quote</p>'

// const result = map(() => {}, make());
// console.log(htmlToString(result)); // ''

// const processedDom = map((element) => {
//     if (is('h1', element)) {
//         return node('h2', getValue(element));
//     }
//     return element;
// }, dom);

// console.log(htmlToString(processedDom));
// // '<h2>scheme</h2><p>is a lisp</p><h2>haskell</h2><p>is a functional language</p><h2>prolog</h2><p>is about logic</p>';

// console.log(htmlToString(mirror(dom)))
//'<h1>emehcs</h1><p>psil a si</p><h1>lleksah</h1><p>egaugnal lanoitcnuf a si</p><h1>golorp</h1><p>cigol tuoba si</p>';



// // HTML-Tags-three function test
import { l, toString as listToString } from 'hexlet-pairs-data';

import { make, append, node, is, toString as htmlToString, } from 'hexlet-html-tags';

import { filter, quotes, removeHeaders } from './html-tags-three';

let dom;

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const dom4 = append(dom3, node('h1', 'haskell'));
const dom5 = append(dom4, node('p', 'is a functional language'));

const dom6 = append(dom5, node('h1', 'prolog'));
dom = append(dom6, node('p', 'is about logic'));

// // #removeHeaders
// const processedDom = removeHeaders(dom);

// console.log(htmlToString(processedDom))
// //'<p>is a lisp</p><p>is a functional language</p><p>is about logic</p>'


// // // #filter
// const processedDom = filter(element => is('h1', element), dom);
// console.log(1, htmlToString(processedDom))
// //'<h1>scheme</h1><h1>haskell</h1><h1>prolog</h1>';

// const processedDom2 = filter(element => is('p', element), dom);
// console.log(2, htmlToString(processedDom2))
// //'<p>is a lisp</p><p>is a functional language</p><p>is about logic</p>';

// console.log(htmlToString(make()))
// //.toBe('');

// // #quotes
const dom99 = append(dom, node('blockquote', 'live is life'));
const dom88 = append(dom99, node('blockquote', 'i am sexy, and i know it'));

console.log(listToString(quotes(dom88)))// .toBe(listToString(l('i am sexy, and i know it', 'live is life')));