const inputBox = document.getElementById('api-key');
const searchButton = document.getElementById('search');
const img = document.querySelector('img')

searchButton.addEventListener('click', function() {
    const apiKey = inputBox.value;
    searchGif(apiKey, 'cats')
});

function searchGif(apiKey, search) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${search}`, {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    img.src = response.data.images.original.url;
    });
}