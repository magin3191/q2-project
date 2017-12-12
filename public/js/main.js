$(document).ready(() => {
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

  const arr = $('.collapsible-body')
  $('#search').click(() => {
    localStorage.setItem('stat1', arr[0].attributes[2].value)
    localStorage.setItem('stat2', arr[1].attributes[2].value)
    localStorage.setItem('constraint', arr[2].attributes[2].value)
    window.location.href = "results.html"
  })
})
