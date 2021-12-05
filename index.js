const Converter = require('./src/utils/Converter.js');
const convert = new Converter();

module.export = {

    // fonctions activées
    toRoman: convert.toRoman,
    toDecimal: convert.toDecimal

    // fonctions désactivées

}