$( document ).ready(function() {

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
           min: 0,
            label: `${stat2}`,
            tick: {
                fit: false
            }
        },
        y: {
         min: 0,
            label: `${stat1}`,
            tick: {
                fit: false
            }
        }
    }
})
})

var labels = [
[
  results[0].player_name,
  results[1].player_name,
  results[2].player_name,
  results[3].player_name,
  results[4].player_name,
  results[5].player_name,
  results[6].player_name,
  results[7].player_name,
  results[8].player_name,
  results[9].player_name
],
[
  results[0].player_name,
  results[1].player_name,
  results[2].player_name,
  results[3].player_name,
  results[4].player_name,
  results[5].player_name,
  results[6].player_name,
  results[7].player_name,
  results[8].player_name,
  results[9].player_name
]
];
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
});
