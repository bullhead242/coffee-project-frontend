'use strict'

const visits = require('./visits');

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
