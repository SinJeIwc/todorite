loginButton = document.querySelector('.js-login');

inputEmail = document.querySelector('.input-email');
inputPassword = document.querySelector('.input-pass');

loginButton.addEventListener('click', () => {
  const email = inputEmail.value;
  const password = inputPassword.value;

  console.log(email,password);

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(response => response.json())
    .then(data => {
      if (data.token) {
        document.cookie = `token=${data.token}; path=/;`;
        window.location.assign("../chat/");
      } else {
        document.getElementById('result').innerText = JSON.stringify(data);
      }
    })
    .catch(error => {
      console.error(error);
    });
});

