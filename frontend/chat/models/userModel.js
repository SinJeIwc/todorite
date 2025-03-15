const [_, token] = document.cookie.split('='); 

export async function getUsersAndLogo() {
  const response = await fetch(`http://localhost:3000/getUsersAndLogo`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  const users = await response.json();
  return users;
};

