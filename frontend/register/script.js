registerButton = document.querySelector('.js-register');
inputName = document.querySelector('.input-name');
inputEmail = document.querySelector('.input-email');
inputPassword = document.querySelector('.input-pass');

registerButton.addEventListener('click', () => {
  const name = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  console.log(name,email,password);

  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  }).then(response => {
      if (response.ok) {
        window.location.assign("../login/");
      }
      return response.json()
    })
    .then(data => {
      document.getElementById('result').innerText = JSON.stringify(data);
    })
    .catch(error => {
      console.error(error);
    });
});
