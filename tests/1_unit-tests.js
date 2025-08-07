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

  test('Translate Lunch is at 12:15 today. to British English', (done) => {
    const text = 'Lunch is at 12:15 today.';
    assert.include(translator.amer2Brit(text), 'Lunch is at <span class="highlight">12.15</span> today.');
    done();
  });

  test('Translate We watched the footie match for a while. to American English', (done) => {
    const text = 'We watched the footie match for a while.';
    assert.include(translator.brit2Amer(text), 'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
  });

  test('Translate Paracetamol takes up to an hour to work. to American English', (done) => {
    const text = 'Paracetamol takes up to an hour to work.';
    assert.include(translator.brit2Amer(text), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    done();
  });

  test('Translate First, caramelise the onions. to American English', (done) => {
    const text = 'First, caramelise the onions.';
    assert.include(translator.brit2Amer(text), 'First, <span class="highlight">caramelize</span> the onions.');
    done();
  });

  test('Translate I spent the bank holiday at the funfair. to American English', (done) => {
    const text = 'I spent the bank holiday at the funfair.';
    assert.include(translator.brit2Amer(text), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    done();
  });

  test('Translate I had a bicky then went to the chippy. to American English', (done) => {
    const text = 'I had a bicky then went to the chippy.';
    assert.include(translator.brit2Amer(text), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    done();
  });

  test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
    const text = "I've just got bits and bobs in my bum bag.";
    assert.include(translator.brit2Amer(text), "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.");
    done();
  });

  test('Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
    const text = 'The car boot sale at Boxted Airfield was called off.';
    assert.include(translator.brit2Amer(text), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    done();
  });

  test('Translate Have you met Mrs Kalyani? to American English', (done) => {
    const text = 'Have you met Mrs Kalyani?';
    assert.include(translator.brit2Amer(text), 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    done();
  });

});
