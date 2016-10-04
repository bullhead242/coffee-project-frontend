'use strict';

const app = require('../../app');

const getShops = () => {
  return $.ajax({
    url: app.host + '/shops',
    method: 'GET',
  });
};

module.exports = {
  getShops,
};
