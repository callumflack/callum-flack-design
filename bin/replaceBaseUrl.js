/*
 * This file is a work around nuxtent not having a method to set different
 * baseUrls for generating and when running the generated site
 *
 * For more info:
 * https://github.com/nuxt-community/nuxtent-module/issues/53
 *
 * The following code replaces the configured developmentUrl with the productionUrl
 * in the static files output by running npm run generate
 * developmentUrl & productionUrl are defined in ./config/config.js
 */

const fs = require('fs')
const glob = require('glob')
const config = require('../config/config.js');

glob('dist/_nuxt/app*.js', (err, files) => {
  if (err) {
    return console.log(err);
  }

  const filename = files[0];

  fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    const regex = new RegExp(config.developmentUrl, 'g');
    const result = data.replace(regex, config.productionUrl);

    fs.writeFile(filename, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
});
