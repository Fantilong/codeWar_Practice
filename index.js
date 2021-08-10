const {formatDuration} = require('./date-things/date-format')


console.log(process.argv.slice(2)[0])
console.log(formatDuration(process.argv.slice(2)[0]))
