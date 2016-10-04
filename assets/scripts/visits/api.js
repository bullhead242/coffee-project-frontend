'use strict';

const app = require('../../app');

const createVisit = (data) => {
  return $.ajax({
    url: app.host + '/visits',
    method: 'POST',
    data: data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// const getShops = () => {
//   return $.ajax({
//     url: app.host + '/shops',
//     method: 'GET',
//   });
// };

module.exports = {
  createVisit,
};
