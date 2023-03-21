const edit = async function(event) {
  const postId = event.target.getAttribute("data-id");
  const response = await fetch(`/edit/${postId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
};

document.querySelector('.edit').addEventListener('click', edit);
