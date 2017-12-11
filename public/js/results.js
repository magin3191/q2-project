$(document).ready(() => {
  $('#swipe-1').html(localStorage.getItem('stat1'))
  $('#swipe-2').html(localStorage.getItem('stat2'))
  $('#swipe-3').html(localStorage.getItem('constraint'))
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    },
    complete: () => {} // Callback for Modal close
  });
  $('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: 1920
  });
});
