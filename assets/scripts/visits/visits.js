'use strict';
const app = require('../../app');
const api = require('./api');
const ui = require('./ui');
const router = require('../router');

//create new event with 'like' attribute = false
function addEventHandlersToLikeButtons(event) {
  $('.like-button').click(visitLikeOrDislikeClick);
}

// create new event with no 'like' attribute
function addEventHandlersToNewVisitButtons(event) {
  $('.new-visit-button').click(visitLikeOrDislikeClick);
  $('.like-button').show(300);
  $('.dislike-button').show(300);
}

// create new event with 'like' attribute = false
function addEventHandlersToDislikeButtons(event) {
  $('.dislike-button').click(visitLikeOrDislikeClick);
}

function visitLikeOrDislikeClick(event) {
  const selectedShopId = parseInt(event.target.parentElement.dataset.shop);
  const theyLikedIt = true;
  let userId = parseInt(app.user.id);
  api.createVisit(userId, selectedShopId, theyLikedIt)
  .done(function(data) {
    $('.nav-messages').text('like = ' + theyLikedIt);
  })
  .fail(function(error) {
    $('.nav-messages').text(error);
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
  api.getVisits()
    .done(ui.displayVisits)
    .fail(function(error) {
      $('.nav-messages').text(error);
    });
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
