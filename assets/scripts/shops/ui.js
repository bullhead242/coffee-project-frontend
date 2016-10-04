'use strict';

const app = require('../../app');

const displayShops = (data) => {
  event.preventDefault();
  app.shops = data.shops;
  app.shops.forEach(function(shop){
    $('#shops-list').append('<li>' + shop.name + '</li>');
  });
};

// const signInSuccess = (data) => {
//   event.preventDefault();
//   app.user = data.user;
//   hideModal()
//   entryToVisits();
//   $("#nav-button").text(app.user.email);
//   $(".nav-messages").text(app.user.email + " is logged in");
// };

module.exports = {
    displayShops,
};
