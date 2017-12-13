const regression = require('regression')

function runRegression(arr, stat1, stat2) {
  let playerNames = []
  let playerStatPoints = []
  let result = []
  for (let i = 0; i < arr.length; i++) {
    playerNames.push(arr[i].Player)
    playerStatPoints.push([
      parseFloat(arr[i][stat1]),
      parseFloat(arr[i][stat2])
    ])
  }
  const regressLinear = regression.linear(playerStatPoints)

  for (let i = 0; i < playerStatPoints.length; i++) {
    result.push({
      player: playerNames[i],
      regresspoints: regressLinear.points[i],
      correl: regressLinear.points[i][0] + regressLinear.points[i][1],
      stat1: playerStatPoints[i][0],
      stat2: playerStatPoints[i][1],
      confidence: regressLinear.r2
    })
  }
  result.sort(function(a, b) {
      return parseFloat(b.correl) - parseFloat(a.correl)
  })
  return result.slice(0,10)
}

module.exports = { runRegression }
// result looks like this: { points: [ [ 24, 19.81 ], [ 44, 0.21 ], [ 33, 10.99 ] ],
// predict: [Function: predict],
// equation: [ -0.98, 43.33 ],
// r2: 0.89,
// string: 'y = -0.98x + 43.33' }
