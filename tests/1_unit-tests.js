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

  test('Translate I ate yogurt for breakfast. to British English', (done) => {
    const text = 'I ate yogurt for breakfast.';
    assert.include(translator.amer2Brit(text), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
  });

  test("Translate We had a party at my friend's condo. to British English", (done) => {
    const text = "We had a party at my friend's condo.";
    assert.include(translator.amer2Brit(text), 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    done();
  });

});
