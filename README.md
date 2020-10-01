# @puppeteer/i18next-autoTranslator

i18next is widely used for translating applications; packages like i18next-parser can be used to automate the process of maintaining translation catalog. however, such tools extract the keys in applicaion and organise them in configurable json files which are yet to be filled by the user.

this package automates the process of translating all the keys in a json file using google api, and organises the file into specified output path which is configurable by the user.

## Features
- uses puppeteer for translating keys, 
- creates directories and files with translated key-value pairs under specific namespace folders.
- cli-spinner which keeps the user updated with the progress of translations.
- user can configure, input file path, outpathPath, define languages, name of the output file to be created.

## Usage
Create a translation-config.js file in the root directory, and execute the command "autoTranslate" in cmd 

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
