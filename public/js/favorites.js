(function() {
  'use strict'

  const favStats = {}

  const ball0 = $('#ball0')
  const ball1 = $('#ball1')
  const ball2 = $('#ball2')
  const ball3 = $('#ball3')

  const button0 = $('#buttonFav0')
  const button1 = $('#buttonFav1')
  const button2 = $('#buttonFav2')
  const button3 = $('#buttonFav3')

  $.getJSON('/favorites')
    .done((favorites) => {
      for(let i in favorites) {
        console.log(favorites)
        let fav = JSON.parse(favorites[i].favorite)

        favStats[`ball${i}`] = fav

        $(`#fav${i}`).css('display', 'inherit')
        $(`#buttonFav${i}`).append(`<h2>${fav.stat1}<br/>+<br/>${fav.stat2}<br/>+<br/>${fav.constraint} players`)
      }

    })
    .fail(() => {
      window.location.href = '/signup.html'
    })


  ball0.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball0, JSON.stringify(favStats[this.id]))
    } else {
      removeFavorite(ball0, JSON.stringify(favStats[this.id]))
    }
  })

  ball1.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball1, JSON.stringify(favStats[this.id]))
    } else {
      removeFavorite(ball1, JSON.stringify(favStats[this.id]))
    }
  })

  ball2.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball2, JSON.stringify(favStats[this.id]))
    } else {
      removeFavorite(ball2, JSON.stringify(favStats[this.id]))
    }
  })

  ball3.click(function() {
    if ($(this).css('color') === 'rgba(0, 0, 0, 0)') {
      addFavorite(ball3, JSON.stringify(favStats[this.id]))
    } else {
      removeFavorite(ball3, JSON.stringify(favStats[this.id]))
    }
  })


  button0.click(function() {
    search(favStats.ball0)
  })
  button1.click(function() {
    search(favStats.ball1)
  })
  button2.click(function() {
    search(favStats.ball2)
  })
  button3.click(function() {
    search(favStats.ball3)
  })


  const addFavorite = (svgBall, favId) => {
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
        svgBall
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

  const removeFavorite = (svgBall, favId) => {
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
        svgBall
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
