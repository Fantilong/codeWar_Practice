module.exports = {
    /**
     * @description: 日期解析，秒数的数字，
     * @param {Number} 1
     * @return {String} 1 second
     * @param {Number} 62
     * @return {String} 1 minute and 2 seconds
    */
    formatDuration (seconds) {
        if (!seconds) return 'now'
        const units = [60, 60, 24, 365, '']
        const result = { 0: '', 1: '', 2: '', 3: '', 4: '' }

        for (let index = 0; index < units.length; index++) {
            if (index === 4 && seconds > 0) {
                result[index] = seconds
                break
            }

            if (seconds < units[index]) {
                result[index] = seconds
                break

                // break;
            }

            let rest = seconds % units[index]
            result[index] = rest ? rest : ''
            seconds = (seconds - rest) / units[index]
        }

        let str = ''
        Object.values(result).reverse().forEach((value, index, arr) => {
            debugger
            if (!value) return

            switch (index) {
                case 0:
                    str += value > 1 ? `${value} years` : `${value} year`
                    break;
                case 1:
                    str += value > 1 ? `${value} days` : `${value} day`
                    break;
                case 2:
                    str += value > 1 ? `${value} hours` : `${value} hour`
                    break;
                case 3:
                    str += value > 1 ? `${value} minutes` : `${value} minute`
                    break;
                case 4:
                    str += value > 1 ? `${value} seconds` : `${value} second`
                    break;
                default:
                    break;
            }

            const restLength = arr.slice(index + 1).filter(a => a).length

            if (restLength > 1) {
                str += ', '
            } else if (restLength === 1) {
                str += ' and '
            }

            debugger

        })

        return str
    }
}
