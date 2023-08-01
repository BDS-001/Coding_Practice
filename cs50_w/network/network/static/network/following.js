document.addEventListener('DOMContentLoaded', function() {

    fetch(`/following/posts`)
    .then(response => response.json())
    .then(posts => {
        // Print emails
        console.log(posts);

        // ... do something else with emails ...
        if (posts.length === 0) {
            const status = document.createElement('h3');
            status.innerHTML = `Your Followers Have No Posts`;
            document.querySelector('.all-posts').append(status)

        } else {
            console.log(posts)
            posts.forEach(print_posts);
        }

    })
    .catch(error => {
        console.log('Error', error);
    });
    
});

function print_posts(postData) {

    const post = document.createElement('div');
    const margin = document.createElement('div');

    post.className = 'post';
    margin.className = 'post-margin';

    post.innerHTML = `
    <h2 class="post-username">${postData.user}</h2>
    <div class="time">${postData.timestamp}</div>
    <p>${postData.body}</p>
    <div>${postData.likes} likes</div>`;

    const div = document.querySelector('.all-posts');
    div.append(post);
    div.append(margin);
}