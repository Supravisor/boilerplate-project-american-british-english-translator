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

  test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
    const text = 'Can you toss this in the trashcan for me?';
    assert.include(translator.amer2Brit(text), 'Can you toss this in the <span class="highlight">rubbish</span>can for me?');
    done();
  });

  test('Translate The parking lot was full. to British English', (done) => {
    const text = 'The parking lot was full.';
    assert.include(translator.amer2Brit(text), 'The <span class="highlight">car park</span> was full.');
    done();
  });

  test('Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
    const text = 'Like a high tech Rube Goldberg machine.';
    assert.include(translator.amer2Brit(text), 'Like a high tech Rube Goldberg machine.');
    done();
  });

  test('Translate To play hooky means to skip class or work. to British English', (done) => {
    const text = 'To play hooky means to skip class or work.';
    assert.include(translator.amer2Brit(text), 'To <span class="highlight">bunk off</span> means to skip class or work.');
    done();
  });

  test('Translate No Mr. Bond, I expect you to die. to British English', (done) => {
    const text = 'No Mr. Bond, I expect you to die.';
    assert.include(translator.amer2Brit(text), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    done();
  });

  test('Translate Dr. Grosh will see you now. to British English', (done) => {
    const text = 'Dr. Grosh will see you now.';
    assert.include(translator.amer2Brit(text), '<span class="highlight">Dr</span> Grosh will see you now.');
    done();
  });

});
