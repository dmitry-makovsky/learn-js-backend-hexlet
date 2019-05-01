import { cons, car, cdr } from 'hexlet-pairs';

export default (pair) => {

    return cons(cdr(pair), car(pair));
}