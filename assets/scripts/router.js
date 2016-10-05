'use strict';

const hidePages = () => {
  $('.page').hide(800);
};

const showShopsPage = () => {
  $('.shops-page').show(800);
};

const showVisitsPage = () => {
  $('.visits-page').show(800);
};

const leaveShopsPage = () => {
  $('shops-list').clear();
};

module.exports = {
  hidePages,
  showShopsPage,
  showVisitsPage,
  leaveShopsPage,
};
