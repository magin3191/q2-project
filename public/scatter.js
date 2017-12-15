const results = JSON.parse(localStorage.getItem('results'))
const stat1 = localStorage.getItem('stat1')
const stat2 = localStorage.getItem('stat2')
const c3 = require('c3')
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
        results.regresspoints[1][0],
        results.regresspoints[2][0],
        results.regresspoints[3][0],
        results.regresspoints[4][0],
        results.regresspoints[5][0],
        results.regresspoints[6][0],
        results.regresspoints[7][0],
        results.regresspoints[8][0],
        results.regresspoints[9][0]
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
        results.regresspoints[0][1],
        results.regresspoints[1][1],
        results.regresspoints[2][1],
        results.regresspoints[3][1],
        results.regresspoints[4][1],
        results.regresspoints[5][1],
        results.regresspoints[6][1],
        results.regresspoints[7][1],
        results.regresspoints[8][1],
        results.regresspoints[9][1]
      ],
      [
        'Correl',
        results.correl,
        results.correl,
        results.correl,
        results.correl,
        results.correl,
        results.correl,
        results.correl,
        results.correl,
        results.correl,
        results.correl
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
        results.regresspoints[1][0],
        results.regresspoints[2][0],
        results.regresspoints[3][0],
        results.regresspoints[4][0],
        results.regresspoints[5][0],
        results.regresspoints[6][0],
        results.regresspoints[7][0],
        results.regresspoints[8][0],
        results.regresspoints[9][0]
      ]
    ]
  })
}, 3000)
