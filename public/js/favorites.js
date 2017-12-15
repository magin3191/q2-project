(function() {
  'use strict'
  let fav1
  let fav2
  let fav3
  let fav4

  let par1
  let par2
  let par3
  let par4

  const ball1 = $('#ball1')
  const ball2 = $('#ball2')
  const ball3 = $('#ball3')
  const ball4 = $('#ball4')

  const button1 = $('#buttonFav1')
  const button2 = $('#buttonFav2')
  const button3 = $('#buttonFav3')
  const button4 = $('#buttonFav4')


  $.getJSON('/favorites')
    .done((favorites) => {
      fav1 = favorites[0].favorite
      fav2 = favorites[1].favorite
      fav3 = favorites[2].favorite
      fav4 = favorites[3].favorite

      par1 = JSON.parse(fav1)
      par2 = JSON.parse(fav2)
      par3 = JSON.parse(fav3)
      par4 = JSON.parse(fav4)

      button1.append(`<h2>${par1.stat1}<br/>+<br/>${par1.stat2}<br/>+<br/>${par1.constraint} players`)

      button2.append(`<h2>${par2.stat1}<br/>+<br/>${par2.stat2}<br/>+<br/>${par2.constraint} players`)

      button3.append(`<h2>${par3.stat1}<br/>+<br/>${par3.stat2}<br/>+<br/>${par3.constraint} players`)

      button4.append(`<h2>${par4.stat1}<br/>+<br/>${par4.stat2}<br/>+<br/>${par4.constraint} players`)

    })
    .fail(() => {
      window.location.href = '/signup.html'
    })


  ball1.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball1, fav1)
    } else {
      removeFavorite(ball1, fav1)
    }
  })
  ball2.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball2, fav2)
    } else {
      removeFavorite(ball2, fav2)
    }
  })
  ball3.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball3, fav3)
    } else {
      removeFavorite(ball3, fav3)
    }
  })
  ball4.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball4, fav4)
    } else {
      removeFavorite(ball4, fav4)
    }
  })

  button1.click(function() {
    search(par1)
  })
  button2.click(function() {
    search(par2)
  })
  button3.click(function() {
    search(par3)
  })
  button4.click(function() {
    search(par4)
  })


  const addFavorite = (ball, favId) => {
    event.preventDefault()

    const options = {
      contentType: 'application/json',
      data: favId,
      dataType: 'json',
      type: 'POST',
      url: '/favorites'
    }

    $.ajax(options)
      .done(() => {
        ball
          .css({
            'color': 'orange',
            'animation': 'fade1 .5s linear 1'
          })
          .attr({
            'data-tooltip': 'Remove Favorite'
          })
          .tooltip()
        Materialize.toast('Favorite added', 1500)
      })
      .fail(() => {
        Materialize.toast('Unable to add favorite', 2000)
      })
  }

  const removeFavorite = (ball, favId) => {
    event.preventDefault()

    const options = {
      contentType: 'application/json',
      data: favId,
      dataType: 'json',
      type: 'DELETE',
      url: '/favorites'
    }

    $.ajax(options)
      .done(() => {
        ball
          .css({
            'color': 'rgba(0, 0, 0, 0)',
            'animation': 'fade2 .5s linear 1'
          })
          .attr({
            'data-tooltip': 'Add Favorite'
          })
          .tooltip()
        Materialize.toast('Favorite removed', 1500)
      })
      .fail(() => {
        Materialize.toast(
          'Unable to remove favorite',
          3000
        )
      })
  }

  const search = (parId) => {
    event.preventDefault()

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({
        stat1: parId.stat1,
        stat2: parId.stat2,
        constraint: parId.constraint
      }),
      dataType: 'json',
      type: 'POST',
      url: '/stats',
    }
    $.ajax(options)
        .done(results => {
          localStorage.setItem('stat1', parId.stat1)
          localStorage.setItem('stat2', parId.stat2)
          localStorage.setItem('search_id', JSON.stringify({
            stat1: parId.stat1,
            stat2: parId.stat2,
            constraint: parId.constraint
          }))
          localStorage.setItem('results', JSON.stringify(results))
          window.location.href = '/results.html'
        })
        .fail((err) => {
          Materialize.toast('Unable to post', 3000);
        });
  }
})()
