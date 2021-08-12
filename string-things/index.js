module.exports = {

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
}

}
