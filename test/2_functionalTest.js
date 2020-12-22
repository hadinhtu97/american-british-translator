'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const assert = chai.assert;
const server = 'http://localhost:3000';
chai.use(chaiHttp);

describe('Functional tests', () => {

    it('Translation with text and locale fields: POST request to /api/translate', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'We watched the footie match for a while.',
                locale: 'british-to-american'
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.text, 'We watched the footie match for a while.');
                assert.equal(res.body.translation, 'We watched the <span class="highlight">soccer</span> match for a while.');
                done();
            })
    })

    it('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'We watched the footie match for a while.',
                locale: 'british-to-americanXD'
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Invalid value for locale field');
                done();
            })
    })

    it('Translation with missing text field: POST request to /api/translate', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
                locale: 'british-to-american'
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            })
    })

    it('Translation with missing locale field: POST request to /api/translate', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'british-to-american'
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Required field(s) missing');
                done();
            })
    })

    it('Translation with missing locale field: POST request to /api/translate', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
                text: '',
                locale: 'british-to-american'
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'No text to translate');
                done();
            })
    })

    it('Translation with text that needs no translation: POST request to /api/translate', (done) => {
        chai.request(server)
            .post('/api/translate')
            .send({
                text: 'Lorem ipsum',
                locale: 'british-to-american'
            })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.text, 'Lorem ipsum');
                assert.equal(res.body.translation, 'Everything looks good to me!');
                done();
            })
    })

})