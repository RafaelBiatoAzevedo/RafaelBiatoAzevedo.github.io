function createStyleWord() {
  const styleClass1 = ['newspaper', 'magazine1', 'magazine2'];
  const styleClass2 = ['medium', 'reallybig', 'big'];
  const styleClass3 = ['rotateright', 'rotateleft', 'skewright', 'skewleft'];
  return [
    styleClass1[Math.floor(Math.random() * 3)],
    styleClass2[Math.floor(Math.random() * 3)],
    styleClass3[Math.floor(Math.random() * 4)],
  ];
}

function insertClass(element) {
  const listStyle = createStyleWord();
  for (let item = 0; item < listStyle.length; item += 1) {
    element.classList.add(listStyle[item]);
  }
}

function createLetter() {
  const text = document.querySelector('#carta-texto');
  const listWords = text.value.split(' ');
  const paragraph = document.querySelector('#carta-gerada');
  const count = document.querySelector('#carta-contador');
  paragraph.innerText = '';
  if (listWords[0] === '') {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
    count.innerText = 0;
  } else {
    for (let index = 0; index < listWords.length; index += 1) {
      count.innerText = listWords.length;
      const span = document.createElement('span');
      span.innerText = listWords[index];
      insertClass(span);
      paragraph.appendChild(span);
    }
  }
}

window.onload = function () {
  const btnCreate = document.querySelector('#criar-carta');
  btnCreate.addEventListener('click', createLetter);
};
