$('.modal').modal({
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
  },
  complete: function() {} // Callback for Modal close
});

// $('#dropdown3').click(() => console.log($(this)))
// $('.d3').click(() => {
//   $('#foot').attr('id', $(this).html())
// })
$('#submit').click(() => {
  let arr = $('.collapsible-body')
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].attributes[2].value)
  }
})


// $('#submit').click(() => console.log('done'))
