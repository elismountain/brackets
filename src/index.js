module.exports = function check(str, bracketsConfig) {
    const isOpeningBracket = (symbol) => {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketsConfig[i][0] === symbol) {
                return true;
            }
        }
        return false;
    }

    const isClosingBracket = (symbol) => {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketsConfig[i][1] === symbol) {
                return true;
            }
        }
        return false;
    }

    const isPair = (closingBracket, symbol) => {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketsConfig[i][0] === symbol && bracketsConfig[i][1] === closingBracket ) {
                return true;
            }
        }
        return false;
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (isOpeningBracket(str[i])) {
            if (stack.length > 0 && isPair(str[i], stack[stack.length-1])) {
                stack.pop();
            }else {
                stack.push(str[i]);
            }

        } else if(isClosingBracket(str[i])) {
            if (stack.length === 0) {
                return false;
            }
            if (isPair(str[i], stack[stack.length-1])) {
                stack.pop();
            }else {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;


}
