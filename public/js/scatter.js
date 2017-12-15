$(document).ready(function() {
  const results = JSON.parse(localStorage.getItem('results'))
  const stat1 = localStorage.getItem('stat1')
  const stat2 = localStorage.getItem('stat2')

  var chart = c3.generate({
    bindto: '#chart',
    point: {
      focus: {
        expand: {
          enabled: false
        }
      },
      r: 10
    },
    data: {
      xs: {
        stat1: 'stat2'
      },
      columns: [
        [
          'stat1',
          results[9].regresspoints[0],
          results[8].regresspoints[0],
          results[7].regresspoints[0],
          results[6].regresspoints[0],
          results[5].regresspoints[0],
          results[4].regresspoints[0],
          results[3].regresspoints[0],
          results[2].regresspoints[0],
          results[1].regresspoints[0],
          results[0].regresspoints[0]
        ],
        [
          'stat2',
          results[9].regresspoints[1],
          results[8].regresspoints[1],
          results[7].regresspoints[1],
          results[6].regresspoints[1],
          results[5].regresspoints[1],
          results[4].regresspoints[1],
          results[3].regresspoints[1],
          results[2].regresspoints[1],
          results[1].regresspoints[1],
          results[0].regresspoints[1]
        ]
      ],
      type: 'scatter'
    },
    legend: {
      show: false
    },
    axis: {
      x: {
        label: `${stat2}`,
        tick: {
          fit: false
        }
      },
      y: {
        label: `${stat1}`,
        tick: {
          fit: false
        }
      }
    }
  })
  var labels = [
    [
      results[9].player.split(' ').slice(-1).join(' '),
      results[8].player.split(' ').slice(-1).join(' '),
      results[7].player.split(' ').slice(-1).join(' '),
      results[6].player.split(' ').slice(-1).join(' '),
      results[5].player.split(' ').slice(-1).join(' '),
      results[4].player.split(' ').slice(-1).join(' '),
      results[3].player.split(' ').slice(-1).join(' '),
      results[2].player.split(' ').slice(-1).join(' '),
      results[1].player.split(' ').slice(-1).join(' '),
      results[0].player.split(' ').slice(-1).join(' ')
    ],
    [
      results[9].player.split(' ').slice(-1).join(' '),
      results[8].player.split(' ').slice(-1).join(' '),
      results[7].player.split(' ').slice(-1).join(' '),
      results[6].player.split(' ').slice(-1).join(' '),
      results[5].player.split(' ').slice(-1).join(' '),
      results[4].player.split(' ').slice(-1).join(' '),
      results[3].player.split(' ').slice(-1).join(' '),
      results[2].player.split(' ').slice(-1).join(' '),
      results[1].player.split(' ').slice(-1).join(' '),
      results[0].player.split(' ').slice(-1).join(' ')
    ]
  ]
  // series
var series = chart.internal.main
                .selectAll('.' + c3.chart.internal.fn.CLASS.circles)[0];
// text layers
var texts = chart.internal.main
                .selectAll('.' + c3.chart.internal.fn.CLASS.chartTexts)
                .selectAll('.' + c3.chart.internal.fn.CLASS.chartText)[0]
series.forEach(function (series, i) {
    var points = d3.select(series).selectAll('.' + c3.chart.internal.fn.CLASS.circle)[0]
    points.forEach(function (point, j) {
        d3.select(texts[i])
            .append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.3em')
            .attr('x', d3.select(point).attr('cx'))
            .attr('y', d3.select(point).attr('cy'))
            .text(labels[i][j])
    })
})
  const playerId = results[0].player
  $.ajax({
    url:
      'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' +
      playerId +
      '+nba+player&mkt=en-us/',
    beforeSend: function(xhrObj) {
      // Request headers
      xhrObj.setRequestHeader(
        'Ocp-Apim-Subscription-Key',
        'fefb1a1e36f34235b1a5f9aa09b4af16'
      )
    },
    type: 'GET',
    // Request body
    data: ''
  }).done(function(data) {
    var imageUrl1 = data.value[0].contentUrl
    var imageUrl1a = data.value[1].contentUrl
    var playerImage1 = $('<img>').attr('src', imageUrl1)
    $('#playerinfo1').append(playerImage1)
    $.ajax({
      url:
        'https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=' +
        playerId +
        '&mkt=en-us',
      beforeSend: function(xhrObj) {
        // Request headers
        xhrObj.setRequestHeader(
          'Ocp-Apim-Subscription-Key',
          'fefb1a1e36f34235b1a5f9aa09b4af16'
        )
      },
      type: 'GET',
      // Request body
      data: ''
    })
      .done(function(data4) {
        var playerNews = 'Recent News:'
        var playerName = playerId
        var newsbreak = $('<br>')
        var headline1 = data4.value[0].name
        var headline2 = data4.value[1].name
        var headline1Link = data4.value[0].url
        var headline2Link = data4.value[1].url
        var newsheader = $('<h4>').html(playerNews)
        var playerheader = $('<h3>').html(playerName)
        var link1 = $('<a>').html(headline1Link)
        var link2 = $('<a>').html(headline2Link)
        link1.attr('href', headline1Link)
        link2.attr('href', headline2Link)
        var postHL1 = $('<li>').html(headline1)
        var postHL2 = $('<li>').html(headline2)
        $('#playerinfo2').append(
          playerheader,
          newsheader,
          newsbreak,
          postHL1,
          link1,
          newsbreak,
          postHL2,
          link2
        )
      })
      .fail(function() {
        alert('error')
      })

      .fail(function() {
        alert('error')
      })
  })
})
