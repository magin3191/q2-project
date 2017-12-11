(() => {

  //Mobile
  $('#loginWeb').submit((event) => {
    event.preventDefault()

    const email = $('#logEmailWeb').val().trim()
    const password = $('#logPassWeb').val()

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000)
    }

    if (!password) {
      return Materialize.toast('Password must not be blank', 3000)
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/token'
    }

    $.ajax(options)
      .done(() => {
        window.location.href = '/index.html'
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000)
      })
  })


  //Web
  $('#loginMobile').submit((event) => {
    event.preventDefault()

    const email = $('#logEmailMobile').val().trim()
    const password = $('#logPassMobile').val()

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000)
    }

    if (!password) {
      return Materialize.toast('Password must not be blank', 3000)
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ email, password }),
      dataType: 'json',
      type: 'POST',
      url: '/token'
    }

    $.ajax(options)
      .done(() => {
        window.location.href = '/index.html'
      })
      .fail(($xhr) => {
        Materialize.toast($xhr.responseText, 3000)
      })
  })
})()
