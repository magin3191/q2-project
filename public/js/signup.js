(() => {
  //Mobile
  $('#signUpMobile').submit((event) => {
    event.preventDefault()

    const firstName = $('#signFnMobile').val().trim()
    const lastName = $('#signLnMobile').val().trim()
    const email = $('#signEmailMobile').val().trim()
    const password = $('#signPassMobile').val()

    if (!firstName) {
      return Materialize.toast('First name must not be blank', 3000)
    }

    if (!lastName) {
      return Materialize.toast('Last name must not be blank', 3000)
    }

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000)
    }

    if (email.indexOf('@') < 0) {
      return Materialize.toast('Email must be valid', 3000)
    }

    if (!password || password.length < 8) {
      return Materialize.toast(
        'Password must be at least 8 characters long',
        3000
      )
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
  $('#signUpWeb').submit((event) => {
    event.preventDefault()

    const firstName = $('#signFnWeb').val().trim()
    const lastName = $('#signLnWeb').val().trim()
    const email = $('#signEmailWeb').val().trim()
    const password = $('#signPassWeb').val()

    if (!firstName) {
      return Materialize.toast('First name must not be blank', 3000)
    }

    if (!lastName) {
      return Materialize.toast('Last name must not be blank', 3000)
    }

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000)
    }

    if (email.indexOf('@') < 0) {
      return Materialize.toast('Email must be valid', 3000)
    }

    if (!password || password.length < 8) {
      return Materialize.toast(
        'Password must be at least 8 characters long',
        3000
      )
    }

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
