function alerta() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

function removeInputGender() {
  const div = document.querySelector('#genero');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function removeContent() {
  const rightContent = document.querySelector('.right-content');
  while (rightContent.firstChild) {
    rightContent.removeChild(rightContent.firstChild);
  }
}

function validacaoInput() {
  let status = false;
  const input = document.querySelectorAll('.input-text');
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].value === '') {
      status = true;
    }
  }
  return status;
}

function validacaoRadio() {
  let status = false;
  const radio = document.querySelectorAll('.radio');
  for (let index = 0; index < radio.length; index += 1) {
    if (radio[index].checked) {
      status = true;
    }
  }
  return status;
}

function msgCheck() {
  const paragraph = document.querySelector('#invalid-values');
  paragraph.innerText = 'Campos inválidos';
  paragraph.id = 'msgCheck';
  paragraph.className = 'paragraph-Msg';
}

function report() {
  const name = document.querySelector('#name');
  const lastname = document.querySelector('#lastname');
  const email = document.querySelector('#phonemail');
  const birthdate = document.querySelector('#birthdate');
  let gender = '';
  const genders = document.querySelectorAll('.radio');
  for (let index = 0; index < genders.length; index += 1) {
    if (genders[index].checked === true) {
      gender = genders[index].value;
    }
  }
  removeContent();
  const rightContent = document.querySelector('.right-content');
  const paragraph = document.createElement('p');
  paragraph.innerText = `Olá Seja bem vindo, ${name.value} ${lastname.value}\n${email.value}\n${birthdate.value}\n${gender}`;
  rightContent.appendChild(paragraph);
}

function validacao(event) {
  const status1 = validacaoInput();
  const status2 = validacaoRadio();
  if (status1  || !status2) {
    msgCheck();
    event.preventDefault();
  } else {
    report();
  }
}

function generoPersonaliza() {
  removeInputGender();
  const input = document.createElement('input');
  input.placeholder = 'Gênero (opcional)';
  input.name = 'gender-custom';
  input.className = 'genero-personalizado';
  document.querySelector('#genero').appendChild(input);
}

function createEvents() {
  document.querySelector('#button-login').addEventListener('click', alerta);
  document.querySelector('#facebook-register').addEventListener('click', validacao);
  document.querySelector('#perso').addEventListener('click', generoPersonaliza);
  document.querySelector('#fem').addEventListener('click', removeInputGender);
  document.querySelector('#masc').addEventListener('click', removeInputGender);
}

window.onload = function () {
  createEvents();
};
