'use strict';
// const visits = require('./visits');
const app = require('../../app');

const createVisit = (userId, selectedShopId, theyLikedIt) => {
  debugger;
  return $.ajax({
    url: app.host + '/visits',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
              },
    data: { visit: {"user_id": userId, "shop_id": selectedShopId, "like": theyLikedIt}
            }
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
