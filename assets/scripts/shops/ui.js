'use strict';

const app = require('../../app');
const visits = require('../visits/visits');

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

module.exports = {
    displayShops,
};
