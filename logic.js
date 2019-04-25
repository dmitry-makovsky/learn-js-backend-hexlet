const If = fn => fn
const True = arg1 => () => arg1
const False = () => arg2 => arg2

export {
    True,
    False,
    If
};