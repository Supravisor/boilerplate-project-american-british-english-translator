'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .get((req, res) => {
      
    })

    .post((req, res) => {
      let text = req.body.text

      if (text.length === 0) {
        return res.json({ error: 'No text to translate' });
      }
      
    });
};
