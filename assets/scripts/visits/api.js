'use strict';
// const visits = require('./visits');
const app = require('../../app');

const createVisit = (userId, selectedShopId, theyLikedIt) => {
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

const getVisits = () => {
  return $.ajax({
    url: app.host + '/visits',
    method: 'GET',headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// const likeOrDislikeVisit = (userId, selectedShopId, theyLikedIt) => {
//   return $.ajax({
//     url: app.host + '/visits',
//     method: 'PAT',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//               },
//     data: { visit: {"user_id": userId, "shop_id": selectedShopId, "like": theyLikedIt}
//             }
//   });
// };

module.exports = {
  createVisit,
  getVisits,
};
