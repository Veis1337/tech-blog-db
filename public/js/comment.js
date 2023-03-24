const commentFormHandler = async function(event) {
  event.preventDefault();
  
  const postId = document.querySelector('#post-id').value;
  const body = document.querySelector('#comment-body').value;
  console.log(postId, body)
  if (body) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
    document.location.reload();
    console.log('comment posted');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
