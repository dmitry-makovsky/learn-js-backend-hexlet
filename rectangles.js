// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
const makeRectangle = (point, width, height) => {
    return cons(point, cons(width, height));
}

const getStartPoint = rectangle => car(rectangle);
const getWidth = rectangle => car(cdr(rectangle));
const getHeight = rectangle => cdr(cdr(rectangle));

const square = rectangle => getWidth(rectangle) * getHeight(rectangle);
const perimeter = rectangle => 2 * (getWidth(rectangle) + getHeight(rectangle));

const containsTheOrigin = rectangle => {
    const a = getStartPoint(rectangle);
    const c = makePoint(getX(a) + getWidth(rectangle), getY(a) - getHeight(rectangle));
    return quadrant(a) === 2 && quadrant(c) === 4;
}

export {
    makeRectangle,
    getStartPoint,
    getWidth,
    getHeight,
    square,
    perimeter,
    containsTheOrigin
}
// END