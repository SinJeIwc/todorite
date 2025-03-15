const [_, token]= document.cookie.split('='); 

async function getUsers() {
  const response = await fetch(`http://localhost:3000/getUsers`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();
  const users = JSON.stringify(data);
  
  return users;
};

getUsers().then(users => {
  document.getElementById('result').innerText = users; 
});
