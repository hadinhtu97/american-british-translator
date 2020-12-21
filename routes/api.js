'use strict';

const TranslateController = require('../controllers/translateController.js');

module.exports = (app) => {

    let translateController = new TranslateController();

    app.route('/api/lorem')
        .get((req, res) => {

        })
        .post((req, res) => {

        })
        .put((req, res) => {

        })
        .delete((req, res) => {

        })
}