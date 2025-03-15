registerButton = document.querySelector('.js-register');
inputName = document.querySelector('.input-name');
inputEmail = document.querySelector('.input-email');
inputPassword = document.querySelector('.input-pass');


registerButton.addEventListener('click', async () => {
  const name = inputName.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  console.log(name,email,password);

  const response = await sendUser(name, email, password);
  
  if (response.ok) {
    window.location.assign("../login/");
  };
  
  const error = await response.json();
  document.getElementById('result').innerText = JSON.stringify(error);
});


async function sendUser(name, email, password) {
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  });

  return response;
};
