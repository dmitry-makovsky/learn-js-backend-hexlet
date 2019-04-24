// // subtraction
// const sub = (a, b) => a - b;
// const reverseSub = flip(sub);

// sub(5, 3); // 2
// reverseSub(5, 3); // -2

export default (func) => {
    return (first, second) => func(second, first);
}