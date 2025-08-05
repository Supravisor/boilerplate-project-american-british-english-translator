const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {

  test('Translate Mangoes are my favorite fruit. to British English', (done) => {
    const text = 'Mangoes are my favorite fruit.';
    assert.include(translator.amer2Brit(text), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
  });

});
