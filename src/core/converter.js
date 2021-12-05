const { decimals, romans } = require('../config/numbers.json'),
      { isInt } = require('../utils/numbers'),
      BadConfigError = require('../utils/errors/BadConfig'),
      BadArgError = require('../utils/errors/BadArg')

module.exports = {

    toRoman (number) {

        if (decimals.length !== romans.length) throw new BadConfigError
        if (!isInt(number)) throw new BadArgError('toRoman() function takes a NUMBER as parameter')

        let romanString = ''
        let i = decimals.length - 1
        
        while (number > 0) {
            
            const sequence = Math.floor(number / decimals[i])
            romanString += new Array(sequence).fill(romans[i]).join('')

            number = number % decimals[i]
            i--
        }

        return romanString
    },

    toDecimal (romanString) {

        if (decimals.length !== romans.length) throw new BadConfigError
        if (typeof romanString !== 'string') throw new BadArgError('toDecimal() function takes a STRING as parameter')

        let number = 0
        let i = romanString.length - 1

        while (i >= 0) {
            
            const currVal = decimals[romans.indexOf(romanString[i])]
            
            if (i > 1) {

                const prevVal = decimals[romans.indexOf(romanString[i - 1])]

                if (prevVal >= currVal) number += currVal
                else {
                    number += currVal - prevVal
                    i--
                }
                
            } else number += currVal

            i--
        
        }

        return number
    }

}