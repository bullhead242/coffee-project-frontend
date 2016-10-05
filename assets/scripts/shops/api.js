'use strict';

const app = require('../../app');

const getShops = () => {
  return $.ajax({
    url: app.host + '/shops',
    method: 'GET',headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  getShops,
};
