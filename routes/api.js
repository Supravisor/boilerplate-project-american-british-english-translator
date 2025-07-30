'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')

    .post((req, res) => {
      let text = req.body.text
      let locale = req.body.locale

      if (!locale || text === undefined) {
        return res.json({ error: 'Required field(s) missing' });
      }

      if (text === "" && (locale === "american-to-british" || locale === "british-to-american")) {
        return res.json({ error: 'No text to translate' });
      }

      if (text !== "american-to-british" || text !== "british-to-american") {
        return res.json({ error: 'Invalid value for locale field' });
      }

      
    });
};
