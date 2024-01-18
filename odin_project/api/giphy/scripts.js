const inputBox = document.getElementById('api-key');
const searchButton = document.getElementById('search');
const searchBox = document.getElementById('search-box');
const img = document.querySelector('img')

searchButton.addEventListener('click', function() {
    const apiKey = inputBox.value;
    const search = searchBox.value;

    if (!search) {
        search = 'cats'
    }
    searchGif(apiKey, search)
});

function searchGif(apiKey, search) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${search}`, {mode: 'cors'})
    .then(function(response) {
    if (!response.ok) {
        throw new Error('Error, status = ' + response.status);
    }
    return response.json();
    })
    .then(function(response) {
        console.log(response)
    img.src = response.data.images.original.url;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}