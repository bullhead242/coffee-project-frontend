'use strict';

const app = require('../../app');
const api = require('./api');
const router = require('../router.js')

const failure = () => {
  $(".nav-messages").modal("Ooopsy Daisy!");
};

const hideModal = function (){
  $('#signInModal').modal('hide');
};

const signInSuccess = (data) => {
  event.preventDefault();
  app.user = data.user;
  hideModal()
  router.hidePages();
  router.showVisitsPage;
  $("#user-button").text(app.user.email);
  $("#load-visits-button").show();
  $(".nav-messages").text(app.user.email + " is logged in");
};

const signUpSuccess = (data) => {
  event.preventDefault();
  app.user = data.user;
  hideModal();
  router.showVisitsPage();
  $("#user-button").text(app.user.email);
  $(".nav-messages").text(app.user.email + " signed up/ logged in");
};

const changePasswordSuccess = () => {
  hideModal();
  $(".nav-messages").text("Password changed, " + app.user.email);
};

const signOutSuccess = () => {
  $(".nav-messages").text(app.user.email + " signed out");
  $("#user-button").text("sign in/ sign up");
  app.user = null;
  hideModal();
};

const entryToVisits = () => {
  $(".entry-page").hide(800);
  $(".visit-page").show(800);
};

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
