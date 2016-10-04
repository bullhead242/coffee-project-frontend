'use strict';

const app = require('../../app');
const visits = require('../visits/visits'); //update to visits.vists?

const displayShops = (data) => {
  event.preventDefault();
  app.shops = data.shops;
  app.shops.forEach(function(shop){
    $('#shops-list').append('<li class="shop-listing" data-shop=' + shop.id + '>' + shop.name + '</li>');
  });
  visits.addLikeButtonsToShops();
  visits.addNewVisitToShops();
  visits.addDislikeButtonsToShops();
};

// const signInSuccess = (data) => {
//   event.preventDefault();
//   app.user = data.user;
//   hideModal()
//   entryToVisits();
//   $("#user-button").text(app.user.email);
//   $(".nav-messages").text(app.user.email + " is logged in");
// };

module.exports = {
    displayShops,
};
