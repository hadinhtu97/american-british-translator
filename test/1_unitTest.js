'use strict';

const assert = require('chai').assert;
const TranslateController = require('../controllers/translateController.js');

let translate = new TranslateController();
let t1 = 'american-to-british';
let t2 = 'british-to-american';

describe('Unit tests', () => {

    it('Translate "Mangoes are my favorite fruit." to British English', done => {
        let text = 'Mangoes are my favorite fruit.';
        let expect = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it('Translate "I ate yogurt for breakfast." to British English', done => {
        let text = 'I ate yogurt for breakfast.';
        let expect = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "We had a party at my friend's condo." to British English`, done => {
        let text = "We had a party at my friend's condo.";
        let expect = `We had a party at my friend's <span class="highlight">flat</span>.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "Can you toss this in the trashcan for me?" to British English`, done => {
        let text = `Can you toss this in the trashcan for me?`;
        let expect = `Can you toss this in the <span class="highlight">rubbish</span>can for me?`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "The parking lot was full." to British English`, done => {
        let text = `The parking lot was full.`;
        let expect = `The <span class="highlight">car park</span> was full.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "Like a high tech Rube Goldberg machine." to British English`, done => {
        let text = `Like a high tech Rube Goldberg machine.`;
        let expect = `Like a high tech <span class="highlight">Heath Robinson device</span>.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "To play hooky means to skip class or work." to British English`, done => {
        let text = `To play hooky means to skip class or work.`;
        let expect = `To <span class="highlight">bunk off</span> means to skip class or work.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "No Mr. Bond, I expect you to die." to British English`, done => {
        let text = `No Mr. Bond, I expect you to die.`;
        let expect = `No <span class="highlight">Mr</span> Bond, I expect you to die.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "Dr. Grosh will see you now." to British English`, done => {
        let text = `Dr. Grosh will see you now.`;
        let expect = `<span class="highlight">Dr</span> Grosh will see you now.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    it(`Translate "Lunch is at 12:15 today." to British English`, done => {
        let text = `Lunch is at 12:15 today.`;
        let expect = `Lunch is at <span class="highlight">12.15</span> today.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })

    
    it(`Translate "We watched the footie match for a while." to American English`, done => {
        let text = `We watched the footie match for a while.`;
        let expect = `We watched the <span class="highlight">soccer</span> match for a while.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })
    
    it(`Translate "Paracetamol takes up to an hour to work." to American English`, done => {
        let text = `Paracetamol takes up to an hour to work.`;
        let expect = `<span class="highlight">Tylenol</span> <span class="highlight">thank you</span>kes up to an hour to work.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Translate "First, caramelise the onions." to American English`, done => {
        let text = `First, caramelise the onions.`;
        let expect = `First, <span class="highlight">caramelize</span> the onions.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })
    
    it(`Translate "I spent the bank holiday at the funfair." to American English`, done => {
        let text = `I spent the bank holiday at the funfair.`;
        let expect = `I spent the <span class="highlight"><span class="highlight">bar</span>lic holiday</span> at the <span class="highlight">carnival</span>.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Translate "I had a bicky then went to the chippy." to American English`, done => {
        let text = `I had a bicky then went to the chippy.`;
        let expect = `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Translate "I've just got bits and bobs in my bum bag." to American English`, done => {
        let text = `I've just got bits and bobs in my bum bag.`;
        let expect = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Translate "The car boot sale at Boxted Airfield was called off." to American English`, done => {
        let text = `The car boot sale at Boxted Airfield was called off.`;
        let expect = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Translate "Have you met Mrs Kalyani?" to American English`, done => {
        let text = `Have you met Mrs Kalyani?`;
        let expect = `Have you met <span class="highlight">Mr.</span>s Kalyani?`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })
    
    it(`Translate "Prof Joyner of King's College, London." to American English`, done => {
        let text = `Prof Joyner of King's College, London.`;
        let expect = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Translate "Tea time is usually around 4 or 4.30." to American English`, done => {
        let text = `Tea time is usually around 4 or 4.30.`;
        let expect = `Tea time is usually around 4 or <span class="highlight">4:30</span>.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Highlight translation in "Mangoes are my favorite fruit."`, done => {
        let text = `Mangoes are my favorite fruit.`;
        let expect = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })
    
    it(`Highlight translation in "I ate yogurt for breakfast."`, done => {
        let text = `I ate yogurt for breakfast.`;
        let expect = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
        assert.equal(translate.translate(text, t1), expect);
        done();
    })
    
    it(`Highlight translation in "We watched the footie match for a while."`, done => {
        let text = `We watched the footie match for a while.`;
        let expect = `We watched the <span class="highlight">soccer</span> match for a while.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

    it(`Highlight translation in "Paracetamol takes up to an hour to work."`, done => {
        let text = `We watched the footie match for a while.`;
        let expect = `We watched the <span class="highlight">soccer</span> match for a while.`;
        assert.equal(translate.translate(text, t2), expect);
        done();
    })

})