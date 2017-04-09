/**
 * Created by root on 3/13/17.
 */
const spawnCasper = require('./spawn');
const helpers = require('./helpers');

module.exports = (number => new Promise(resolve => {
    console.log(number);
    spawnCasper(number)
        .then(helpers.getInfo)
        .then(resolve)
        .catch(console.error)
}));