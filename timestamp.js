var strftime = require('strftime');
var unixRegex = /^\d+$/;
var naturalRegex = /(January|February|March|April|May|June|July|August|September|October|November|December)[ ](0[1-9]|[12][0-9]|3[01])[,][ ]((19|20)[0-9][0-9])/;

module.exports = {
  print: function (timestamp) {
    var result = {};
    if (unixRegex.test(timestamp) && timestamp  <= Math.floor(new Date() / 1000)) {
       result.unix = timestamp;
       result.natural = strftime('%B %d, %Y', new Date (timestamp*1000));
    } else if (naturalRegex.test(timestamp)){
       result.unix = Date.parse(timestamp)/1000;
       result.natural = strftime('%B %d, %Y', new Date (timestamp));
    } else {
      result.unix = null;
       result.natural = null;
    }
    return result;
  }
};