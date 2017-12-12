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
    event.preventDefault()
    const options = {
        contentType: 'application/json',
        data: JSON.stringify({
          stat1: arr[0].attributes[2].value,
          stat2: arr[1].attributes[2].value,
          constraint: arr[2].attributes[2].value
        }),
        dataType: 'json',
        type: 'POST',
        url: '/stats',
        success: window.location.href = '/results.html'
      }
      $.ajax(options)
        .done(() => {
          window.location.href = '/results.html'
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000)
        })
  })
})
