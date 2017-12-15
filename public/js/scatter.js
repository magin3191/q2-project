$(document).ready(function() {

  const results = JSON.parse(localStorage.getItem('results'))
  const stat1 = localStorage.getItem('stat1')
  const stat2 = localStorage.getItem('stat2')

  var chart = c3.generate({
    bindto: '#chart',
    point: {
      r: 10
    },
    data: {
      xs: {
        'stat1': 'stat2',
      },
      columns: [
        [
          'stat1',
          results[0].regresspoints[0],
          results[1].regresspoints[0],
          results[2].regresspoints[0],
          results[3].regresspoints[0],
          results[4].regresspoints[0],
          results[5].regresspoints[0],
          results[6].regresspoints[0],
          results[7].regresspoints[0],
          results[8].regresspoints[0],
          results[9].regresspoints[0]
        ],
        [
          'stat2',
          results[0].regresspoints[1],
          results[1].regresspoints[1],
          results[2].regresspoints[1],
          results[3].regresspoints[1],
          results[4].regresspoints[1],
          results[5].regresspoints[1],
          results[6].regresspoints[1],
          results[7].regresspoints[1],
          results[8].regresspoints[1],
          results[9].regresspoints[1]
        ]
      ],
      type: 'scatter'
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
})
