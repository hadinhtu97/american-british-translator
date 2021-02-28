# American British Translator

## Description
Backend APIs translate between american and british

## Use
```
git clone https://github.com/hadinhtu97/american-british-translator
cd american-british-translator
npm install
npm run start
```

## APIs
* POST : `[]/api/translate`
  * form body must containing `text` with the text to translate and `locale` with either `american-to-british` or `british-to-american`
  * in responsive, text translated is wrapped in `<span class="highlight">` `</span>`
  * Exam translate :
    * Ten thirty is written as "10.30" in British English and "10:30" in American English.
    * Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English
  * If text requires no translation, return `"Everything looks good to me!"`

## Testing
Unit tests and functional tests are in `test` directory

Run the project and use `npm run test` to run tests.