$(document).ready(() => {
  console.log(localStorage.getItem('stat1'))
  console.log(localStorage.getItem('stat2'))
  console.log(localStorage.getItem('constraint'))
  $('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: 1920
  });
});
