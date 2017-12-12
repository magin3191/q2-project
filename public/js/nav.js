//Navbar Mobile
(function() {
  const $logMobile = $('#logMobile')
  const $signMobile = $('#signMobile')
  const $favMobile = $('#favoritesMobile')
  const $logoutMobile = $('#logoutMobile')
  $.getJSON('/token')
    .done((loggedIn) => {
      if (loggedIn) {
        $logMobile.css('display', 'none')
        $signMobile.css('display', 'none')
        $favMobile.css('display', 'block')
        $logoutMobile.css('display', 'block')

        $logoutMobile.click((event) => {
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
      } else {
        $logMobile.css('display', 'block')
        $signMobile.css('display', 'block')
        $favMobile.css('display', 'none')
        $logoutMobile.css('display', 'none')
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
  const $logWeb = $('#logWeb')
  const $signWeb = $('#signWeb')
  const $favWeb = $('#favoritesWeb')
  const $logoutWeb = $('#logoutWeb')
  $.getJSON('/token')
    .done((loggedIn) => {
      if (loggedIn) {
        $logWeb.css('display', 'none')
        $signWeb.css('display', 'none')
        $favWeb.css('display', 'block')
        $logoutWeb.css('display', 'block')

        $logoutWeb.click((event) => {
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
      } else {
        $logWeb.css('display', 'block')
        $signWeb.css('display', 'block')
        $favWeb.css('display', 'none')
        $logoutWeb.css('display', 'none')
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
})();
