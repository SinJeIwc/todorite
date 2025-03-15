const [_, token]= document.cookie.split('='); 

fetch(`http://localhost:3000/getUsers`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`
  }
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
