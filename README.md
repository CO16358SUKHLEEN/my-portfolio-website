# @puppeteer/i18next-autoTranslator

i18next is widely used for translating applications; packages like i18next-parser can be used to automate the process of maintaining translation catalog. however, extracting the keys in applicaion and organising it in configurable json files is what tools like i18next-parser are capabale of doing, the json files with translation values are yet to filled by the user.

this package automates the process of translating all the keys in the json files using google api, translating and organising these files with key-value pairs in respective output path which is configurable by the user.

## Features
- uses puppeteer for translating keys, 
- creates directories and files with translated key-value pairs under specific namespace folders.
- cli-spinner which keeps the user updated with the progress of translations.
- user can configure, input file path, outpathPath, define languages, name of the output file to be created.

## Usage

Using a config file gives you fine-grained control over how i18next-parser treats your files. Here's an example config showing all config options with their defaults.

```js
// translation-config.js
module.exports = {
NAMESPACE: "test", //name of the translated file to be created in the output directory
outputDir: `public/locales/$LOCALE`, //output directory, NOTE: append path with /$LOCALE 
inputFile: "refer.json", //change file for every translation
outputLanguages: ["fr", "en", "zh-CN"], //Language codes
inputLang: "English"
}
```

![image](https://user-images.githubusercontent.com/35762394/94409408-c01edb00-0193-11eb-9fd3-712dd2252435.png)
