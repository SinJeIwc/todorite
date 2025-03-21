loginButton = document.querySelector('.js-login');
inputEmail = document.querySelector('.input-email');
inputPassword = document.querySelector('.input-pass');

loginButton.addEventListener('click', async () => {
  const email = inputEmail.value;
  const password = inputPassword.value;

  console.log(email,password);
  
  const response = await sendUser(email, password);

  const data = await response.json();
  
  if (data.token) {
    document.cookie = `token=${data.token}; path=/;`;
    window.location.assign("../chat/");
  } else {
    document.getElementById('result').innerText = JSON.stringify(data);
  }
});


async function sendUser(email, password) {
  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  return response;
};
