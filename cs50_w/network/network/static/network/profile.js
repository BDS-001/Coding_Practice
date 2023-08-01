document.addEventListener('DOMContentLoaded', function() {
    const username = document.querySelector('#profile_username')
    if (username) {
        profile_data(username.innerHTML);

        const user_id = JSON.parse(document.getElementById('user_id').textContent);
        if (user_id === username.innerHTML) {
            console.log('match')
        } else {
            follow_button(username.innerHTML);
        }

    }
});

// listen for clicks
document.addEventListener('click', event => {
  const element = event.target;

  //if the user clicks on an email display all the contents
  if (element.id === 'follow') {
    const username = element.dataset.username;

    fetch(`/user/${username}/follow`, {
        method: 'POST',
        body: JSON.stringify({
            follow: true
        })
    })
    .then(response => response.json())
    .then(result => {
        // Print result
        console.log(result);
        follow_button(username);
    });

    }
  }
);

function profile_data(username) {

    fetch(`/user/${username}/data`)
    .then(response => response.json())
    .then(posts => {
        // Print emails
        console.log(posts);

        // ... do something else with emails ...
        if (posts.length === 0) {
            const status = document.createElement('h3');
            status.innerHTML = `${username} has no posts`;
            document.querySelector('.all-posts').append(status)

        } else {
            posts.forEach(print_posts);
        }

    })
    .catch(error => {
        console.log('Error', error);
    });
}

function print_posts(postData) {

    const user_id = JSON.parse(document.getElementById('user_id').textContent);
    if (user_id === postData.user) {
        //add edit button
    }

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

function follow_button(username) {
    fetch(`/user/${username}/follow`)
    .then(response => response.json())
    .then(button => {
        // Print emails
        console.log(button);

        // ... do something else with emails ...
        const followButton = document.querySelector("#follow");
        followButton.innerHTML = button.label;

    })
    .catch(error => {
        console.log('Error', error);
    });
}