document.addEventListener('DOMContentLoaded', function() {
    const likes = document.querySelectorAll('#like')
    likes.forEach(get_likes);
});

// listen for clicks
document.addEventListener('click', event => {
    const element = event.target;
  
    //if the user clicks on an email display all the contents
    if (element.id === 'like') {
        console.log(element.id)
        const id = element.dataset.post_id;

        fetch(`/${id}/like/${1}`)
        .then(response => response.json())
        .then(result => {
            // Print result
            console.log(result);
            const button = document.querySelector(`[data-post_id='${id}']`);
            if (result.liked === true) {
                console.log(result.liked)
                button.className = 'btn btn-danger'
                button.innerHTML = `${result.likes} Likes`
            } if (result.liked === false) {
                button.className = 'btn btn-outline-danger'
                button.innerHTML = `${result.likes} Likes`
            }
        });

    }
});

function get_likes(button) {
    console.log(button.dataset.post_id);

    fetch(`/${button.dataset.post_id}/like/${0}`)
    .then(response => response.json())
    .then(result => {
        if (result.liked === true) {
            console.log(result.liked)
            button.className = 'btn btn-danger'
            button.innerHTML = `${result.likes} Likes`
        } if (result.liked === false) {
            button.className = 'btn btn-outline-danger'
            button.innerHTML = `${result.likes} Likes`
        }
    })
    .catch(error => {
        console.log('Error', error);
    });
}