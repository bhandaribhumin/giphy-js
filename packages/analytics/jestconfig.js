// Jest configuration for api
const base = require('../../jestconfig-base.js')

module.exports = {
    ...base,
    name: '@giphy/js-analytics',
    displayName: 'analytics',
    automock: false,
    setupFiles: ['./set-up-jest.ts'],
}
