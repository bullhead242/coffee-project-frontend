'use strict';
const app = require('../../app');
const api = require('./api');
const router = require('../router');

//handler for like / dislike / creation goes here
function addEventHandlersToLikeButtons(event) {
  $('.like-button').click(function(event){
  // debugger;
    const selectedShopId = parseInt(event.target.parentElement.dataset.shop);
    const theyLikedIt = true;
    let userId = parseInt(app.user.id);
    api.createVisit(userId, selectedShopId, theyLikedIt)
      .done(function(data) {
        console.log(data);
      })
      .fail();
  });
}

function addEventHandlersToNewVisitButtons(event) {
  $('.new-visit-button').click(function(event) {
    const selectedShopId = event.target.parentElement.dataset.shop;
    api.createVisit({user_id: app.user.id, shop_id: selectedShopId})
      .done(function(data) {
        console.log(data);
      })
      .fail();
    });
  }

function addLikeButtonsToShops() {
  $('.shop-listing').append('<button type="button" class="btn btn-success like-button">like</button>');
  addEventHandlersToLikeButtons();
}

function addNewVisitToShops() {
  $('.shop-listing').append('<button type="button" class="btn btn-default new-visit-button"> visited </button>');
}


function addDislikeButtonsToShops() {
  $('.shop-listing').append('<button type="button" class="btn btn-danger dislike-button">dislike</button>');
}

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
  $('#load-visits-button').on('click', handleVisitsButtonClick);
  $('.like-button').on('click', addEventHandlersToLikeButtons(event));
  $('.new-visit-button').on('click', addEventHandlersToNewVisitButtons(event));
};

module.exports = {
  addHandlers,
  addNewVisitToShops,
  addLikeButtonsToShops,
  addDislikeButtonsToShops,
};
