$(document).ready(function() {
const playerId = results.player
$.ajax({
  url:
    'https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=' +
    playerId +
    '+nba+player+gif&mkt=en-us/',
  beforeSend: function(xhrObj) {
    // Request headers
    xhrObj.setRequestHeader(
      'Ocp-Apim-Subscription-Key',
      'd9c75868d25d4db1b924ecd9d4bacf02'
    )
  },
  type: 'GET',
  // Request body
  data: ''
}).done(function(data) {
  var yournamestring = result.player
  var imageUrl1 = data.value[0].contentUrl
  var imageUrl1a = data.value[1].contentUrl
  var youareLine = $('<h2>').html(yournamestring)
  var playerImage1 = $('<img>').attr('src', imageUrl1)
  var playerImage1a = $('<img>').attr('src', imageUrl1a)
  $('#playerinfo1').append(yournamestring, playerImage1)
  $('#playerinfo2').append(playerImage1a).fail(function() {
    alert('error')
  })
})})
