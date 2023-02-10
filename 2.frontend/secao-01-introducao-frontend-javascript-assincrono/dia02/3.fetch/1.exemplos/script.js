'use strict'

const fetch = require('node-fetch');
// fetch

fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(`"${data.quote}" | ${data.author}`));