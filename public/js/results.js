$(document).ready(() => {
  const results = JSON.parse(localStorage.getItem('results'))
  console.log(results)
  let tr = $('<tr/>')
  tr.append("<td>" + "<h5>Rank</h5>" + "</td>")
  tr.append("<td>" + "<h5>Player</h5>" + "</td>")
  tr.append("<td>" + '<h5>Regression Points</h5>' + "</td>")
  tr.append("<td>" + '<h5>Correlation</h5>' + "</td>")
  tr.append("<td>" + '<h5>Stat1</h5>' + "</td>")
  tr.append("<td>" + '<h5>Stat2</h5>' + "</td>")
  tr.append("<td>" + '<h5>Confidence</h5>' + "</td>")
  $('table').append(tr)
  for (var i = 0; i < results.length; i++) {
      let tr = $('<tr/>')
      tr.append("<td>" + '#' + (i+1) + "</td>")
      tr.append("<td>" + results[i].player + "</td>")
      tr.append("<td>" + results[i].regresspoints + "</td>")
      tr.append("<td>" + results[i].correl.toFixed(2) + "</td>")
      tr.append("<td>" + results[i].stat1 + "</td>")
      tr.append("<td>" + results[i].stat2 + "</td>")
      tr.append("<td>" + results[i].confidence + "</td>")
      $('table').append(tr)
    }
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
    $.getJSON('/token')
      .done((loggedIn) => {
        if (loggedIn) {
          if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
            ball.css({'color': 'orange', 'animation': 'fade1 .5s linear 1'})
            Materialize.toast('Favorite added', 1500)
          } else {
            ball.css({'color': 'rgba(0, 0, 0, 0)', 'animation': 'fade2 .5s linear 1'})
            Materialize.toast('Favorite removed', 1500)
          }
        } else {
          Materialize.toast('You must be logged in to add favorites', 2500)
        }
      })
  })
  $('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: 1920
  })
})
