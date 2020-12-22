'use strict';

const TranslateController = require('../controllers/translateController.js');

module.exports = (app) => {

    let translateController = new TranslateController();

    app.route('/api/translate')
        .post((req, res) => {
            if (req.body.text == undefined || req.body.locale == undefined) {
                res.json({ error: 'Required field(s) missing' });
            } else if (req.body.text == '') {
                res.json({ error: 'No text to translate' });
            } else if (!translateController.isValidLocate(req.body.locale)) {
                res.json({ error: 'Invalid value for locale field' });
            } else if (!translateController.isNeedToTranslate(req.body.text, req.body.locale)) {
                res.json({ text: req.body.text, translation: 'Everything looks good to me!' });
            } else {
                res.json({ text: req.body.text, translation: translateController.translate(req.body.text, req.body.locale) });
            }
        })

}