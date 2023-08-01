document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', () => compose_email(false));

  document.querySelector('#compose-form').addEventListener('submit', send_email);

  // By default, load the inbox
  load_mailbox('inbox');

});

// listen for clicks
//document.addEventListener('click', event => {
  //const element = event.target;
  //console.log(element.className)

  //if the user clicks on an email display all the contents
  //if (element.className === 'email-read') {
    //console.log('clicked on email element')
    //}


  //}
//);


function compose_email(re) {

  const recipients = document.querySelector('#compose-recipients')
  const subject = document.querySelector('#compose-subject')
  const body = document.querySelector('#compose-body')

  // Show compose view and hide other views
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'block';

  if (re === false) {
    // Clear out composition fields
    recipients.value = '';
    subject.value = '';
    body.value = '';
  } else {
    if (re.subject.includes('Re: ')) {
      subject.value = re.subject
    } else {
      subject.value = `Re: ${re.subject}`
    }
    recipients.value = re.recipients;
    body.value = `On ${re.timestamp} ${re.sender} wrote: ${re.body}`
  }
  
}

function load_mailbox(mailbox) {
  
  const emailView = document.querySelector('#emails-view');

  // Show the mailbox and hide other views
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3 id="title">${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

  fetch(`/emails/${mailbox}`)
  .then(response => response.json())
  .then(emails => {
      // Print emails
      console.log(emails);

      // display a list of the users emails based on thier current box
      if (emails.length === 0) {
        const msg = document.createElement('h3');
        msg.className = 'msg';
        msg.innerHTML = `You have no emails in ${mailbox}`;
        emailView.append(msg);
      } else {
        emails.forEach(view_user_emails);
      }
  });
}

function send_email(event) {

  event.preventDefault()
  let recipients = document.querySelector('#compose-recipients');
  const subject = document.querySelector('#compose-subject');
  const body = document.querySelector('#compose-body');


  //recipients = recipients.value.match(/[a-zA-Z@.]+/g);
  console.log(recipients);

  fetch('/emails', {
    method: 'POST',
    body: JSON.stringify({
        recipients: recipients.value,
        subject: subject.value,
        body: body.value
    })
  })
  .then(response => response.json())
  .then(result => {
      // Print result
      console.log(result);
      load_mailbox('sent');
  });

}

function view_user_emails(content) {
  const email = document.createElement('div');
  if (content.read === false) {
    email.className = 'email';
  } else {
    email.className = 'email-read'
  }
  
  if (content.subject === '') {
    content.subject = '(No Subject)'
  }
  email.id = `${content.id}`
  email.innerHTML = `<p class="e-list"><span style="font-weight:bold">${content.sender}</span>&nbsp;&nbsp;&nbsp;${content.subject}</p> <p class="e-time">${content.timestamp}</p>`;
  email.addEventListener('click', function() {
    console.log('email opened')
    single_email(content);
  });
  // Add post to DOM
  document.querySelector('#emails-view').append(email);
}


function swap_arch(email) {
  let arch = true;

  if (email.archived === true) {
    arch = false;
  }

  fetch(`/emails/${email.id}`, {
    method: 'PUT',
    body: JSON.stringify({
        archived: arch
    })
  })

}



function single_email(email) { 

  const mailbox = document.querySelector('#title').innerHTML

  //set the email to read
  fetch(`/emails/${email.id}`, {
    method: 'PUT',
    body: JSON.stringify({
        read: true
    })
  })

  //load the email details
  fetch(`/emails/${email.id}`)
  .then(response => response.json())
  .then(email => {
      // Print email
      console.log(email);
  
      //display the email to the user
      const email_contents = document.createElement('div');
      email_contents.className = 'email_contents';
      email_contents.innerHTML = `
          <p class="e-header"><span style="font-weight:bold">From:</span> ${email.sender}</p>
          <p class="e-header"><span style="font-weight:bold">To:</span> ${email.recipients}</p>
          <p class="e-header"><span style="font-weight:bold">Subject:</span> ${email.subject}</p>
          <p class="e-header"><span style="font-weight:bold">Timestamp:</span> ${email.timestamp}</p>
          <button class="btn btn-sm btn-outline-primary" id="reply">Reply</button>
          <hr>
          <div class="single-body">
          <p>${email.body}</p>
          </div>`

      const view = document.querySelector('#emails-view');
      view.innerHTML = '';
      view.append(email_contents);

      const archive = document.createElement('button');
      archive.className = "btn btn-sm btn-outline-primary";
      archive.id = 'archive';

      let arbutton = false;

      if (mailbox === 'Inbox') {
        archive.innerHTML = 'Archive';
        view.append(archive);

        arbutton = true;
      } if (mailbox === 'Archive') {
        archive.innerHTML = 'Unarchive';
        view.append(archive);

        arbutton = true;
      } 

      if (arbutton === true) {
        let test = document.querySelector('#archive')
        test.addEventListener('click', function() {
          console.log('archive clicked');
          swap_arch(email);
          if (archive.innerHTML === 'Unarchive') {
            archive.innerHTML = 'Archive'
          } else {
            archive.innerHTML = 'Unarchive'
          }
        });
      }

      let reply = document.querySelector('#reply');
      reply.addEventListener('click', function() {
        console.log('reply clicked')
        compose_email(email);
      });
  });
}

