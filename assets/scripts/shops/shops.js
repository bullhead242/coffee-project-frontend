'use strict';
const api = require('./api');
const ui = require('./ui');
const router = require('../router')

// const handleShopsList = function(data) {
//       console.log(data);
// }

const handleShopButtonClick = function (event) {
  event.preventDefault();
  router.hidePages();
  router.showShopsPage();
  api.getShops()
    .done(ui.displayShops)
    .fail(function(error) {
      debugger;
    });
};

const addHandlers = () => {
$('#shops-button').on('click', handleShopButtonClick);
};

module.exports = {
  addHandlers,
};
