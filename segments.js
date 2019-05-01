import { makePoint, getX, getY, toString as pointToString, } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';


const makeSegment = (first, second) => cons(first, second)
const startSegment = (segment) => car(segment)
const endSegment = (segment) => cdr(segment)
const segmentToString = (segment) => {
    const firstPointStr = pointToString(startSegment(segment));
    const secondPointStr = pointToString(endSegment(segment));
    return `[${firstPointStr}, ${secondPointStr}]`;
}
const midpointSegment = (segment) => {
    const firstPoint = startSegment(segment)
    const secondPoint = endSegment(segment)

    const firstMidpoint = (getX(firstPoint) + getX(secondPoint)) / 2;
    const secondMidpoint = (getY(firstPoint) + getY(secondPoint)) / 2;

    return makePoint(firstMidpoint, secondMidpoint)
}

export { makeSegment, startSegment, endSegment, segmentToString, midpointSegment }