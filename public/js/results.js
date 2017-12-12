$(document).ready(() => {
  // $('#swipe-1').html(localStorage.getItem('stat1'))
  // $('#swipe-2').html(localStorage.getItem('stat2'))
  // $('#swipe-3').html(localStorage.getItem('constraint'))
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
  })
  const ball = $('#ball')
  ball.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      ball.css({'color': 'orange', 'animation': 'fade1 .5s linear 1'})
      Materialize.toast('Favorite added', 1500)
    } else {
      ball.css({'color': 'rgba(0, 0, 0, 0)', 'animation': 'fade2 .5s linear 1'})
      Materialize.toast('Favorite removed', 1500)
    }
  })
  $('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: 1920
  })
})
