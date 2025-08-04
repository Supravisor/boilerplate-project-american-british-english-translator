const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  test('Translation with text and locale fields: POST request to /api/translate', function(done) {
    chai.request(server)
      .post( '/api/translate' )
      .send( {
        "text": "Dr Jones",
        "locale": "american-to-british"
      } )
      .end(function(err, res){
        assert.equal(res.status, 200);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        done();
      });
  });

  test('Translation with text and invalid locale field: POST request to /api/translate', function(done) {
    chai.request(server)
      .post( '/api/translate' )
      .send( {
        "text": "Dr Jones",
        "locale": "american-to-american"
      } )
      .end(function(err, res){
        assert.equal(res.status, 200);
        assert.property(res.body, 'error');
        assert.include(res.body.error, 'Invalid value for locale field');
        done();
      });
  });

});
