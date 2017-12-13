$(document).ready(() => {
  const c3 = require('c3')
  const results = JSON.parse(localStorage.getItem('results'))
  const stat1 = localStorage.getItem('stat1')
  const stat2 = localStorage.getItem('stat2')
  $('#confidence').html('Confidence = ' + (results[0].confidence * 100).toFixed(2) + '%')
  let tr = $('<tr/>')
  tr.append("<td>" + "<h5>Rank</h5>" + "</td>")
  tr.append("<td>" + "<h5>Player</h5>" + "</td>")
  tr.append("<td>" + "<h5>Correlation</h5>" + "</td>")
  tr.append("<td>" + `<h5>${stat1}</h5>` + "</td>")
  tr.append("<td>" + `<h5>${stat2}</h5>` + "</td>")
  $('table').append(tr)
  for (var i = 0; i < results.length; i++) {
      let tr = $('<tr/>')
      tr.append("<td>" + '#' + (i+1) + "</td>")
      tr.append("<td>" + results[i].player + "</td>")
      tr.append("<td>" + results[i].correl.toFixed(2) + "</td>")
      tr.append("<td>" + results[i].stat1 + "</td>")
      tr.append("<td>" + results[i].stat2 + "</td>")
      $('table').append(tr)
    }
    var chart = c3.generate({
    bindto: '#chart',
      data: {
        xs: {
          stat1: `${stat1}`
        },
        // iris data from R
        columns: [
          [
            `${stat1}`,
            results.regresspoints[0][0],
            results.regresspoints[0][1],
            results.regresspoints[0][2],
            results.regresspoints[0][3],
            results.regresspoints[0][4],
            results.regresspoints[0][5],
            results.regresspoints[0][6],
            results.regresspoints[0][7],
            results.regresspoints[0][8],
            results.regresspoints[0][9]
          ]
        ],
        type: 'scatter'
      },
      axis: {
        x: {
          label: `${stat1}`,
          tick: {
            fit: true
          }
        },
        y: {
          label: `${stat2}`
        }
      }
    })

    setTimeout(function() {
      chart.load({
        xs: {
          Correl: `${stat2}`
        },
        columns: [
          [
            `${stat2}`,
            results.regresspoints[1][0],
            results.regresspoints[1][1],
            results.regresspoints[1][2],
            results.regresspoints[1][3],
            results.regresspoints[1][4],
            results.regresspoints[1][5],
            results.regresspoints[1][6],
            results.regresspoints[1][7],
            results.regresspoints[1][8],
            results.regresspoints[1][9]
          ],
          [
            'Correl',
            results.correl[0],
            results.correl[0],
            results.correl[0],
            results.correl[0],
            results.correl[0],
            results.correl[0],
            results.correl[0],
            results.correl[0],
            results.correl[0],
            results.correl[0]
          ]
        ]
      })
    }, 1000)

    setTimeout(function() {
      chart.unload({
        ids: 'FGA'
      })
    }, 2000)

    setTimeout(function() {
      chart.load({
        columns: [
          [
            `${stat1}`,
            results.regresspoints[0][0],
            results.regresspoints[0][1],
            results.regresspoints[0][2],
            results.regresspoints[0][3],
            results.regresspoints[0][4],
            results.regresspoints[0][5],
            results.regresspoints[0][6],
            results.regresspoints[0][7],
            results.regresspoints[0][8],
            results.regresspoints[0][9]
          ]
        ]
      })
    }, 3000)
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
