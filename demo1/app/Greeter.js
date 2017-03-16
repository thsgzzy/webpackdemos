/**
 * Created by a1 on 17/3/15.
 */
var config = require('./config.json');

module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};