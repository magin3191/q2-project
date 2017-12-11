$(document).ready(function() {
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

  const arr = $('.collapsible-body')
  $('#search').click(function() {
    localStorage.setItem('stat1', arr[0].attributes[2].value)
    localStorage.setItem('stat2', arr[1].attributes[2].value)
    localStorage.setItem('constraint', arr[2].attributes[2].value)
    window.location.href = "results.html"
  })


  $('#signUpMobile').submit((event) => {
    event.preventDefault();

    const firstName = $('#signFnMobile').val().trim();
    const lastName = $('#signLnMobile').val().trim();
    const email = $('#signEmailMobile').val().trim();
    const password = $('#signPassMobile').val();

    if (!firstName) {
      return Materialize.toast('First name must not be blank', 3000);
    }

    if (!lastName) {
      return Materialize.toast('Last name must not be blank', 3000);
    }

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000);
    }

    if (email.indexOf('@') < 0) {
      return Materialize.toast('Email must be valid', 3000);
    }

    if (!password || password.length < 8) {
      return Materialize.toast(
        'Password must be at least 8 characters long',
        3000
      );
    }
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(password)

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }),
      dataType: 'json',
      type: 'POST',
      url: '/users'
    };

    $.ajax(options)
      .done(() => {
        window.location.href = '/index.html';
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000);
      });
  });
})
