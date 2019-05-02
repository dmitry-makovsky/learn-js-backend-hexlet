export const cons = (x, y) => f => f(x, y);

// BEGIN (write your solution here)
export const car = pair => pair((a, b) => a);
export const cdr = pair => pair((a, b) => b);
// END

// const pair = cons(1,4);