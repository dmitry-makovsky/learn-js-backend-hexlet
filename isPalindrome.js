const isPalindrome = (str) => {

    if (str.length < 2) return true

    if (str[0] === str[str.length - 1]) {
        for (let i = 1; i < str.length; i++) {
            return isPalindrome(str.substring(i, str.length - i))
        }
    } else {
        return false
    }
}

export default isPalindrome;