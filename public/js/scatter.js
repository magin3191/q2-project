$( document ).ready(function() {

const results = JSON.parse(localStorage.getItem('results'))
const stat1 = localStorage.getItem('stat1')
const stat2 = localStorage.getItem('stat2')

var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        [
          `${stat1}`,
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
          `${stat2}`,
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
      ]
    }
});

// var chart = c3.generate({
// bindto: '#chart',
//   data: {
//     xs: {
//       stat1: `${stat1}`
//     },
//     // iris data from R
//     columns: [
      // [
      //   `${stat1}`,
      //   results[0].regresspoints[0],
      //   results[1].regresspoints[0],
      //   results[2].regresspoints[0],
      //   results[3].regresspoints[0],
      //   results[4].regresspoints[0],
      //   results[5].regresspoints[0],
      //   results[6].regresspoints[0],
      //   results[7].regresspoints[0],
      //   results[8].regresspoints[0],
      //   results[9].regresspoints[0]
      // ]
//     ],
//     type: 'scatter'
//   },
//   axis: {
//     x: {
//       label: `${stat1}`,
//       tick: {
//         fit: true
//       }
//     },
//     y: {
//       label: `${stat2}`
//     }
//   }
// })
//
// setTimeout(function() {
//   chart.load({
//     xs: {
//       Correl: `${stat2}`
//     },
//     columns: [
      // [
      //   `${stat2}`,
      //   results[0].regresspoints[1],
      //   results[1].regresspoints[1],
      //   results[2].regresspoints[1],
      //   results[3].regresspoints[1],
      //   results[4].regresspoints[1],
      //   results[5].regresspoints[1],
      //   results[6].regresspoints[1],
      //   results[7].regresspoints[1],
      //   results[8].regresspoints[1],
      //   results[9].regresspoints[1]
      // ],
//       [
//         'Correl',
//         results.correl,
//         results.correl,
//         results.correl,
//         results.correl,
//         results.correl,
//         results.correl,
//         results.correl,
//         results.correl,
//         results.correl,
//         results.correl
//       ]
//     ]
//   })
// }, 1000)
//
// setTimeout(function() {
//   chart.unload({
//     ids: 'FGA'
//   })
// }, 2000)
//
// setTimeout(function() {
//   chart.load({
//     columns: [
//       [
//         `${stat1}`,
//         results[0].regresspoints[0],
//         results[1].regresspoints[0],
//         results[2].regresspoints[0],
//         results[3].regresspoints[0],
//         results[4].regresspoints[0],
//         results[5].regresspoints[0],
//         results[6].regresspoints[0],
//         results[7].regresspoints[0],
//         results[8].regresspoints[0],
//         results[9].regresspoints[0]
//       ]
//     ]
//   })
// }, 3000)
});
