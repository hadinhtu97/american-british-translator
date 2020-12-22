'use strict';
const americanOnly = require('../components/american-only.js');
const britishOnly = require('../components/british-only.js');
const americanToBritishSpelling = require('../components/american-to-british-spelling.js');
const americanToBritishTitles = require('../components/american-to-british-titles.js');


function TranslateController() {

    const validLocate = ['american-to-british', 'british-to-american'];
    const regexAmericanTime = /(\d+):(\d+)/g;
    const regexBritishTime = /(\d+)\.(\d+)/g;
    const beginWrap = '<span class="highlight">';
    const endWrap = '</span>'

    this.translate = (text, locale) => {
        return validLocate.indexOf(locale) == 0 ? this.translateAmericanToBritish(text) : this.translateBritishToAmerican(text);
    }

    this.translateAmericanToBritish = (americanText) => {
        let translation = americanText;
        for (let key in americanOnly) {
            let regex = new RegExp(key, 'gi');
            translation = translation.replace(regex, beginWrap + americanOnly[key] + endWrap);
        }
        for (let key in americanToBritishSpelling) {
            let regex = new RegExp(key, 'gi');
            translation = translation.replace(regex, beginWrap + americanToBritishSpelling[key] + endWrap);
        }
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(key, 'gi');
            translation = translation.replace(regex, beginWrap + americanToBritishTitles[key] + endWrap);
        }
        translation = translation.replace(regexAmericanTime, beginWrap + "$1.$2" + endWrap);
        return translation;
    }

    this.translateBritishToAmerican = (britishText) => {
        let translation = britishText;
        for (let key in britishOnly) {
            let regex = new RegExp(key, 'gi');
            translation = translation.replace(regex, beginWrap + britishOnly[key] + endWrap);
        }
        for (let key in americanToBritishSpelling) {
            let regex = new RegExp(americanToBritishSpelling[key], 'gi');
            translation = translation.replace(regex, beginWrap + key + endWrap);
        }
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(americanToBritishTitles[key], 'gi');
            translation = translation.replace(regex, beginWrap + key + endWrap);
        }
        translation = translation.replace(regexBritishTime, beginWrap + "$1:$2" + endWrap);

        return translation;
    }

    this.isValidLocate = (locate) => {
        return validLocate.indexOf(locate) == -1 ? false : true;
    }

    this.isNeedToTranslate = (text, locate) => {
        if (validLocate.indexOf(locate) == 0) {
            return this.isAnyAmericanTextToTranslate(text) ? true : false;
        } else {
            return this.isAnyBritishTextToTranslate(text) ? true : false;
        }
    }

    this.isAnyAmericanTextToTranslate = (americanText) => {
        for (let key in americanOnly) {
            let regex = new RegExp(key, 'gi');
            if (regex.test(americanText)) return true;
        }
        for (let key in americanToBritishSpelling) {
            let regex = new RegExp(key, 'gi');
            if (regex.test(americanText)) return true;
        }
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(key, 'gi');
            if (regex.test(americanText)) return true;
        }

        if (regexAmericanTime.test(americanText)) return true;

        return false;
    }

    this.isAnyBritishTextToTranslate = (britishText) => {
        for (let key in britishOnly) {
            let regex = new RegExp(key, 'gi');
            if (regex.test(britishText)) return true;
        }
        for (let key in americanToBritishSpelling) {
            let regex = new RegExp(americanToBritishSpelling[key], 'gi');
            if (regex.test(britishText)) return true;
        }
        for (let key in americanToBritishTitles) {
            let regex = new RegExp(americanToBritishTitles[key], 'gi');
            if (regex.test(britishText)) return true;
        }
        if (regexBritishTime.test(britishText)) return true;

        return false;
    }
}

module.exports = TranslateController;