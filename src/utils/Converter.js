const { decimals, romans } = require('../config/numbers.json');
const BadConfigError = require('./errors/BadConfig');

module.exports = class Converter {

    constructor () {
        if (decimals.length !== romans.length) throw new BadConfigError;
        this.totalNumberOfRomanCharacters = decimals.length - 1;
    }

    toRoman (number) {

        let romanString = '';
        let i = this.totalNumberOfRomanCharacters;
        
        while (number > 0) {
            
            const sequence = Math.floor(number / decimals[i]);
            romanString += new Array(sequence).fill(romans[i]).join('');

            number = number % decimals[i];
            i--;
        }

        return romanString;
    }

    toDecimal (romanString) {

        let number = 0;
        let i = romanString.length - 1;

        for (i; i >= 0; i--) {
            
            const currVal = decimals[romans.indexOf(romanString[i])]; // on obtient la valeur du caractère courant
            
            if (i > 1) { // on vérifie s'il y a encore des lettres après

                const prevVal = decimals[romans.indexOf(romanString[i - 1])]; // on obtient la valeur du caractère précédent

                if (prevVal >= currVal) number += currVal;
                else number += currVal - prevVal;
                
            } else number += currVal
        
        }

        return number;
    }

}