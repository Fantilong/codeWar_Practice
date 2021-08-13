
export default {
/**
 * @description: 
 * @param {*}
 * @return {*}
 */    
firstNonRepeatingLetter(s) {
    if (s.length === 1) {
        return s
    }

    const sLower = s.toLowerCase().split('')

    if (new Set(sLower).size === 1) {
        return ''
    }

    let resultIndex = null

    for (let index = 0; index < sLower.length; index++) {
        debugger
        let count = 0

        sLower.forEach(sl => {
            sl === sLower[index] && count++
        })

        if (count > 1) {
            continue
        }
        else {
            resultIndex = index
            break
        }
    }

    if (resultIndex === null) {
        return ''
    }
    else {
        return s[resultIndex]
    }
},

/**
 * @description:  Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
 * @param {*}
 * @return {*}
 */    
validParentheses(parens){
    const template = { ')': '(', '}': '{', ']':'['}
    const result = []
    let gotWr = false

    parens.split('').forEach(str => {
        if (template[str]) {//非右闭合
            if (!result.length) {
                gotWr = true

            }
            result.pop()
        }
        else {
            result.push(str)
        }

    })


    if (gotWr) {
        return !gotWr
    } else {
        return !result.length
    }
    
}

}
