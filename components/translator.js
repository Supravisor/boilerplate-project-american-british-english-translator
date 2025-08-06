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
    let titleMatches = newString.match(new RegExp(titles.join("|"), "gi"));

      if (titleMatches) {
        titleMatches = titleMatches.map(el => el.replaceAll(" " , ""));
        for (let i = 0; i < titleMatches.length; i++) {
          if (titleMatches[i].includes(".")) {
            newString = newString.replace(titleMatches[i], `<span class="highlight">${americanToBritishTitles[titleMatches[i].toLowerCase()][0].toUpperCase()}${americanToBritishTitles[titleMatches[i].toLowerCase()].slice(1, 4)}</span>`);
          }
        }
      }

    let time = string.match(/\d+\:\d+/, "g");

      if (time) {
        for (let i = 0; i < time.length; i++) {
          newString = newString.replace(time[i], `<span class="highlight">${time[i].replace(":", ".")}</span>`);
        }
      }

    return newString;
  }

  brit2Amer(string) {
    let brit = Object.keys(britishOnly);
    let britMatches = string.match(new RegExp(brit.join("|"), "gi"));
    let newString = string;

    let taParacetamol = [];
    if (/\s+ta|Paracetamol/.test(britMatches)) {
      let splitString = newString.split(" ");
      for (let i=0; i < splitString.length; i++) {
        if (new RegExp(splitString[i]).test(britMatches)) {
          taParacetamol.push(splitString[i]);
        }
      }
      britMatches = taParacetamol;
    }

      if (britMatches) {
        for (let i = 0; i < britMatches.length; i++) {
          newString = newString.replace(britMatches[i], `<span class="highlight">${britishOnly[britMatches[i].toLowerCase()]}</span>`);
        }
      }

    let amerSpell = Object.values(americanToBritishSpelling);
    let amerSpellMatches = string.match(new RegExp(amerSpell.join("|"), "g"));

    const findKeyByValue = (obj, value) => {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (obj[key] === value) {
          return key;
        }
      }
    }

    let titles = Object.keys(americanToBritishTitles)
    let titleMatches = newString.match(new RegExp(titles.join("|"), "i"));

      if (titleMatches) {
        for (let i = 0; i < titleMatches.length; i++) {
          if (!titleMatches[i].includes(".")) {
            newString = newString.replace(titleMatches[i], `<span class="highlight">${americanToBritishTitles[titleMatches[i].toLowerCase()+"."][0].toUpperCase()}${americanToBritishTitles[titleMatches[i].toLowerCase()+"."].slice(1, 4)}.</span>`);
          }
        }
      }

    let time = string.match(/\d+\.\d+/, "g");

      if (time) {
        for (let i = 0; i < time.length; i++) {
          newString = newString.replace(time[i], `<span class="highlight">${time[i].replace(".", ":")}</span>`);
        }
      }

    return newString;
  }

}

module.exports = Translator;