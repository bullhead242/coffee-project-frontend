'use strict';

const app = require('../app');
const api = require('./api');

const failure = () => {
  $(".nav-messages").modal("Ooopsy Daisy!");
};

const hideModal = function (){
  $('#signInModal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  hideModal()
  $("#sign-in-button").text(app.user.email);
  $(".nav-messages").text(app.user.email + " is logged in");
};

const signUpSuccess = (data) => {
  event.preventDefault();
  app.user = data.user;
  hideModal();
  $("#sign-in-button").text(app.user.email);
  $(".nav-messages").text(app.user.email + " signed up/ logged in");
};

const changePasswordSuccess = () => {
  hideModal();
  $(".nav-messages").text("Password changed, " + app.user.email);
};

const signOutSuccess = () => {
  app.user = null;
  hideModal();
  $("#messages").text(app.user.email + " signed out");
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
