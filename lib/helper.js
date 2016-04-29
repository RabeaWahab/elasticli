var Color = require('chalk');

var Helper = {
  errorMessage: function (message) {
    return Color.red(message);
  },

  warningMessage: function (message) {
    return Color.yellow(message);
  },

  successMessage: function (message) {
    return Color.green(message);
  },
};

module.exports = Helper;
