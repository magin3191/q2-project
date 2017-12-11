$(document).ready(() => {
  $('#swipe-1').html(localStorage.getItem('stat1'))
  $('#swipe-2').html(localStorage.getItem('stat2'))
  $('#swipe-3').html(localStorage.getItem('constraint'))
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    },
    complete: () => {} // Callback for Modal close
  })
  $('ul.tabs').tabs({
    swipeable: true,
    responsiveThreshold: 1920
  })


  //Navbar Mobile
  const $loginMobile = $('#loginMobile')
  const $signMobile = $('#signMobile')
  const $favMobile = $('#favoritesMobile')
  const $logMobile = $('#logoutMobile')
  $.getJSON('/token')
    .done((loggedIn) => {
      if (loggedIn) {
        $loginMobile.attr('display', 'none')
        $signMobile.attr('display', 'none')
        $favMobile.attr('display', 'block')
        $logMobile.attr('display', 'block')

        $logout.click((event) => {
          event.preventDefault();

          const options = {
            dataType: 'json',
            type: 'DELETE',
            url: '/token',
            success: window.location.href = '/index.html'
          };

          $.ajax(options)
            .done(() => {
              window.location.href = '/index.html';
            })
            .fail(() => {
              Materialize.toast('Unable to log out. Please try again.', 3000);
            });
        });
      }
      else {
        $loginMobile.attr('display', 'block')
        $signMobile.attr('display', 'block')
        $favMobile.attr('display', 'none')
        $logMobile.attr('display', 'none')
      }
    })
    .fail(($xhr) => {
      Materialize.toast($xhr.responseText, 3000);
    });

  window.QUERY_PARAMETERS = {};

  if (window.location.search) {
    window.location.search.substr(1).split('&').forEach((paramStr) => {
      const param = paramStr.split('=');

      window.QUERY_PARAMETERS[param[0]] = param[1];
    });
  }


  //Navbar Web
  const $loginWeb = $('#loginWeb')
  const $signWeb = $('#signWeb')
  const $favWeb = $('#favoritesWeb')
  const $logWeb = $('#logoutWeb')
  $.getJSON('/token')
    .done((loggedIn) => {
      if (loggedIn) {
        $loginWeb.attr('display', 'none')
        $signWeb.attr('display', 'none')
        $favWeb.attr('display', 'block')
        $logWeb.attr('display', 'block')

        $logout.click((event) => {
          event.preventDefault();

          const options = {
            dataType: 'json',
            type: 'DELETE',
            url: '/token',
            success: window.location.href = '/index.html'
          };

          $.ajax(options)
            .done(() => {
              window.location.href = '/index.html';
            })
            .fail(() => {
              Materialize.toast('Unable to log out. Please try again.', 3000);
            });
        });
      }
      else {
        $loginWeb.attr('display', 'block')
        $signWeb.attr('display', 'block')
        $favWeb.attr('display', 'none')
        $logWeb.attr('display', 'none')
      }
    })
    .fail(($xhr) => {
      Materialize.toast($xhr.responseText, 3000);
    });

  window.QUERY_PARAMETERS = {};

  if (window.location.search) {
    window.location.search.substr(1).split('&').forEach((paramStr) => {
      const param = paramStr.split('=');

      window.QUERY_PARAMETERS[param[0]] = param[1];
    });
  }
})
