// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });


  //browsers restrict hhtp requests to outside sources
  //to fix use mode cors in a js object
  fetch('url.url.com/api', {
    mode: 'cors'
  });