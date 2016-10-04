'use strict';
const app = require('../../app');
const api = require('./api');
const router = require('../router');

//handler for like / dislike / creation goes here
function addEventHandlersToLikeButtons(event) {
  $('.like-button').click(function(event){
  debugger;
    const selectedShopId = event.target.parentElement.dataset.shop;
    const theyLikedIt = true;
    api.createVisit({user_id: app.user.id, shop_id: selectedShopId, like: theyLikedIt})
      .done(function(data) {
        console.log(data);
      })
      .fail();
  });
}

function addLikeButtonsToShops() {
  $('.shop-listing').append('<button type="button" class="btn btn-success">like</button>');
  addEventHandlersToLikeButtons();
}

function addNewVisitToShops() {
  $('.shop-listing').append('<button type="button" class="btn btn-default"> visited </button>');
}


function addDislikeButtonsToShops() {
  $('.shop-listing').append('<button type="button" class="btn btn-danger">dislike</button>');
}
//
// const addHandlers = () => {
//   $('.like-button').on('click', addEventHandlersToLikeButtons(event));
// };

const handleVisitsButtonClick = function (event) {
  event.preventDefault();
  router.hidePages();
  router.showVisitsPage();
};

// const handleShopButtonClick = function (event) {
//   event.preventDefault();
//   router.hidePages();
//   router.showShopsPage();
//   api.getShops()
//     .done(ui.displayShops)
//     .fail(function(error) {
//       debugger;
//     });
// };

const addHandlers = () => {
  $('#visits-button').on('click', handleVisitsButtonClick);
};

module.exports = {
  addHandlers,
  addNewVisitToShops,
  addLikeButtonsToShops,
  addDislikeButtonsToShops,
};
