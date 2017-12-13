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
