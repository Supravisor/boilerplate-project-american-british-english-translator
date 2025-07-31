const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  amer2Brit(string) {

    let amer = Object.keys(americanOnly)
    let matches = string.match(new RegExp(amer.join("|"), "g"));
    let newString = string 

  }

}

module.exports = Translator;