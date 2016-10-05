'use strict';
const app = require('../../app');
const api = require('./api');
const ui = require('./ui');
const router = require('../router');

//create new event with 'like' attribute = false
function addEventHandlersToLikeButtons(event) {
  $('.like-button').click(function(event){
    let selectedShopId = parseInt(event.target.parentElement.dataset.shop);
    let theyLikedIt = true;
    let userId = parseInt(app.user.id);
    api.createVisit(userId, selectedShopId, theyLikedIt)
      .done(function(data) {
        console.log(data);
      })
      .fail();
  });
}

// posible refactoring of long functions
// function visitLikeOrDislikeClick(event) => {
//     const selectedShopId = parseInt(event.target.parentElement.dataset.shop);
//     const theyLikedIt = true;
//     let userId = parseInt(app.user.id);
//     api.createVisit(userId, selectedShopId, theyLikedIt)
//       .done(function(data) {
//         console.log(data);
//       })
//       .fail();
//   });
// }

// create new event with no 'like' attribute
function addEventHandlersToNewVisitButtons(event) {
  debugger;
  $('.new-visit-button').click(function(event){
    let selectedShopId = parseInt(event.target.parentElement.dataset.shop);
    let theyLikedIt = true;
    let userId = parseInt(app.user.id);
    api.createVisit(userId, selectedShopId, theyLikedIt)
      .done(function(data) {
        console.log(data);
      })
      .fail();
  });
}

// from stack overflow to adapt to remedy events firing on page load
// $(document).on('click', '#add', function (clickEvent) {
//     // Update here !
//     $.ajax...
// });


// create new event with 'like' attribute = false
function addEventHandlersToDislikeButtons(event) {
  $('.dislike-button').click(function(event){
    debugger;
    let selectedShopId = parseInt(event.target.parentElement.dataset.shop);
    let theyLikedIt = true;
    let userId = parseInt(app.user.id);
    api.createVisit(userId, selectedShopId, theyLikedIt)
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
  $('.shop-listing').append('<button type="button" class="btn btn-default new-visit-button">have visited</button>');
  addEventHandlersToNewVisitButtons();
}

function addDislikeButtonsToShops() {
  $('.shop-listing').append('<button type="button" class="btn btn-danger dislike-button">dislike</button>');
  addEventHandlersToDislikeButtons();
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
  $('.like-button').on('click', addEventHandlersToLikeButtons);
  $('.new-visit-button').on('click', addEventHandlersToNewVisitButtons);
  $('.dislike-button').on('click', addEventHandlersToDislikeButtons);
};

module.exports = {
  addHandlers,
  addNewVisitToShops,
  addLikeButtonsToShops,
  addDislikeButtonsToShops,
};
