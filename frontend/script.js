fetch(`http://localhost:3000/users?${document.cookie || undefined}`, {
  method: 'GET',
  credentials: 'include'
}).then(response => {
    if (response.ok) {
      return response.json()
    }
    return response.json()
  })
  .then(data => {
    document.getElementById('result').innerText = JSON.stringify(data);
  })
  .catch(error => {
    console.error(error);
  });
