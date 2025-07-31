const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  amer2Brit(string) {

    let amer = Object.keys(americanOnly);
    let amerMatches = string.match(new RegExp(amer.join("|"), "g"));
    let newString = string;

      if (amerMatches) {
        for (let i = 0; i < amerMatches.length; i++) {
          newString = newString.replace(amerMatches[i], `<span class="highlight">${americanOnly[amerMatches[i]]}</span>`);
        }
      }

    let amerSpell = Object.keys(americanToBritishSpelling);
    let amerSpellMatches = string.match(new RegExp(amerSpell.join("|"), "g"));

      if (amerSpellMatches) {
        for (let i = 0; i < amerSpellMatches.length; i++) {
          newString = newString.replace(amerSpellMatches[i], `<span class="highlight">${americanToBritishSpelling[amerSpellMatches[i]]}</span>`);
        }
      }

    let titles = Object.keys(americanToBritishTitles)
    let titleMatches = newString.match(new RegExp(titles.join("|"), "g", "i"));

    return newString;

  }

}

module.exports = Translator;