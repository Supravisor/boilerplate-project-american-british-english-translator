const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  amer2Brit(string) {

    let amer = Object.keys(americanOnly)
    let amerMatches = string.match(new RegExp(amer.join("|"), "g"));
    let newString = string 

      if (amerMatches) {
        for (let i = 0; i < amerMatches.length; i++) {
          newString = newString.replace(amerMatches[i], americanOnly[amerMatches[i]]);
        }
      }
    
    return newString;

  }

}

module.exports = Translator;