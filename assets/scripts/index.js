'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

// const api = require('./api');
const auth = require('./auth/auth');
const shops = require('./shops/shops');

$(() => {
  auth.addHandlers();
  shops.addHandlers();
});
