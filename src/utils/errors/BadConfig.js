module.exports = class BadConfigError extends Error {

    constructor () {
        super('Bad config.')
    }
}