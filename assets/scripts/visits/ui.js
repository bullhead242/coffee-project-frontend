'use strict'

const app = require('../../app');
const visits = require('./visits');

const displayVisits = (data) => {
  event.preventDefault();
  app.visits = data.visits;
  app.visits.forEach(function(visits){
    $('#visits-list').append('<li class="visit-listing" data-visit=' + visit.id + '>' + visit.shop_id.name + '</li>');
  });
  visits.addLikeButtonsToShops();
  visits.addNewVisitToShops();
  visits.addDislikeButtonsToShops();
};

const showLikeAndDislikeButtons = () => {
  $('like-button').show(300);
  $('dislike-button').show(300);
};

const likeButtonClickedMessage = () => {
  $('nav-messages').text('You liked this!', 600);
};

const newVisitButtonClickedMessage = () => {
  $('nav-messages').text('You created a new visit!', 600);
};

const dislikeButtonClickedMessage = () => {
  $('nav-messages').text('You disliked this :/');
};

module.exports = {
  showLikeAndDislikeButtons,
  likeButtonClickedMessage,
  newVisitButtonClickedMessage,
  dislikeButtonClickedMessage,
};
